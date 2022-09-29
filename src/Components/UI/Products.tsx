import React, { useState } from "react";
import Product from "../Product";
import { Flex, Box, Center, Input } from "@chakra-ui/react";

const Products: React.FC = () => {
  const [userQuery, setQuery] = useState<string>("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
  };
  /** test data delete this after and use json */
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
      <Center mt="2rem" m="2rem">
        <Input
          value={userQuery}
          onChange={handleChange}
          placeholder="Search by name"
          size="lg"
          htmlSize={40}
          border="solid #000000"
        />
        <Input
          type="number"
          placeholder="Search by price"
          border="solid #000000"
        />
      </Center>

      <Flex justify="center" m="6em" gap="10%" wrap="wrap" h="60vh">
        {testProducts.map((product) => (
          <Product
          component="products"
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={Number(product.price)}
            discount={Number(product.discount)}
          />
        ))}
      </Flex>
    </>
  );
};

export default Products;
