import styled from "styled-components";

/*네비게이션*/
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 84px;
  background: #222222;
`;

/*네비게이션 아래 부분 콘텐츠 영역*/
export const CommonContainer = styled.div`
  width: 100%;
  position: relative;
`;

/*홈화면 2단 나누기*/
export const CommonContentsHome = styled.div`
  display: flex;
  margin: 0 auto;

  @media screen and (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

/*홈화면 2단(왼쪽, 오른쪽 영역)*/
export const CommonContentsLeft = styled.div`
  width: 75%;
  order: 1;
  @media screen and (max-width: 1900px) {
    width: 70%;
    order: 1;
  }
  @media screen and (max-width: 1024px) {
    width: 65%;
    order: 1;
  }
  @media screen and (max-width: 600px) {
    width: 55%;
    order: 2;
  }
`;

export const CommonContentsRight = styled.div`
  width: 25%;
  order: 2;
  @media screen and (max-width: 1900px) {
    width: 65%;
    order: 2;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    order: 2;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    order: 1;
  }
`;

/*홈화면 메인 상단 슬라이드*/
export const MainSlide = styled.div`
  box-sizing: border-box;
  margin-top: 70px;
  width: 100%;
  height: 450px;
  background: #222222;
`;

/*메인화면 공통*/
/*홈화면, 카테고리 컨텐츠 타이틀*/
export const CommonTitleArea = styled.div`
  width: 1100px;
  margin: 30px auto;
`;

export const CommonTitleTGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const CommonTitleText = styled.div`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  white-space: nowrap;
  font-family: "GangwonEduPower";
`;

/*홈화면 개별 컴포넌트의 중앙 정렬 틀*/
export const WidthAreaHome = styled.section`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1900px) {
    width: 95%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

/*(홈화면 제외)각 컴포넌트의 중앙 정렬 틀*/
export const WidthAreaSpace = styled.section`
  width: 1400px;
  margin: 0 auto;
  margin-top: 100px;
  @media screen and (max-width: 1400px) {
    width: 700px;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 700px) {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
  }
`;

/*(홈화면 제외) 게시글 컴포넌트의 중앙 정렬 틀*/
export const WidthAreaInner = styled.div`
  margin: 32px 2px;
  display: flex;
  flex-wrap: wrap;
`;
