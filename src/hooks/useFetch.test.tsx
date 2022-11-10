import React, { useEffect } from "react";
import { renderHook, act, waitFor, render } from "@testing-library/react";
//hook to be tested
import useFetch from "./useFetch";
import axios from "axios";
import axiosConfig from "../utils/axiosInstance";
import { wait } from "@testing-library/user-event/dist/utils";


//axiosConfig = jest.fn()
jest.mock("../utils/axiosInstance");
jest.mock("./useFetch");
/*
describe("use useFetch hook", () => {
  it("initial and success state", async () => {
    const { result } = renderHook(() =>
    useFetch("http://localhost:3001/products")
    );
    console.log(result.current, "current");
    
    //axiosConfig.mockResolvedValue({
      //data: [{ name: "juan" }, { name: "bottle" }],
    //});

    //expect(result.current).toStrictEqual([{}])
    //expect(result.current).toStrictEqual([]);
    const axiosSpy = jest.spyOn(axios, "get")
  
    await waitFor(() => {
    //expect(axiosSpy).toHaveBeenCalled()
      expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toBeCalledWith("http://localhost:3001/products");
    console.log(result.current, "in waitfor");
    expect(true).toBe(true)
    expect(result.current).toEqual([{name: "juan"},{name: "bottle", id: "1"}])
    });
    //LUOIS CODE
    // let mockData = [{name: "juan"},{name: "bottle", id: "1"}]
    () => expect(result.current).toStrictEqual([{name: "juan"},{name: "bottle", id: "1"}])
    //expect(result.current).toStrictEqual([{name: "juan"},{name:" watch"},{name: "bottle", id: "1"}])
  });
});

*/

//indi tutorial

//https://www.youtube.com/watch?v=SLckBBIRjQU MUST WATCH


describe("useFetch", () => {
  
  it("should be able to make API call of given endpoint ", async () => {
    const { result } = renderHook(() =>
      useFetch("http://localhost:3001/products")
    );

    console.log(result.current); // undefined

    await waitFor(() => {
      //console.log(result.current); // undefined
      expect(useFetch).toHaveBeenCalled(); //working
      //expect({result} = render(() => useFetch("http://localhost:3001/products")))
      expect(useFetch).toHaveBeenCalledWith("http://localhost:3001/products"); //working
    });

    console.log(result.current); // undefined
  });
});





/*
describe("useFetch", () => {

 
  it("intial data state is empty", () => {
    const {result}  = renderHook(() => useFetch("http://localhost:3001/products"))
    console.log(result.current)
    expect(result.current).toStrictEqual( undefined)
  })

  it("data is fetched", async () => {
    const fakeResponseData = [{name: "some", id: "1"},{name: "bottle", id: "2"}];
    jest.fn().mockResolvedValue(fakeResponseData);
    const {result} = renderHook(() => useFetch("http://localhost:3001/products")) 
    await waitFor(() => {
      expect(useFetch).toHaveBeenCalled(); 
       expect(useFetch).toHaveBeenCalledWith("http://localhost:3001/products");
       expect(result.current).toEqual(fakeResponseData)
    })
  })

})
//test render function
/*
const render = (url: string) => {
  return renderHook(() => useFetch(url))
} 
*/
/*
describe("useFetch custom hook", () => {
  it("when rendering for the first time", async () => {
    const {result} =  renderHook(() =>
      useFetch("http://localhost:3001/products")
    );

    const spy = jest.spyOn(axios, "get").mockResolvedValue([{name: "juan"}])
    //expect(spy).toHaveBeenCalled()
    expect(result.current).toStrictEqual(undefined)

    console.log(result)
        

  })


})
*/

//axiosConfig.mockResolvedValue({data: "data test"})

//https://www.youtube.com/watch?v=9zztz_Eh2sA example on how to do it

//no se puede devolver una promesa del "describe"
/*
  //testing porpuses
  jest.mock("axios");
  const url = "http://localhost:3001/products";

  test("console log the data", async () => {
    const { result } = renderHook(() => useFetch(url));
    const axiosSpy = jest.spyOn(axios, "get")
     
    expect(result.current).toStrictEqual([]);

    console.log(axiosSpy);

    expect(axiosSpy).toHaveBeenCalled();

    expect(axiosSpy).toHaveBeenCalledWith("http://localhost:3001/products");
  });
});


describe("works", () => {

  
  test("testing component call and values", async () => {
   // const getSpy = jest
     // .spyOn(axios, "get")
      //.mockResolvedValueOnce({ data: [{ name: "juan" }] });

      

    const url = "http://localhost:3001/products";


    const { result } =  renderHook(() => useFetch(url));
   // console.log(result.current, "currentss");

   console.log(result.current)

    //expect(result.current).toStrictEqual([]);

    //new test with wait for 
    //const {result } = await waitFor(() => renderHook(() => useFetch(url)))
    // expect(getSpy).toHaveBeenCalled()
    console.log(result);

    await waitFor(() => {
      console.log(result.current)
    })

    //expect(getSpy).toHaveBeenCalledWith("http://localhost:3001/products");
  });
});



//async function getBooksBySubject (subject: any) {
//let data = [];
//try {
//const response = await axios.get(`https://openlibrary.org/subjects/${subject}.json`);
//data = response.data;

//} catch(err) {
//console.log(`Error getting books: ${err.message}`, err.stack);
//}

//return data;
//}

/* example code 
describe('Books', () => {
  describe('getTitlesBySubject', () => {
    it('should return book titles for given subject', async () => {
      const javascriptBooksData = {
        data: {
          ebook_count: 109,
          key: '/subjects/javascript',
          name: 'javascript',
          subject_type: 'subject',
          work_count: 109,
          works: [{
            key: '/works/OL15180797W',
            title: 'JavaScript: The Good Parts',
          }, {
            key: '/works/OL15180798W',
            title: 'JavaScript: The Definitive Guide',
          }]
        }
      };
      
      const asdfjBooksData = {
        key: "/subjects/asdfj",
        name: "asdfj",
        subject_type: "subject",
        work_count: 0,
        works: [],
        ebook_count: 0
      };
      const getSpy = jest.spyOn(axios, 'get');
        //.mockResolvedValueOnce(javascriptBooksData)
        //.mockResolvedValueOnce(asdfjBooksData);


  

      const titles = await getBooksBySubject('javascript');
      //expect(titles).toEqual(['JavaScript: The Good Parts', 'JavaScript: The Definitive Guide']);
      //expect(titles).toEqual(expect.arrayContaining(['JavaScript: The Good Parts']));

      expect(getSpy).toHaveBeenCalled();
      expect(getSpy).toHaveBeenCalledWith('https://openlibrary.org/subjects/javascript.json');
     // expect(getSpy).toHaveBeenCalledWith(expect.stringContaining('openlibrary.org'));

    

      const noTitles = await getBooksBySubject('asdfj');
      expect(getSpy).toHaveBeenCalledTimes(2);
      expect(getSpy).toHaveBeenNthCalledWith(2, 'https://openlibrary.org/subjects/asdfj.json');
      //expect(getSpy).toHaveBeenLastCalledWith(expect.stringContaining('asdfj'));
   
    });
  });  
});
*/

/*jest.mock("axios");

describe("useRandomUsers", () => {
  it("call API and return results", async () => {
    axios.mockImplementation(() =>
      Promise.resolve({ data: [{ " name": "juan" }] })
    );
    const { result } = renderHook(() =>
      useFetch("http://localhost:3001/products")
    );

    expect(result.current).toStrictEqual([]);

    //await waitForNextUpdate();
    expect(result.current).toEqual({ data: [{ " name": "juan" }] });
    expect(axios).toHaveBeenCalledWith("http://localhost:3001/products");
  });
});
//read docs for this
//before
//await waitForNextUpdate();
//after
//await act(() => waitForNextUpdate());
*/
//must read

//https://atomizedobjects.com/blog/react/how-to-test-a-custom-react-hook/
