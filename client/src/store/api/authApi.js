import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credential },
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...data },
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
