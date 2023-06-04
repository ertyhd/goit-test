import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/tweets-api';

export const fetchAllCards = createAsyncThunk(
  'cards/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllCards();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddFollow = createAsyncThunk(
  'tweetsFollow/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addFollow(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

// export const fetchAddContacts = createAsyncThunk(
//   'contacts/add',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.addContacts(data);
//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(response.data.message);
//     }
//   },
//   {
//     condition: ({ follow }, { getState }) => {
//       const { contacts } = getState();
//       const normFollow = follow.toLowerCase();

//       const findContact = contacts.items.find(({ follow }) => {
//         return (
//           follow.toLowerCase() === normFollow &&
//           follow.toLowerCase() === normFollow
//         );
//       });
//     },
//   }
// );

// export const fetchDeleteFollow = createAsyncThunk(
//   'tweetsFollow/delete',
//   async (id, { rejectWithValue }) => {
//     try {
//       await api.deleteFollow(id);
//       return id;
//     } catch ({ response }) {
//       return rejectWithValue(response.data.message);
//     }
//   }
// );
