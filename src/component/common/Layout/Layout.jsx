import styled from "styled-components";

/*네비게이션*/
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 84px;
  background-color: #222222;
`;

/*콘텐츠 영역*/
export const CommonContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const CommonContents = styled.div`
  width: 1440px;
  margin: 0 auto;

  height: 3000px;
  border: 1px solid black;
  box-shadow: 5px 5px 10px -5px red;
  background-color: rgb(221, 176, 196);
  margin-top: 20px;

  height: 100vh;
`;

export const CommonContentsHome = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
`;

export const CommonContentsRight = styled.div`
  width: 75%;

  border: 1px solid black;
  box-shadow: 5px 5px 10px -5px red;
  background-color: rgb(104, 162, 121);

  height: 100vh;
`;

export const CommonContentsLeft = styled.div`
  width: 25%;

  border: 1px solid black;
  box-shadow: 5px 5px 10px -5px red;
  background-color: rgb(73, 116, 172);

  height: 100vh;
`;

/*슬라이드*/
export const MainSlide = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 450px;
  background-color: tan;
  margin-bottom: 20px;
`;

/*메인화면 공통*/
export const CommonContent = styled.article`
  padding: 20px 0;
  margin-bottom: 60px;

  border: 1px solid black;
  box-shadow: 5px 5px 10px -5px red;
  background-color: rgb(183, 86, 12);
`;

/*홈화면 사이드 바*/
export const CommonContentSidebar = styled.div`
  position: absolute;
  width: 334px;
  height: 763px;
  right: 0px;

  border: 1px solid black;
  box-shadow: 5px 5px 10px -5px red;
  background-color: rgb(6, 51, 111);
`;

/*홈화면 컨텐츠 타이틀*/
export const CommonTitleArea = styled.div`
  margin-bottom: 20px;
`;

export const CommonTitleTitle = styled.div`
  height: 28px;
  font-size: 24px;
  margin-left: 40px;

  font-weight: 400;
  line-height: 32px;

  font-family: "GangwonEduPower";
  font-style: normal;

  border: 1px solid black;
  box-shadow: 5px 5px 10px -5px red;

  background-color: yellow;
`;

export const CommonTitleText = styled.div`
  height: 28px;
  font-size: 24px;
  margin-left: 40px;

  font-weight: 400;
  line-height: 32px;

  font-family: "GangwonEduPower";
  font-style: normal;

  border: 1px solid black;
  box-shadow: 5px 5px 10px -5px red;

  background-color: yellow;
`;

/*실제 개별 컴포넌트가가 들어갈 영역*/
export const CommonContentArea = styled.div`
  width: 100%;
  background-color: #b1283f;
`;

/*게시판 별 광고 슬라이드*/
export const BoardSlide = styled.div`
  width: 100%;
  height: 266px;
  background-color: rgb(227, 149, 135);
  margin-top: 20px;
  margin-bottom: 20px;
`;

/*글쓰기 버튼이 들어갈 영역*/
export const CommonContentTools = styled.div`
  width: 100%;
  margin-bottom: 20px;

  border: 1px solid black;
  box-shadow: 5px 5px 10px -5px red;
  background-color: rgb(132, 132, 189);
`;
