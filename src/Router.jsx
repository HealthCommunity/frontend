import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreePower from "./Routes/ThreePower";
import Exercise from "./Routes/Exercise";
import Freeboard from "./Routes/Free";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";
import Sign from "./Routes/Sign";
import ThreePowerPost from "./Routes/ThreePowerPost";
import FreePost from "./Routes/FreePost";
import ExercisePost from "./Routes/ExercisePost";
import ExerciseWrite from "./Routes/ExerciseWrite";
import FindId from "./Routes/FindId";
import FindPw from "./Routes/FindPw";
import SearchPage from "./Routes/Search";
import NotFoundScene from "./Routes/NotFoundScene";
import IntroducePage from "./Routes/IntroducePage";
import ThreePowerWrite from "./Routes/ThreePowerWrite";
import FreeWrite from "./Routes/FreeWrite";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/find_id" element={<FindId />} />
        <Route path="/login/find_pw" element={<FindPw />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/freepost" element={<Freeboard />} />
        <Route path="/freepost/:id" element={<FreePost />} />
        <Route path="/freepost/write" element={<FreeWrite />} />
        <Route path="/threepowerpost" element={<ThreePower />} />
        <Route path="/threepowerpost/:id" element={<ThreePowerPost />} />
        <Route path="/threepowerpost/write" element={<ThreePowerWrite />} />
        <Route path="/exercisepost" element={<Exercise />} />
        <Route path="/exercisepost/:id" element={<ExercisePost />} />
        <Route path="/exercisepost/write" element={<ExerciseWrite />} />
        <Route path="*" element={<NotFoundScene />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
