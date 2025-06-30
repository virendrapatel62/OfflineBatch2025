import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Urls } from "../../constants/urls";
import { useRecoilValue } from "recoil";
import { authStore } from "../../stores/auth.store";

export default function OrdersPage() {
  const [data, setData] = useState({
    isLoading: false,
    orders: [],
  });

  const user = useRecoilValue(authStore);

  useEffect(() => {
    axios
      .get(Urls.orders, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return <div>Orders Page</div>;
}
