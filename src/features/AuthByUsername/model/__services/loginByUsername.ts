import { User } from '@/entities/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

type LoginByUsernameProps = {
  username: User['username'];
  password: string;
};

const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login',
  async ({ username, password }, thunkApi) => {
    const response = await axios.post<LoginByUsernameProps, User>(
      'http://localhost:8000/login',
      { username, password },
      {
        method: 'POST',
      },
    );
    return response;
  },
);
