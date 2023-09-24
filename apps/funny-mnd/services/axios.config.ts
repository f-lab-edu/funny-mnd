import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { MND_API_KEY } from "config/key";
import errorXmlToJson from "utils/api/errorXmlToJson";

export const mndAxios = axios.create({
  baseURL: `https://openapi.mnd.go.kr/${MND_API_KEY}/json`,
});

mndAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (typeof response.data === "string") {
      const error = errorXmlToJson(response.data);
      throw new Error(`${error.code}: ${error.message}`);
    }

    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
