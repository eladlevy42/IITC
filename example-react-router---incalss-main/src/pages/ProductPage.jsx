import React from "react";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";

function ProductPage() {
  const context = useOutletContext();

  const [searchParams, setSearchParams] = useSearchParams({
    q: "baba",
    isComplete: "false",
  });
  console.log(searchParams);

  const filterValue = searchParams.get("q");

  return (
    <div>
      <input
        type="text"
        value={filterValue}
        onChange={(ev) =>
          setSearchParams((prev) => {
            return {
              ...prev,
              q: ev.target.value,
            };
          })
        }
      />
      <div>ProductPage</div>
      <br />
      <div>Some shared state {JSON.stringify(context)}</div>
      <br />
      <Link to="1">Product 1</Link>
      <br />
      <Link to="2">Product 2</Link>
    </div>
  );
}

export default ProductPage;
