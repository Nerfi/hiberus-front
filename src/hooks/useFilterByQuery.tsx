import { useState, useEffect } from "react";
import { Items } from "../Components/Interfaces/ContextType";
import { AxiosResponse } from "axios";
import axiosConfig from "../utils/axiosInstance";
import { useToast } from "@chakra-ui/react";
//debounce
import useDebounce from "./useDebounce";

const useFilterByUserQuery = (userQuery: string) => {
  const [filterData, setFilter] = useState<Items[]>();
  const searchUrl = process.env.REACT_APP_SEARCH_BY_QUERY;
  const toast = useToast();

  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms
  // As a result the API call should only fire once user stops typing
  const debouncedSearchTerm = useDebounce(userQuery, 500);

  useEffect(() => {
    const filterByUserQuery = async (query: string): Promise<void> => {
      try {
        const retrieveData: AxiosResponse<Items[]> = await axiosConfig(
          "GET",
          searchUrl + `${debouncedSearchTerm}`
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
    filterByUserQuery(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return filterData;
};

export default useFilterByUserQuery;
