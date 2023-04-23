import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../redux/auth/auth'

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const { data: result } = await api.signup(data);
            return result;
        } catch ({ resonce }) {
            return rejectWithValue(resonce);
        }
    }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.login(data);
      return result;
    } catch ({ resonce }) {
      return rejectWithValue(resonce);
    }
  }
);

