/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const cryptoApiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const getCryptoPrices = createAsyncThunk(
  'crypto/getCryptoPrices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(cryptoApiUrl);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error...');
    }
  },
);

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    cryptoArr: [],
    loading: false,
    ifSucceed: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoPrices.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCryptoPrices.fulfilled, (state, action) => {
        state.loading = false;
        state.cryptoArr = action.payload;
      })
      .addCase(getCryptoPrices.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default cryptoSlice.reducer;
