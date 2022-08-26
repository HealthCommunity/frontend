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
  margin: 0 auto;
  margin-top: 100px;
`;

export const CommonContentsHome = styled.div`
  display: flex;
`;

export const CommonContentsRight = styled.div`
  width: 25%;
  height: 100vh;
`;

export const CommonContentsLeft = styled.div`
  width: 75%;
`;

/*슬라이드*/
export const MainSlide = styled.div`
  box-sizing: border-box;
  margin-top: 70px;
  width: 100%;
  height: 450px;
  margin-bottom: 20px;
  background-color: gold;
`;

/*메인화면 공통*/

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
  margin: 30px 0px;
`;

export const CommonTitleTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 400;
  font-family: "GangwonEduPower";
  font-style: normal;
`;

export const CommonTitleText = styled.div`
  font-size: 24px;
  font-weight: 400;
  font-family: "GangwonEduPower";
`;

/*실제 개별 컴포넌트가가 들어갈 영역*/
export const CommonContentArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
