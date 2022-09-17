// react hook , react
import { useEffect, Suspense } from "react";

// recoil ( 상태관리 )
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atom";
import useUserData from "./api/useUserData";

// react library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styled-components , Style Files

// Components
import LoadingSpinner from "./components/Loding/LoadingSpinner";

// Icons , Images

// Share , Utils
import { retryLazy } from "utils/lazyUtil";

const Home = retryLazy(() => import("./pages/Home"));
const Login = retryLazy(() => import("./pages/Login"));
const Profile = retryLazy(() => import("./pages/Profile"));
const Sign = retryLazy(() => import("./pages/Sign"));
const Search = retryLazy(() => import("./pages/Search"));
const NotFoundScene = retryLazy(() => import("./pages/NotFoundScene"));
const BoardEditPost = retryLazy(() => import("./pages/BoardEditPost"));
const ThreeBoardEditPost = retryLazy(() =>
  import("./components/Board/ThreePower/ThreeBoardEditPost")
);
const Board = retryLazy(() => import("./pages/Board"));
const BoardPost = retryLazy(() => import("./pages/BoardPost"));
const BoardWrite = retryLazy(() => import("./pages/BoardWrite"));
const Introduce = retryLazy(() => import("./pages/Introduce"));

export default function Router() {
  const isDartk = localStorage.getItem("dark");
  const setDarkMode = useSetRecoilState(isDarkAtom);

  //다크 or 라이트모드
  useEffect(() => {
    if (isDartk) {
      setDarkMode((prev) => !prev);
    }
  }, [isDartk, setDarkMode]);

  //새로고침하여도 사용자 로그인 유지를 위해 사용자 정보 호출
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
            element={<Board key="freepost" category={"freepost"} />}
          />
          <Route path="/freepost/:id" element={<BoardPost />} />
          <Route
            path="/freepost/write"
            element={<BoardWrite item="freeWrite" />}
          />
          <Route path="/freepost/:id/edit" element={<BoardEditPost />} />
          <Route
            path="/threepowerpost"
            element={<Board key="threepowerpost" category={"threepowerpost"} />}
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
            element={<Board key="exercisepost" category={"exercisepost"} />}
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
