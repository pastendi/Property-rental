import { baseApi } from './baseApi'

const propertyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerProperty: builder.mutation({
      query: (data) => {
        return {
          url: 'property',
          method: 'POST',
          body: data,
          formData: true,
        }
      },
    }),
  }),
})

export const { useRegisterPropertyMutation } = propertyApi
