import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Urls } from "../../constants/urls";
import axios from "axios";
import Image from "../../components/image/image";
import { useRecoilValue } from "recoil";

import { authStore } from "../../stores/auth.store";
import { toast } from "react-toastify";

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const user = useRecoilValue(authStore);

  const [productsToCheckout, setProductsToCheckout] = useState([]);
  const navigate = useNavigate();

  const [data, setData] = useState({
    isLoading: false,
    error: null,
    orderProducts: [],
    totalPrice: 0,
  });

  function getQuantity(id) {
    return productsToCheckout.find((product) => product.id == id)?.quantity;
  }

  useEffect(() => {
    const orderProducts = searchParams.getAll("item").map((item) => {
      const [id, quantity] = item.split(":");
      return { id, quantity: parseInt(quantity) };
    });

    setProductsToCheckout(orderProducts);
  }, [searchParams]);

  useEffect(() => {
    if (productsToCheckout.length === 0) return;

    setData({ isLoading: true, error: null, orderProducts: [] });

    const promises = productsToCheckout.map((product) => {
      return axios.get(Urls.productDetails(product.id)).then((response) => {
        return response.data.data;
      });
    });

    Promise.all(promises).then((results) => {
      let total = 0;

      results.forEach((product) => {
        total += product.price * getQuantity(product.id);
      });

      setData({
        isLoading: false,
        error: null,
        orderProducts: results,
        totalPrice: total,
      });
    });
  }, [productsToCheckout]);

  function handlePlaceOrder() {
    setData({ ...data, isLoading: true });

    const payload = {
      products: data.orderProducts.map((product) => ({
        id: product.id,
        quantity: getQuantity(product.id),
      })),
      phone: "98989829389",
      address: "Jabalpur Barela",
    };

    axios
      .post(Urls.placeOrder, payload, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        toast.success("Order Placed Successfully");

        setTimeout(() => {
          navigate("/orders");
        }, 2000);
      });
  }

  return (
    <div className="w-1/2 mx-auto flex flex-col gap-4 py-10">
      <h1 className="text-2xl font-bold">Checkout</h1>
      {data.isLoading && (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-40 w-40 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      {data.error && <div>{data.error}</div>}

      <div className="flex justify-end">
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Place Order
        </button>
      </div>

      <div className="flex flex-col gap-4 ">
        {data.orderProducts.map((product) => (
          <div
            key={product.id}
            className="flex gap-4 border-1 border-gray-200 rounded-md p-4"
          >
            <div className="flex gap-4 w-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                className="w-30 aspect-square object-contain"
              />
              <div className="flex flex-col gap-2 w-full">
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">
                    Rs: {product.price}
                  </span>
                </div>

                <div className="flex justify-between w-full">
                  <p>quantity: {getQuantity(product.id)}</p>
                  <p className="font-bold">
                    Total: {product.price * getQuantity(product.id)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <p className="font-bold">Total Price: {data.totalPrice}</p>
      </div>
    </div>
  );
}
