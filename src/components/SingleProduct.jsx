import React from "react";
import { Link, useParams } from "react-router-dom";
import { mydata } from "../data";

const SingleProduct = () => {
  console.log(useParams());
  const {productID} = useParams();
  const product  = mydata.find((data)=>{
    // eslint-disable-next-line eqeqeq
    return data.id == productID
  }) 
  console.log(product);
  return (
    <div className="SingleProduct">
      <h1>Single Product Page ID : {productID}</h1>
        <ul className=" list-group list-group-flush text-center p-2">
            <li className=" list-group-item list-group-item-light">Title : {product.title}</li>
            <li className=" list-group-item list-group-item-light">Rating Count : {product.rating.count}</li>
            <li className=" list-group-item list-group-item-light">Rating Rate : {product.rating.rate}</li>
            <li className=" list-group-item list-group-item-light">Price : {product.price}</li>
            <li className=" list-group-item list-group-item-light">Category : {product.category}</li>
            <li className=" list-group-item list-group-item-light">Description : {product.description}</li>
            <li className=" list-group-item list-group-item-light">Product ID : {product.id}</li>
            <img src={product.image} alt="img" className="w-25 mx-auto p-3" />
        </ul>
        <Link to={"/product"}>
            <strong>Go to Product Page</strong>
        </Link>
    </div>
  );
};

export default SingleProduct;
