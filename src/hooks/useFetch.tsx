import { useState, useEffect } from "react";
import axiosConfig from "../utils/axiosInstance";
import { Items } from "../Components/Interfaces/ContextType";
//import { useToast } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
//in replace of useToas and toas
//leave it for tlater on
//import ToastContainer from "react-bootstrap/ToastContainer";

const useFetch = (url: string | undefined) => {
  const [data, setData] = useState<Items[]>([]);
  const [error, setError] = useState(undefined);
  //need to change useToast
  //const toast = useToast();

  useEffect(() => {
    const products = async (): Promise<void> => {
      try {
        const retrieveProdcuts: AxiosResponse<Items[]> = await axiosConfig(
          "GET",
          url
        );

        setData(retrieveProdcuts && retrieveProdcuts.data);
      } catch (error) {
        //needs to be changed
        //setError(error);
        console.log(error);
      }
    };

    products();
  }, []);

  return data && data;
};

export default useFetch;
