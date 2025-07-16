import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { setSongs } from "./songsSlice";   //برای ثبت لیست آهنگ‌ها در استیت استفاده می‌شه.



// نمونه آهنگ‌های فرضی
const sampleSongs = [
    { id: "1", title: "آهنگ اول", artist: "هنرمند A" },
    { id: "2", title: "آهنگ دوم", artist: "هنرمند B" },
    { id: "3", title: "آهنگ سوم", artist: "هنرمند C" },
];

const SongsList = () => {
    const dispatch: AppDispatch = useDispatch();   //دریافت تابع دیسپج از ریداکس (برای ارسال اکشن).
    const songs = useSelector((state: RootState) => state.songs.songs); // Redux store --> state.songs.songs خواندن لیست آهنگ‌ها از 

    useEffect(() => {    //گرفتن داده هنگام (مونت) کامپوننت:
        dispatch(setSongs(sampleSongs));    //این بخش موقع اولین بار اجرا شدن کامپوننت، (ست سونگز) رو صدا می‌زنه و لیست آهنگ‌های فرضی رو به استور می‌فرسته
    }, [dispatch]);

    return (
        <div>
            <h2>لیست آهنگ‌ها</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        {song.title} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongsList;
