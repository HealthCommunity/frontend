import { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { retryLazy } from "utils/lazyUtil";
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

const Home = retryLazy(() => import("./pages/Home"));
const Login = retryLazy(() => import("./pages/Login"));
const Profile = retryLazy(() => import("./pages/Profile"));
const Sign = retryLazy(() => import("./pages/Sign"));
const Search = retryLazy(() => import("./pages/Search"));
const NotFoundScene = retryLazy(() => import("./pages/NotFoundScene"));
const BoardEditPost = retryLazy(() => import("./pages/BoardEditPost"));
const ThreeBoardEditPost = retryLazy(() =>
  import("./components/Slider/ThreeBoardEditPost")
);
const Board = retryLazy(() => import("./pages/Board"));
const BoardPost = retryLazy(() => import("./pages/BoardPost"));
const BoardWrite = retryLazy(() => import("./pages/BoardWrite"));
const Introduce = retryLazy(() => import("./pages/Introduce"));

function Router() {
  const [, reFetch] = useUserData();
  useEffect(() => {
    reFetch();
  }, [reFetch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
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
