import { baseApi } from './baseApi'

const propertyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerProperty: builder.mutation({
      invalidatesTags: ['property'],
      query: (data) => ({
        url: 'property',
        method: 'POST',
        body: data,
        formData: true,
      }),
    }),
    getProperty: builder.query({
      providesTags: ['property'],
      query: () => ({
        url: 'property',
        method: 'GET',
      }),
    }),
  }),
})

export const { useRegisterPropertyMutation, useGetPropertyQuery } = propertyApi
