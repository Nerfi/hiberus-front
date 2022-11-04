import React from "react";
import {renderHook, act} from '@testing-library/react';
//hook to be tested
import useFetch from "./useFetch";


describe("useFetch custom hook", () => {
    //testing porpuses
    jest.mock("axios");
    const url = "http://localhost:3001/products";
    const{ result }= renderHook(() => useFetch(url))
    console.log(result)

})







///sample code 
/* 
import { renderHook, act } from "react-hooks-testing-library";

jest.mock("axios");

describe("useRandomUsers", () => {
  it("call API and return results", async () => {
    axios.mockImplementation(() => Promise.resolve({ data: mockResponse }));
    const { result, waitForNextUpdate } = renderHook(() => useRandomUsers());

    expect(result.current).toStrictEqual([]);

    await waitForNextUpdate();
    expect(result.current).toStrictEqual(mockResponse.results);
    expect(axios).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=10&inc=name,login&nat=us"
    );
  });
});
//read docs for this 
// before
await waitForNextUpdate();
// after
await act(() => waitForNextUpdate());
*/


//must read

//https://atomizedobjects.com/blog/react/how-to-test-a-custom-react-hook/