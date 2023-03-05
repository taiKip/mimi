import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/api/v1' }),
    tagTypes:['Property','Address'],
    endpoints: (builder) => ({})
})

