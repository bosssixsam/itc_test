import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/apps/store";

import { SLICE_INIT, HOMEAPI } from "@/modules/home";
import { ISLICE_INIT, IGET_LIST } from "@/modules/home";

export const getList = createAsyncThunk("home/getList", async (_, { rejectWithValue, dispatch }) => {
  try {
    const result = await HOMEAPI.getlist("/pokemon");

    if (result) {
      return result;
    }
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    // return rejectWithValue(error.response.errors[0]);
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState: SLICE_INIT as ISLICE_INIT,
  reducers: {
    openModal(state) {
      //   state.modalStatus = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getList.fulfilled,
        (
          state,
          action: PayloadAction<{ count: number; next: string | null; previous: null | string; results: Array<any> }>
        ) => {
          state.loading = false;
          state.count = action.payload.count;
          state.list = action.payload.results;
          state.next = action.payload.next;
          state.previous = action.payload.previous;
          state.error = null;
        }
      )
      .addCase(getList.rejected, (state) => {
        state.loading = false;
        state.count = SLICE_INIT.count;
        state.list = SLICE_INIT.list;
        state.next = SLICE_INIT.next;
        state.previous = SLICE_INIT.previous;
        // state.error = null;
      });
    // .addCase(getBanner.fulfilled, (state, action: PayloadAction<Array<NHOME_MODEL.IBanner>>) => {
    //   state.loading = false;
    //   state.list = action.payload;
    //   state.error = null;
    // })
    // .addCase(getBanner.rejected, (state, action: PayloadAction<any>) => {
    //   // Cookies.remove("br_tk");

    //   state.loading = false;
    //   state.list = [];
    //   state.error = action.payload;
    // });
  },
});

// Actions

export const homeAction = homeSlice.actions;

// Selectors

export const selecthome = (state: RootState) => state.home;

// Reducer

export const homeReducer = homeSlice.reducer;
