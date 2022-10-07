import React, { useState, useEffect } from "react";
import Product from "../Product";
import { AxiosResponse } from "axios";
import { Flex, Center, Input, Box, filter } from "@chakra-ui/react";
import { Items } from "../Interfaces/ContextType";
import axiosConfig from "../../utils/axiosInstance";
import { useToast } from "@chakra-ui/react";

//
import useFetch from "../../hooks/useFetch";
import useFilterByUserQuery from "../../hooks/useFilterByQuery";

const Products: React.FC = () => {
  const [userQuery, setQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Items[]>([]);
  const [products, setProducts] = useState<Items[]>([]);
  const [sortByPrice, setSort] = useState<boolean>(false);
  const asc = process.env.REACT_APP_ASC_ORDER_ULR;
  const desc = process.env.REACT_APP_DESC_ORDER_URL;
  const url = process.env.REACT_APP_MAIN_URL;
  const searchQuery = process.env.REACT_APP_SEARCH_BY_QUERY;
  let sorting = sortByPrice ? asc : desc;
  const toast = useToast();
  const METHOD = "GET";
  const data = useFetch(METHOD, url);

  

  //filter by user query hook 
  const filterData = useFilterByUserQuery(userQuery)
  //setProducts(filterData)

  console.log(filterData, "filter data lookokokokokokoko")

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
  };

  /* DONDE WITH CUSTOM HOOKS
  useEffect(() => {
    const filterByUserQuery = async (query: string): Promise<void> => {
      try {
        const retrieveData: AxiosResponse<Items[]> = await axiosConfig(
          "GET",
          searchQuery + `${userQuery}`
        );
        setProducts(retrieveData.data);
      } catch (error) {
        toast({
          title: `${error}`,
          status: "error",
          isClosable: true,
        });
      }
    };

    filterByUserQuery(userQuery);
  }, [userQuery]);

  */

  const handleSortByPrice = async (): Promise<void> => {
    try {
      setSort((prev) => !prev);

      const sortedResults = await axiosConfig(METHOD, sorting);

      setProducts(sortedResults.data);
    } catch (error) {
      toast({
        title: `${error}`,
        status: "error",
        isClosable: true,
      });
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
        {data.map((product) => (
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
        {filterData &&
          filterData.map((product) => (
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
