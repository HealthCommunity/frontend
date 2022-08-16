import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreePower from "./pages/ThreePower";
import Exercise from "./pages/Exercise";
import Freeboard from "./pages/Free";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Sign from "./pages/Sign";
import ThreePowerPost from "./pages/ThreePowerPost";
import FreePost from "./pages/FreePost";
import ExercisePost from "./pages/ExercisePost";
import ExerciseWrite from "./pages/ExerciseWrite";
import FindId from "./pages/FindId";
import FindPw from "./pages/FindPw";
import SearchPage from "./pages/Search";
import NotFoundScene from "./pages/NotFoundScene";
import ThreePowerWrite from "./pages/ThreePowerWrite";
import FreeWrite from "./pages/FreeWrite";

import useUserData from "./api/useUserData";
import { useEffect } from "react";

function Router() {
    const [, reFetch] = useUserData();

    useEffect(() => {
        reFetch();
    }, [reFetch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
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
                <Route
                    path="/threepowerpost/:id"
                    element={<ThreePowerPost />}
                />
                <Route
                    path="/threepowerpost/write"
                    element={<ThreePowerWrite />}
                />
                <Route path="/exercisepost" element={<Exercise />} />
                <Route path="/exercisepost/:id" element={<ExercisePost />} />
                <Route path="/exercisepost/write" element={<ExerciseWrite />} />
                <Route path="*" element={<NotFoundScene />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
