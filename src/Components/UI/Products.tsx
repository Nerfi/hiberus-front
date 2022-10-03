import React, { useState, useEffect } from "react";
import Product from "../Product";
import axios, { AxiosResponse } from "axios";
import { Flex, Center, Input } from "@chakra-ui/react";
import { Items } from "../Interfaces/ContextType";

const Products: React.FC = () => {
  const [userQuery, setQuery] = useState<string>("");
  const [products, setProducts] = useState<Items[]>([]);

  useEffect(() => {
    const handleRequest = async () => {
      try {
        const products: AxiosResponse<Items[]> = await axios({
          method: "GET",
          url: "http://localhost:3001/products",
          responseType: "stream",
        });

        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    };

    handleRequest();
  }, []);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const filterByUserQuery = async (query: string) => {
      try {
        const retrieveData = await axios({
          method: "GET",
          url: `http://localhost:3001/products?name_like=${query}`,
          responseType: "stream",
        });

        console.log(retrieveData, "data retrieve");
      } catch (error) {
        console.log(error);
      }
    };

    filterByUserQuery(userQuery);
  }, [userQuery]);
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
        {products.map((product) => (
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
