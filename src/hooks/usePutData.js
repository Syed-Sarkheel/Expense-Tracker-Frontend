import axios from "axios";
import Cookies from "js-cookie";

export default function usePutData(url = "/") {
  const at = Cookies.get("at");
  const preUrl = "http://localhost:5000/api/v1";

  const fetchData = async (postData) => {
    console.log(`executing post...`);
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${at}`;
      const response = await axios.put(`${preUrl}${url}`, postData);
      console.log(response);

      if (response?.data?.success === true) {
        return {
          data: response?.data?.payload,
          error: false,
          message: response?.data?.message,
          at,
        };
      } else
        return { data: null, error: true, message: response?.data?.message };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        error: true,
        message: "Some error occured. Try again!!!",
      };
    }
  };
  return fetchData;
}
