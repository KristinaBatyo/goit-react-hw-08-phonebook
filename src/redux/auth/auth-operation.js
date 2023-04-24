import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../redux/auth/auth'

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signup(data);
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
      const result = await api.login(data);
      return result;
    } catch ({ resonce }) {
      return rejectWithValue(resonce);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {auth} = getState()
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ resonce }) {
      return rejectWithValue(resonce);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logour',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout()
      return data
    } catch ({ resonce }) {
      return rejectWithValue(resonce);
    }
  }
);
