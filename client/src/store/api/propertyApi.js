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
    updateProperty: builder.mutation({
      invalidatesTags: ['singleProperty'],
      query: (data) => ({
        url: 'property',
        method: 'PATCH',
        body: data,
        formData: true,
      }),
    }),
    getALLProperties: builder.query({
      providesTags: ['property'],
      query: () => ({
        url: 'property',
        method: 'GET',
      }),
    }),
    getPropertyById: builder.query({
      providesTags: ['singleProperty'],
      query: (id) => ({
        url: `property/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useRegisterPropertyMutation,
  useGetALLPropertiesQuery,
  useUpdatePropertyMutation,
  useGetPropertyByIdQuery,
} = propertyApi
