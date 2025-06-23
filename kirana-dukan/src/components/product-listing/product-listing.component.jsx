import React from "react";
import { productsListingStore } from "../../stores/products-listing.store";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import { Urls } from "../../constants/urls";
import { Link } from "react-router-dom";
import { shuffle } from "lodash";
import Image from "../image/image";

export default function ProductListingComponent(props) {
  const [storeData, setStoreData] = useRecoilState(productsListingStore);

  useEffect(() => {
    axios
      .get(Urls.products)
      .then((response) => {
        console.log(response.data);
        setStoreData({
          ...storeData,
          products: shuffle(response.data.data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {storeData.products?.map((product) => (
          <div className="border-1 rounded-md border-gray-200 text-gray-600">
            <Link
              className="flex-col  border-inherit"
              to={`/product/${product.id}`}
              key={product.id}
            >
              <Image
                className="h-3/4 w-full object-cover rounded-t-md border-b-1 border-gray-200"
                src={product.images[0]}
                alt={product.name}
              />

              <div className="p-2 pt-4">
                <div className="text-sm font-bold">{product.name}</div>
                <div className="text-sm">
                  ₹ {product.price}/{product.unit}
                </div>
                <div className="text-sm">{product.description}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
