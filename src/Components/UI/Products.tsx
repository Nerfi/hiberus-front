import React, { useState } from "react";
import Product from "../Product";
import { Items } from "../Interfaces/ContextType";
import axiosConfig from "../../utils/axiosInstance";
import useFetch from "../../hooks/useFetch";
import useFilterByUserQuery from "../../hooks/useFilterByQuery";
import { useTranslation } from "react-i18next";

const Products: React.FC = () => {
  const [userQuery, setQuery] = useState<string>("");
  const [sortedProducts, setProducts] = useState<Items[]>([]);
  const [sortByPrice, setSort] = useState<boolean>(false);
  const asc = process.env.REACT_APP_ASC_ORDER_ULR;
  const desc = process.env.REACT_APP_DESC_ORDER_URL;
  const url = process.env.REACT_APP_MAIN_URL;
  let sorting = sortByPrice ? asc : desc;

  const METHOD = "GET";
  let data = useFetch(url);
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
      //añadir estado despues, ahora lo dejamos asi solo para testing 
      console.warn(error)
     
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Sear by name "
          value={userQuery}
          onChange={handleChange}
          style={{ border: "solid #000000" }}
        />

        <div style={{ border: "solid #000000" }}>
          <input
            type="checkbox"
            name="sort"
            id=""
            onClick={handleSortByPrice}
          />
          <label>{t("sort", { ns: "translations" })}</label>
        </div>
      </div>

      {sortByPrice ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "6em",
            gap: "10%",
            padding: "50px",
          }}
        >
          {sortedProducts.map((product) => (
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
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "6em",
            gap: "10%",
            padding: "50px",
          }}
        >
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
        </div>
      )}
    </>
  );
};

export default Products;
