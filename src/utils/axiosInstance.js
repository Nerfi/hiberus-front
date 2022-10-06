import axios from "axios";

function axiosConfig(method, url) {
  return axios({
    method: method,
    url: url,
    responseType: "json",
  });
}
export default axiosConfig;
