import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function useGetData(url, dependencies = []) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const at = Cookies.get("at");
  const preUrl = "http://localhost:5000/api/v1";

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setMessage(null);
      setError(null);
      try {
        console.log("Making request to : ", url);
        axios.defaults.headers.common.Authorization = `Bearer ${at}`;
        const response = await axios.get(`${preUrl}${url}`, {
          signal: controller.signal,
        });
        console.log("response data", response.data);
        if (response?.data?.success) {
          setData(response?.data?.payload);
          setError(false);
          setMessage(response?.data?.message);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.warn("Request canceled:", error);
          setError(true);
          setMessage(error?.message);
        } else {
          console.error("Fetch error:", error);
          setError(true);
          setMessage("Some error occured. Trying Again!!!");
        }
      }
    };
    fetchData();
    return () => {
      controller.abort("Fetch cancelled by component unmount.");
    };
  }, [url, at, ...dependencies]);
  return { data, message, error };
}
