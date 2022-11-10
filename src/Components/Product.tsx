import React from "react";
import Discount from "../Components/UI/Discount";
import HomeAddToCartBtn from "./UI/HomeAddToCartBtn";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  key: number;
  discount: number;
  component?: string;

}

const Product: React.FC<IProduct> = ({
  id,
  name,
  description,
  image,
  price,
  discount,
  component,
}: IProduct) => {
  return (
    <>
      <div
        style={{
          maxWidth: "280px",
          border: "4px solid #000",
          marginBottom: "13px"
        }}
      >
        <img
          src={image}
          alt={description}
          style={{ objectFit: "cover", height: "250px", width: "280px"}}
          loading="lazy"
        />

        <div
          style={{
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ textDecoration: "underline 3px" }} role="paragraph" >
            {name.toUpperCase()}
          </p>
          <div style={{ maxWidth: "150px", padding: "0.5rem" }} data-testid="description">
            {description}
          </div>

          <div>
            {discount ? (
              <div data-testid="discount">
             
                <Discount price={price} discount={discount} />
              </div>
            ) : (
              <div>
                {" "}
                <strong> {price}/$</strong>
              </div>
            )}
          </div>

          {component !== "cart" && (
            <HomeAddToCartBtn
              id={id}
              price={price}
              name={name}
              description={description}
              image={image}
              key={id}
              discount={discount}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
