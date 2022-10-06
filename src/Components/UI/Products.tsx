import React, { useState, useEffect } from "react";
import Product from "../Product";
import axios, { AxiosResponse } from "axios";
import { Flex, Center, Input, Box } from "@chakra-ui/react";
import { Items } from "../Interfaces/ContextType";

//test util funciton
import axiosConfig from "../../utils/axiosInstance";

const Products: React.FC = () => {
  const [userQuery, setQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Items[]>([]);
  const [products, setProducts] = useState<Items[]>([]);
  const [sortByPrice, setSort] = useState<boolean>(false);
 const asc = process.env.REACT_APP_ASC_ORDER_ULR;
  const desc = process.env.REACT_APP_DESC_ORDER_URL;
  const url = process.env.REACT_APP_MAIN_URL;

   let sorting = sortByPrice ? asc : desc;

   console.log(sorting, "soritn ")
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
  };

  console.log(process.env.REACT_APP_MAIN_URL, "Juan", asc);
  useEffect(() => {
    const products = async (): Promise<void> => {
      try {
        const retrieveProdcuts: AxiosResponse<Items[]> = await axiosConfig(
          "GET",
          url
        );

        console.log(retrieveProdcuts, "prop")

        setProducts(retrieveProdcuts.data);
      } catch (error) {
        console.error(error);
      }
    };

    products();
  }, []);

  useEffect(() => {
    const filterByUserQuery = async (query: string): Promise<void> => {
      try {
        const retrieveData: AxiosResponse<Items[]> = await axiosConfig(
          "GET",
          `http://localhost:3001/products?name_like=${query}`
        );
        setProducts(retrieveData.data);
      } catch (error) {
        console.log(error);
      }
    };

    filterByUserQuery(userQuery);
  }, [userQuery]);


  const handleSortByPrice = async (): Promise<void> => {
    try {
      setSort((prev) => !prev);
   

      const sortedResults = await axiosConfig("GET", sorting);

      setProducts(sortedResults.data);
    } catch (error) {
      console.error(error);
    }
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
