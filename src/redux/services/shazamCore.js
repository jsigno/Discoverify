import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "a03acf52dfmsh93b3e1b3ed1b112p14580djsn4fe937b20ea4"
      );
      return headers;
    },
  }),
  endpoints: (buidler) => ({
    getTopCharts: buidler.query({ query: () => "charts/world" }),
  }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi