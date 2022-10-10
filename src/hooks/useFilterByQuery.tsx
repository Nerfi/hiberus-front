import { useState, useEffect } from "react";
import { Items } from "../Components/Interfaces/ContextType";
import { AxiosResponse } from "axios";
import axiosConfig from "../utils/axiosInstance";
import { useToast } from "@chakra-ui/react";

const useFilterByUserQuery = (userQuery: string) => {
  const [filterData, setFilter] = useState<Items[]>();
  const searchUrl = process.env.REACT_APP_SEARCH_BY_QUERY;

  const toast = useToast();
  useEffect(() => {
    const filterByUserQuery = async (query: string): Promise<void> => {
      try {
        const retrieveData: AxiosResponse<Items[]> = await axiosConfig(
          "GET",
          searchUrl + `${userQuery}`
        );
        setFilter(retrieveData.data);
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

  return filterData;
};

export default useFilterByUserQuery;
