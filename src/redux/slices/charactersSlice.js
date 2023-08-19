import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { charactersService } from "../../services/charactersService";

const initialState = {
  episodeName: '',
  episodeCharacters: [],
  characters: []
};

const getById = createAsyncThunk("characterSlice/getById", async (url, thunkAPI) => {
  try {
    const { data } = await charactersService.getById(url);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const characterSlice = createSlice({
  name: "character",
  initialState,

  reducers: {
    setEpisodeCharacters: (state, action) => {
      state.episodeCharacters = action.payload;
    },
    setEpisodeName: (state, action) => {
      state.episodeName = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder.addCase(getById.fulfilled, (state, action) => {
      state.characters.push(action.payload);
    }),
});

const {
  reducer: characterReducer,
  actions: { setEpisodeCharacters, setEpisodeName },
} = characterSlice;

const characterActions = {
  setEpisodeCharacters,
  setEpisodeName,
  getById,
};

export { characterReducer, characterActions };
