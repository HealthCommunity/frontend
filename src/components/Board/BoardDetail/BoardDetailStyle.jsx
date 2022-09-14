// styled-components , Style Files
import styled from "styled-components";

export const InfoDiv = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;
export const InfoTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const InfoTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.reverseFontColor};
`;

export const InfoTitleWrite = styled.div`
  color: #9c9c9e;
  display: flex;
`;

export const InfoExplanationDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InfoCommentForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InfoCommentInputText = styled.input`
  border-radius: 20px;
  padding: 20px;
  width: 50vw;
  height: 100px;
  font-size: ${(props) => props.theme.fontSizeH2};
  margin: 20px 0px;
`;
export const InfoCommentInputSubmit = styled.input`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizeH2};
  padding: 1px 6px;
  margin: 25px 0px 15px 0px;
  align-items: center;
  width: 150px;
  height: 70px;
  border: 1px solid #dcdde1;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  :hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.underLineColor};
    color: ${(props) => props.theme.boxFontHoverColor};
  }
`;

export const CommentList = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const BoardSummary = styled.div`
  width: 90%;
  margin: 50px 20px;
`;

export const CommentListitem = styled.div`
  font-size: ${(props) => props.theme.fontSizeH2};
  margin: 20px 0px;
`;
