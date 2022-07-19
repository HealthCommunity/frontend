import Nav from "../components/Navigation/Nav";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

const SearchDiv = styled.div`
    box-sizing: border-box;
    margin-bottom: 50px;
`;

const SearchTitle = styled.div`
    font-size: ${(props) => props.theme.fontSizeH2};
    text-align: center;
    margin-bottom: 20px;
`;

const SearchList = styled.div`
    width: 90%;
    height: 600px;
    background-color: ${(props) => props.theme.navBgColor};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizeH3};
`;

function SearchPage() {
    const location = useLocation();
    console.log(location.state);
    return (
        <>
            <Nav />
            <WidthAreaSpace>
                <SearchDiv>
                    <SearchTitle>
                        {`검색 분류 : ${location.state.searchOption} / 검색어 : ${location.state.searchItem}`}
                    </SearchTitle>
                    <SearchList>
                        <h1>{`제목에 검색어 : (${location.state.searchItem}) 가 포함되어있으면 list 로 출력됩니다`}</h1>
                    </SearchList>
                </SearchDiv>
            </WidthAreaSpace>
        </>
    );
}

export default SearchPage;
