import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreePower from "./Routes/ThreePower";
import Exercise from "./Routes/Exercise";
import Freeboard from "./Routes/Freeboard";
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
        <Route path="/free" element={<Freeboard />} />
        <Route path="/free/:id" element={<FreePost />} />
        <Route path="/free/write" element={<FreeWrite />} />
        <Route path="/threepower" element={<ThreePower />} />
        <Route path="/threepower/:id" element={<ThreePowerPost />} />
        <Route path="/threepower/write" element={<ThreePowerWrite />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise/:id" element={<ExercisePost />} />
        <Route path="/exercise/write" element={<ExerciseWrite />} />
        <Route path="*" element={<NotFoundScene />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
