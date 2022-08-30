import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Sign from "./pages/Sign";
// import SearchPage from "./pages/Search";
// import NotFoundScene from "./pages/NotFoundScene";
// import BoardEditPost from "./pages/BoardEditPost";
// import ThreeBoardEditPost from "./pages/ThreeBoardEditPost";
// import Board from "./pages/Board";
// import BoardPost from "./pages/BoardPost";
// import BoardWrite from "./pages/BoardWrite";
// import Introduce from "./pages/Introduce";
import useUserData from "./api/useUserData";
import LoadingSpinner from "./components/Loding/LoadingSpinner";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Sign = lazy(() => import("./pages/Sign"));
const SearchPage = lazy(() => import("./pages/Search"));
const NotFoundScene = lazy(() => import("./pages/NotFoundScene"));
const BoardEditPost = lazy(() => import("./pages/BoardEditPost"));
const ThreeBoardEditPost = lazy(() => import("./pages/ThreeBoardEditPost"));
const Board = lazy(() => import("./pages/Board"));
const BoardPost = lazy(() => import("./pages/BoardPost"));
const BoardWrite = lazy(() => import("./pages/BoardWrite"));
const Introduce = lazy(() => import("./pages/Introduce"));

function Router() {
  const [, reFetch] = useUserData();
  useEffect(() => {
    reFetch();
  }, [reFetch]);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <>
            <LoadingSpinner></LoadingSpinner>
            <p>사용자 정보 로딩중...</p>
          </>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route
            path="/freepost"
            element={
              <Board
                key={new Date().getTime() + Math.random()}
                props={"freepost"}
              />
            }
          />
          <Route path="/freepost/:id" element={<BoardPost />} />
          <Route
            path="/freepost/write"
            element={<BoardWrite item="freeWrite" />}
          />
          <Route path="/freepost/:id/edit" element={<BoardEditPost />} />
          <Route
            path="/threepowerpost"
            element={
              <Board
                key={new Date().getTime() + Math.random()}
                props={"threepowerpost"}
              />
            }
          />
          <Route path="/threepowerpost/:id" element={<BoardPost />} />
          <Route
            path="/threepowerpost/:id/edit"
            element={<ThreeBoardEditPost />}
          />
          <Route
            path="/threepowerpost/write"
            element={<BoardWrite item="threepostWrite" />}
          />
          <Route
            path="/exercisepost"
            element={
              <Board
                key={new Date().getTime() + Math.random()}
                props={"exercisepost"}
              />
            }
          />
          <Route path="/exercisepost/:id" element={<BoardPost />} />
          <Route path="/exercisepost/:id/edit" element={<BoardEditPost />} />
          <Route
            path="/exercisepost/write"
            element={<BoardWrite item="exerciseWrite" />}
          />
          <Route path="*" element={<NotFoundScene />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
