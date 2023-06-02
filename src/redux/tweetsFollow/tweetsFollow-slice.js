import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllCards,
  fetchAddFollow,
  fetchDeleteFollow,
} from './tweetsFollow-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllCards.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllCards.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllCards.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddFollow.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAddFollow.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddFollow.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteFollow.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteFollow.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteFollow.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default cardsSlice.reducer;
