import React from "react";
import { Outlet, Link } from "react-router-dom";

const Product = ({ mydata }) => {
  console.log(mydata);
  return (
    <div className="Product">
      <Outlet />
      <h1 className="text-center">Product Page</h1>
      <div className="product-detail-container">
        {mydata.map((data) => {
          return (
            <div
              key={data.id}
              className="container-fluid w-50 p-1 bg-danger-subtle text-center  rounded my-2"
            >
              <h3 className="text-center text-danger my-2">{data.title}</h3>
              <img
                src={data.image}
                alt=""
                className="img-fluid w-25 h-25 rounded-circle "
              />
              <h4 className="text-muted my-3">
                product {data.id} prices :{data.price} $
              </h4>
              <button className="btn btn-info">
                <Link to={`/product/${data.id}`}>More info</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
