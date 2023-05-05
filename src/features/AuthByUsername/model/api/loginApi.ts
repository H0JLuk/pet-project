import { User } from '@/entities/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type LoginByUsernameDto = {
  username: User['username'];
  password: string;
};

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: builder => ({
    loginByUsername: builder.mutation<User, LoginByUsernameDto>({
      query: ({ username, password }) => ({
        url: 'login',
        method: 'POST',
        body: { username, password },
      }),
    }),
  }),
});
