import { useLocation, useParams } from "react-router-dom";
import Nav from "../components/Navbar/index";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import axios from "axios";
import { useEffect } from "react";

function SearchPage() {
    const { state } = useLocation();
    useEffect(() => {
        console.log("전달하는데이터", state);
        axios
            .get("/api/search", {
                params: { select: state.select, keyword: state.keyword },
            })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log("데이터를 올바르게 가져왔습니다");
                }
            })
            .catch(function (error) {
                console.log("검색결과 없음", error);
            });
    });

    return (
        <>
            <Nav />
            <WidthAreaSpace></WidthAreaSpace>
        </>
    );
}

export default SearchPage;
