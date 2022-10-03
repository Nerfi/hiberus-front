import React, { useState, useEffect } from "react";
import Product from "../Product";
import axios, { AxiosResponse } from "axios";
import { Flex, Center, Input, Box } from "@chakra-ui/react";
import { Items } from "../Interfaces/ContextType";

const Products: React.FC = () => {
  const [userQuery, setQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Items[]>([]);
  const [sortByPrice, setSort] = useState<boolean>(false);
  let asc: string = "http://localhost:3001/products?_sort=price&_order=asc";
  let desc: string = "http://localhost:3001/products?_sort=price&_order=desc";
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const filterByUserQuery = async (query: string): Promise<void> => {
      try {
        const retrieveData: AxiosResponse<Items[]> = await axios({
          method: "GET",
          url: `http://localhost:3001/products?name_like=${query}`,
          responseType: "json",
        });
        setFilteredProducts(retrieveData.data);
      } catch (error) {
        console.log(error);
      }
    };

    filterByUserQuery(userQuery);
  }, [userQuery]);

  const handleSortByPrice = async (): Promise<void> => {
    try {
      setSort((prev) => !prev);
      const sortedResults = await axios({
        method: "GET",
        url: sortByPrice ? asc : desc,
        responseType: "json",
      });

      setFilteredProducts(sortedResults.data);
    } catch (error) {}
  };

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
        <Box border="solid #000000" p="1px" display="flex" gap="1rem">
          <input
            type="checkbox"
            name="sort"
            id=""
            onClick={handleSortByPrice}
          />
          <label>Sort by price</label>
        </Box>
      </Center>

      <Flex justify="center" m="6em" gap="10%" wrap="wrap" h="60vh">
        {filteredProducts &&
          filteredProducts.map((product) => (
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
