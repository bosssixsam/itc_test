import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/apps/store";

import { SLICE_INIT } from "@/modules/auth";

// import searchAPI from "./searchAPI";

const authSlice = createSlice({
  name: "auth",
  initialState: SLICE_INIT,
  reducers: {
    openModal(state) {
      //   state.modalStatus = true;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

// Actions

export const authAction = authSlice.actions;

// Selectors

export const selectAuth = (state: RootState) => state.auth;

// Reducer

export const authReducer = authSlice.reducer;

// export default cartReducer;
