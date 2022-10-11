import React, { useState } from "react";
import Product from "../Product";
import { Flex, Center, Input, Box } from "@chakra-ui/react";
import { Items } from "../Interfaces/ContextType";
import axiosConfig from "../../utils/axiosInstance";
import { useToast } from "@chakra-ui/react";
import useFetch from "../../hooks/useFetch";
import useFilterByUserQuery from "../../hooks/useFilterByQuery";
import { useTranslation } from "react-i18next";


const Products: React.FC = () => {
  const [userQuery, setQuery] = useState<string>("");
  const [_, setProducts] = useState<Items[]>([]);
  const [sortByPrice, setSort] = useState<boolean>(false);
  const asc = process.env.REACT_APP_ASC_ORDER_ULR;
  const desc = process.env.REACT_APP_DESC_ORDER_URL;
  const url = process.env.REACT_APP_MAIN_URL;
  let sorting = sortByPrice ? asc : desc;
  const toast = useToast();
  const METHOD = "GET";
  const data = useFetch(url);
  const filterData = useFilterByUserQuery(userQuery);
  const { t } = useTranslation(["translations", "translations"]);


  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
  };

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
          <label>{t("sort", {ns: "translations"})}</label>
        </Box>
      </Center>

      <Flex justify="center" m="6em" gap="10%" wrap="wrap" h="60vh">
        {filterData
          ? filterData.map((product) => (
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
            ))
          : data.map((product) => (
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
