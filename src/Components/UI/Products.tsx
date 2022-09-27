import React from "react";
import Product from "../Product";
import { Flex } from "@chakra-ui/react";

const Products: React.FC = () => {
  /** test data */
  const testProducts = [
    {
      id: 1,
      name: "Bag",
      description: "A beutiful bag",
      image: "./bag.jpg",
      price: "10.89",
      discount: "10",
    },
    {
      id: 2,
      name: "Bottle",
      description: "A useful bottle to drink you favourite drink",
      image: "./bottle.jpg",
      price: "20.10",
      discount: "20",
    },
    {
      id: 3,
      name: "Cake",
      description: "A delicious yellow cake",
      image: "./cake.jpg",
      price: "30.00",
      discount: null,
    },
  ];

  return (
    <>
      <Flex justify="center" m="6em" gap="10%">
        {testProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </Flex>
    </>
  );
};

export default Products;
