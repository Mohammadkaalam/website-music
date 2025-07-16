import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SongDetail from "../pages/SongDetail";
import ArtistPage from "../pages/ArtistPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/song/1" element={<SongDetail />} />
      <Route path="/artist/2" element={<ArtistPage />} />
    </Routes>
  );
};

export default AppRoutes;

