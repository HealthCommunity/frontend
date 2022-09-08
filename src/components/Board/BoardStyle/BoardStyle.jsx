import styled from "styled-components";
export const BoardDiv = styled.div`
  width: 325px;
  height: 346px;
  padding: 10px 0px;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;

  background-color: ${(props) => props.theme.backGroundColor};
  color: ${(props) => props.theme.reverseFontColor};

  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const BoardVideoOne = styled.video`
  height: 160px;
  margin: 0px 10px;
  width: 301px;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    width: 90%;
    height: 50%;
  }
`;
export const BoardVideoDiv = styled.div`
  display: flex;
  height: 100px;
  margin: 10px 0px;
  @media screen and (max-width: 600px) {
    height: 40%;
  }
`;

export const BoardVideoTwo = styled.video`
  width: 146px;
  margin: 0 auto;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;
export const BoardVideoThree = styled.video`
  width: 146px;
  margin: 0 auto;

  border-radius: 8px;
  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;

export const BoardTextDiv = styled.div`
  width: 301px;
  height: 24px;
  display: flex;
  align-items: center;
  margin: 5px 10px;
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 20px 0px;
  }
`;

export const BoardText = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.reverseFontColor};
  line-height: 1.1;
  @media screen and (max-width: 600px) {
    margin: 10px 0px;
  }
`;

export const BoardDivBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #aaaaaa;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BoardDivIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #d9d9d9;
  border-radius: 50%;
  margin: 0px 10px;
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
  width: 30%;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SeparataDiv = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  margin: 0px 10px;
  font-weight: 400;
  font-size: 14px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 20px 0px;
  }
`;

export const SeparataItem = styled.div`
  margin: 0px 5px;
  display: flex;
  @media screen and (max-width: 600px) {
    margin: 5px 0px;
  }
`;

export const SeparataSpan = styled.span`
  margin-left: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
