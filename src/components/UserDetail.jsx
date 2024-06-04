import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const {name} = useParams();
  console.log(name);
  return (
    <div className="UserDetail">
      <h1><span className="text-danger fst-italic">{name}</span> UserDetail Page </h1>
    </div>
  );
};


export default UserDetail;
