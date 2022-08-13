import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Navbar/index";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import axios from "axios";

function SearchPage() {
  const { state } = useLocation();
  useEffect(() => {
    console.log(state);
    axios
      .get("/search", { state })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log("데이터를 올바르게 가져왔습니다");
        }
      })
      .catch(function (error) {
        console.log("로그아웃 실패", error);
      });
  }, []);
  return (
    <>
      <Nav />
      <WidthAreaSpace></WidthAreaSpace>
    </>
  );
}

export default SearchPage;
