import React from "react";
import loading from "./loading.gif";
export default function Spinner() {
  return (
    <div>
      <img src={loading} className="object-center mx-auto my-10" alt="" />
    </div>
  );
}
