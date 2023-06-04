import { createSlice } from '@reduxjs/toolkit';

import { fetchAllCards, fetchAddFollow } from './tweetsFollow-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: 'cards',
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
        store.items = store.items.map(item => {
          if (item.id === payload.id) {
            return { ...payload };
          }
          return item;
        });
      })
      .addCase(fetchAddFollow.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default cardsSlice.reducer;
