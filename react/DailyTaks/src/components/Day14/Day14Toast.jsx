import React from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Day14Toast() {
  function handleClick() {
    toast("Hello this is our first toast", {
      position: "bottom-center",
    });
  }

  return (
    <div>
      <h1>Toast example</h1>
      <button onClick={handleClick}>Click me to show toast</button>
      &nbsp;
      <button
        onClick={() => {
          toast.loading("Please wait data is fetchng.");
        }}
      >
        Loading
      </button>
      &nbsp;
      <button
        onClick={() => {
          toast.dismiss();
          toast.error("This is error");
        }}
      >
        Show Error
      </button>
      &nbsp;
      <button
        onClick={() => {
          toast.info("This is INfo");
        }}
      >
        Info
      </button>
      <hr />
      <button
        onClick={() => {
          toast.success("All good");
        }}
      >
        Show Sccess
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
}
