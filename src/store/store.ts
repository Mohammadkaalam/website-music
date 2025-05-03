import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    //     در آینده Sliceها اینجا اضافه می‌شن
  },
});

// این دو تایپ برای استفاده در کامپوننت‌ها لازم‌اند
export type RootState = ReturnType<typeof store.getState>; //یعنی از روی خروجی اون تابع، نوع استیت (تایپ) کلی رو خودکار می‌سازه.
export type AppDispatch = typeof store.dispatch;  //با این کار، وقتی از یوز دیس پچ ()
//  در کامپوننت‌ها استفاده کنی، تایپ اسکریپت  می‌فهمه دیسپچ چه اکشن‌هایی رو قبول می‌کنه.
