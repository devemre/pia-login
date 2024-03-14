import React from "react";
import { Product } from "../../type/Product";

type CardProps = {
  product: Product;
};

const Card = (props: CardProps) => {
  return (
    <div className="bg-white rounded-md p-2 text-sm">
      <p>{props.product.title}</p>
      <hr />
      <p>{props.product.description}</p>
      <img src={props.product.thumbnail} />
      <p>{props.product.price}$</p>
    </div>
  );
};

export default Card;
