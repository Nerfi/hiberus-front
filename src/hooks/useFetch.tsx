import { useState, useEffect} from "react";
import axiosConfig from "../utils/axiosInstance";
import { Items } from "../Components/Interfaces/ContextType";
import { useToast } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
//in replace of useToas and toas 
//leave it for tlater on
import ToastContainer from "react-bootstrap/ToastContainer";

const useFetch = (url: string | undefined) => {
  const [data, setData] = useState<Items[]>([]);
  const [error,setError] = useState<ErrorType | null >(undefined);
  //need to change useToast
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
        //needs to be changed
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
