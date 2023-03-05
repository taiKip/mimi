import { addressType } from "../../types";
import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query<addressType[], void>({
      query: () => "/addresses",
      providesTags: ["Address"],
    }),
    getAddressById: builder.query({
      query: (id) => `/addresses/${id}`,
    }),
    addNewAddress: builder.mutation({
      query: (address: Partial<addressType>) => ({
        url: "/addresses",
        method: "POST",
        body: {
          ...address,
        },
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const { useGetAddressesQuery, useGetAddressByIdQuery } =
  extendedApiSlice;
