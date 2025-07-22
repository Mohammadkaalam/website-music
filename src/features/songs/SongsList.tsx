import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { useEffect, useState } from "react";
import { setSongs, addSong, removeSong } from "./songsSlice";
import "./songsList.css";

const sampleSongs = [
    { id: "1", title: "آهنگ اول", artist: "هنرمند A" },
    { id: "2", title: "آهنگ دوم", artist: "هنرمند B" },
    { id: "3", title: "آهنگ سوم", artist: "هنرمند C" },
];

const SongsList = () => {
    const dispatch: AppDispatch = useDispatch();
    const songs = useSelector((state: RootState) => state.songs.songs);

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");

    // بار اول: چک کن اگر چیزی در localStorage نبود، آهنگ‌های پیش‌فرض ست کن
    useEffect(() => {
        const stored = localStorage.getItem("songs");
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                dispatch(setSongs(parsed));
            } else {
                dispatch(setSongs(sampleSongs));
                localStorage.setItem("songs", JSON.stringify(sampleSongs));
            }
        } else {
            dispatch(setSongs(sampleSongs));
            localStorage.setItem("songs", JSON.stringify(sampleSongs));
        }
    }, [dispatch]);

    // هر تغییری در songs، در localStorage ذخیره کن
    useEffect(() => {
        localStorage.setItem("songs", JSON.stringify(songs));
    }, [songs]);

    const handleAddSong = () => {
        if (!title.trim() || !artist.trim()) return;

        const newSong = {
            id: Date.now().toString(),
            title,
            artist,
        };

        dispatch(addSong(newSong));
        setTitle("");
        setArtist("");
    };

    const handleRemove = (id: string) => {
        dispatch(removeSong(id));
    };

    return (
        <div className="songs-container">
            <h2>لیست آهنگ‌ها</h2>

            <div className="add-song-form">
                <input
                    type="text"
                    placeholder="عنوان آهنگ"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="نام هنرمند"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <button onClick={handleAddSong}>افزودن آهنگ</button>
            </div>

            <table className="songs-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>عنوان</th>
                        <th>هنرمند</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <tr key={song.id}>
                            <td>{index + 1}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>
                                <button className="remove-btn" onClick={() => handleRemove(song.id)}>حذف</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SongsList;
