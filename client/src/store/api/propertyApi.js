import { baseApi } from './baseApi'

const propertyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerProperty: builder.mutation({
      invalidatesTags: ['properties'],
      query: (data) => ({
        url: 'property',
        method: 'POST',
        body: data,
        formData: true,
      }),
    }),
    updateProperty: builder.mutation({
      invalidatesTags: ['singleProperty', 'properties'],
      query: (data) => ({
        url: 'property',
        method: 'PATCH',
        body: data,
        formData: true,
      }),
    }),
    getALLProperties: builder.query({
      providesTags: ['properties'],
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
    removePropertyById: builder.mutation({
      invalidatesTags: ['properties'],
      query: (id) => ({
        url: `property/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useRegisterPropertyMutation,
  useGetALLPropertiesQuery,
  useUpdatePropertyMutation,
  useGetPropertyByIdQuery,
  useRemovePropertyByIdMutation,
} = propertyApi
