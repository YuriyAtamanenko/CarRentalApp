import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65213836a4199548356cef26.mockapi.io';

export const getAll = createAsyncThunk(
  'catalog/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/adverts');
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
