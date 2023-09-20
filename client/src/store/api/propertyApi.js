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

    getALLProperties: builder.query({
      providesTags: ['property'],
      query: () => ({
        url: 'property',
        method: 'GET',
      }),
    }),
    getPropertyById: builder.query({
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
  useGetPropertyByIdQuery,
} = propertyApi
