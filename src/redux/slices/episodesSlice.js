import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { episodesService } from "../../services/episodesService";

const initialState = {
  pages: 1,
  page: 1,
  episodes: [],
};

const all = createAsyncThunk("episodeSlice/all", async (_, thunkAPI) => {
  try {
    const { data } = await episodesService.getAll();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

const allOnPage = createAsyncThunk("episodeSlice/allOnPage", async (page, thunkAPI) => {
  try {
    const { data } = await episodesService.getOnPageAll(page);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

/***************************** */
export const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    setPageBack: (state, action) => {
      if (state.page !== 1) {
        state.page = state.page - 1;
      }
    },
    setPageForward: (state, action) => {
      if (state.page < state.pages) {
        state.page = state.page + 1;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(all.fulfilled, (state, action) => {
        state.pages = action.payload.info.pages;
      })
      .addCase(allOnPage.fulfilled, (state, action) => {
        state.episodes = action.payload.results;
      }),
});

const {
  reducer: episodeReducer,
  actions: { setPageBack, setPageForward },
} = episodeSlice;

const episodeActions = {
  all,
  setPageBack,
  setPageForward,
  allOnPage,
};

export { episodeReducer, episodeActions };
