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
        }),
        addNewProperty: builder.mutation({
            query: (property: Partial<propertyType>) => ({
                url: '/properties',
                method: 'POST',
                body: {
                    ...property
                }
            }),
            invalidatesTags:['Property']
        })
  }),
});


export const {useGetPropertiesQuery,useGetPropertyByIdQuery} =extendedApiSlice