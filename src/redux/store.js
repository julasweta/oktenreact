import { configureStore } from '@reduxjs/toolkit';
import {characterReducer} from "../redux/slices/charactersSlice"
import { episodeReducer } from './slices/episodesSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    episode: episodeReducer,
  },
  
})