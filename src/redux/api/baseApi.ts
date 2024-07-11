import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// type TUseGetProductsQuery = {
//   url: string;
//   method: string;
// };

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://workout-gear-server.vercel.app/api/v1",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery }: { useGetProductsQuery: any } = baseApi;
