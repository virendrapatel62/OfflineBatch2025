import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Urls } from "../../constants/urls";
import { useRecoilValue } from "recoil";
import { authStore } from "../../stores/auth.store";
import Image from "../../components/image/image";
import Loader from "../../components/loader/loader";

export default function OrdersPage() {
  const [data, setData] = useState({
    isLoading: false,
    orders: [],
  });

  const user = useRecoilValue(authStore);

  useEffect(() => {
    setData({
      isLoading: true,
      orders: [],
    });

    axios
      .get(Urls.orders, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setData({
          isLoading: false,
          orders: response.data.data,
        });
      });
  }, []);

  return (
    <div className="p-4 container mx-auto">
      {data.isLoading && <Loader />}
      {data.orders.map((order) => (
        <div
          key={order._id}
          className="border p-2 rounded-md border-gray-300 mb-4"
        >
          <ul className="flex row gap-4">
            {order.items.map((item) => (
              <li key={item._id}>
                <div className="flex flex-col justify-between">
                  <Image
                    className={`w-40 h-40 rounded-md object-cover`}
                    src={item.product.images[0]}
                    alt={item.product.name}
                  />
                  <div className="flex flex-col">
                    <div className="text-lg font-bold">{item.product.name}</div>
                    <div className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div>Total: {order.total}</div>
        </div>
      ))}
    </div>
  );
}
