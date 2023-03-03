import { createEntityAdapter } from "@reduxjs/toolkit";
import { propertyType } from "../../types";
import { apiSlice } from "../api/apiSlice";



export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query<propertyType[],void>({
        query: () => "/properties",
        providesTags:['Property']
    }
        ),
        getPropertyById: builder.query({
          query:id=>`/properties/${id}`
      })
  }),
});


export const {useGetPropertiesQuery,useGetPropertyByIdQuery} =extendedApiSlice