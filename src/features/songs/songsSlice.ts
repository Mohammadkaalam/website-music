import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  id: string;
  title: string;
  artist: string;
}

interface SongsState {
  songs: Song[];
}

const initialState: SongsState = {
  songs: [],
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setSongs(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
    },
    addSong(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
    },
  },
});

export const { setSongs, addSong } = songsSlice.actions;
export default songsSlice.reducer;
