/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';

const cryptoApiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false';

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

export const cryptoInfoAction = createAction('crypto/cryptoInfo', (id) => ({
  payload: id,
}));

export const cryptoInfoReset = createAction('crypto/cryptoInfoReset', () => ({
  payload: [],
}));

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    cryptoArr: [],
    loading: false,
    ifSucceed: false,
  },
  reducers: {
    coinInfo: (state, action) => {
      state.cryptoArr = state.cryptoArr.filter((x) => x.id === action.payload);
    },
    cryptoReset: (state) => {
      state.cryptoArr = [];
    },
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
      })
      .addCase(cryptoInfoAction, (state, action) => {
        state.cryptoArr = state.cryptoArr.filter((x) => x.id === action.payload);
      })
      .addCase(cryptoInfoReset, (state, action) => {
        state.loading = false;
        state.cryptoArr = action.payload;
      });
  },
});

export default cryptoSlice.reducer;
export const { coinInfo, cryptoReset } = cryptoSlice.actions;
