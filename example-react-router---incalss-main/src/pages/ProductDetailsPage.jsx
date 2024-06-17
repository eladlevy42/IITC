import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();
  const context = useOutletContext();

  return (
    <>
      <div>ProductDetailsPage {productId}</div>
      <div>Some shared state {JSON.stringify(context)}</div>
    </>
  );
}

export default ProductDetailsPage;
