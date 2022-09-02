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

export const CommonContentsHome = styled.div`
  display: flex; /*홈화면 2단 나누기*/
  margin: 0 auto;
`;

/*홈화면 2단(왼쪽, 오른쪽 영역)*/
export const CommonContentsLeft = styled.div`
  width: 75%;
`;

export const CommonContentsRight = styled.div`
  width: 25%;
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

/*(홈화면 제외)각 컴포넌트의 중앙 정렬 틀*/
export const WidthAreaSpace = styled.section`
  width: 1440px;
  margin: 0 auto;
  margin-top: 100px;
`;

/*홈화면 개별 컴포넌트의 중앙 정렬 틀*/
export const WidthAreaHome = styled.section`
  width: 1100px;
  margin: 0 auto;
`;
