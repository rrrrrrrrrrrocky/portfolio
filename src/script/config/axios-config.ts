import axios from "axios";

export const internalApiInstance = axios.create({
  baseURL: `/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});
