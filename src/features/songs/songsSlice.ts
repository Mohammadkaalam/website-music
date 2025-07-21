import { createSlice, PayloadAction } from "@reduxjs/toolkit"; //---برای ساخت خودکار ردیوسر و اکشن

//   نوعی که برای مشخص کردن نوع دیتای اکشن.پیلود استفاده می‌شه
interface Song {   // یعنی هر آهنگ باید سه مقدار داشته باشه
  id: string;
  title: string;
  artist: string;
}

interface SongsState {  //(استیت اصلی)تعریف ساختار استیت که می‌خواهیم در ریداکس نگه‌داری کنیم
  //  در اینجا استیت یک آرایه از آهنگ‌هاست.
  songs: Song[];
}

const initialState: SongsState = {  //مقدار اولیه‌ی استیت وقتی برنامه شروع می‌شه، لیست آهنگ‌ها خالیه.
  songs: [],
};

const songsSlice = createSlice({   //ساختن اسلایس به اسم "سونگز". توی ردیوسر اکشن‌هایی تعریف می‌کنیم که استیت رو تغییر می‌دن.
  name: "songs",
  initialState,
  reducers: {
    setSongs(state, action: PayloadAction<Song[]>) {  //اکشنی به اسم ست سونگز که وقتی اجرا بشه، استیت.سونگز رو برابر با لیست جدیدی از آهنگ‌ها قرار می‌ده.
      // ---مقدار جدید از طریق اکشن.پیلود میاد و باید آرایه‌ای از سونگز باشه.
      state.songs = action.payload;
    },
    addSong(state, action: PayloadAction<Song>) {   //اکشنی به اسم ادسونگ که فقط یک آهنگ جدید به انتهای آرایه سونگز اضافه می‌کنه
      state.songs.push(action.payload);
    },
  },
});

export const { setSongs, addSong } = songsSlice.actions;
export default songsSlice.reducer;
