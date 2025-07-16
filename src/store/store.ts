import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../features/songs/songsSlice";


export const store = configureStore({
  reducer: {
    songs: songsReducer,   //اضافه شدن اسلایس ها
  },
});

// این دو تایپ برای استفاده در کامپوننت‌ها لازم‌اند
export type RootState = ReturnType<typeof store.getState>; // از روی خروجی اون تابع تایپش رو میسازه
export type AppDispatch = typeof store.dispatch;  //با این کار، وقتی از یوز دیس پچ 
//  در کامپوننت‌ها استفاده کنی، تایپ اسکریپت  می‌فهمه دیسپچ چه اکشن‌هایی رو قبول می‌کنه
//RootState: برای استفاده در یوز سلکتور() و دسترسی ایمن به مقادیر استیت.

