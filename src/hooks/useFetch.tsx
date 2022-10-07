import { useState, useEffect } from "react";
import axiosConfig from "../utils/axiosInstance";
import { Items } from "../Components/Interfaces/ContextType";
import { useToast } from "@chakra-ui/react";
import { AxiosResponse } from "axios";

const useFetch = (method: string,url: any) => {
  const [data, setData] = useState<Items[]>([]);
  const toast = useToast();

    useEffect(() => {
    const products = async (): Promise<void> => {
      try {
        const retrieveProdcuts: AxiosResponse<Items[]> = await axiosConfig(
          "GET",
          url
        );

        setData(retrieveProdcuts.data);
      } catch (error) {
        toast({
          title: `${error}`,
          status: "error",
          isClosable: true,
        });
      }
    };

    products();
  }, []);

  return data;
};

export default useFetch;
