import styled from "styled-components";
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoTitle = styled.div`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 18px;
  color: #222222;
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
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: ${(props) => props.theme.fontSizeH4};
    width: 60vw;
    height: 25px;
  }
  @media all and (max-width: 479px) {
    font-size: ${(props) => props.theme.fontSizeH4};
    width: 60vw;
    height: 25px;
  }
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
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: ${(props) => props.theme.fontSizeH4};
    width: 150px;
    height: 40px;
    margin: 15px 0px;
  }
  @media all and (max-width: 479px) {
    font-size: ${(props) => props.theme.fontSizeH4};
    width: 150px;
    height: 40px;
    margin: 15px 0px;
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
  margin: 50px 0px;
`;

export const CommentListitem = styled.div`
  font-size: ${(props) => props.theme.fontSizeH2};
  margin: 20px 0px;
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: ${(props) => props.theme.fontSizeH4};
    margin: 15px 0px;
  }
  @media all and (max-width: 479px) {
    font-size: ${(props) => props.theme.fontSizeH4};
    margin: 15px 0px;
  }
`;
