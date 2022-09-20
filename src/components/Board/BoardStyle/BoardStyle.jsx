// styled-components , Style Files
import styled from "styled-components";

/*삼대력게시글, 운동 다자유 게시글 공통 스타일*/
export const BoardTextDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 24px;
  margin: 5px 12px;

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 20px 0px;
  }
`;

export const BoardText = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.1;
  color: ${(props) => props.theme.reverseFontColor};

  @media screen and (max-width: 600px) {
    margin: 10px 0px;
    font-size: 12px;
  }
`;

export const BoardProfileImg = styled.div`
  width: 24px;
  height: 24px;
  /* margin: 0px 10px; */
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    margin: 0px 10px 0px 0px;
  }
`;

export const BoardDivWrite = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.reverseFontColor};
`;

export const SeparataDivLeft = styled.div`
  display: flex;
  align-items: center;
  width: 35%;

  @media screen and (max-width: 600px) {
    width: 35%;
  }
`;

export const SeparataDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 65%;
  margin: 0px 10px;
  font-size: 14px;

  @media screen and (max-width: 600px) {
    width: 60%;
    margin: 20px 0px;
  }
`;

export const SeparataItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 5px 0px;
  }
`;

export const SeparataSpan = styled.span`
  width: 100%;
  margin-left: 5px;
  font-style: normal;
  font-size: 14px;
`;
