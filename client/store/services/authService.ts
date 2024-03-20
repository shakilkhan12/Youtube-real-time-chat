import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API }),
    endpoints: ({mutation}) => ({
      register: mutation({
        query: (args) => {
            return {
                method: 'POST',
                url: '/user/register',
                body: args
            }
        }
      }),
    }),
  })
export const {useRegisterMutation} = authAPI