import styled from "styled-components";

export const ProfileBackgroud = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 150px;
  margin-bottom: 150px;
`;

export const ProfileContainer = styled.section`
  width: 970px;
  height: 500px;
  @media all and (min-width: 480px) and (max-width: 767px) {
    font-size: ${(props) => props.theme.fontSizeH4};
    width: 90%;
  }
  @media all and (max-width: 479px) {
    font-size: ${(props) => props.theme.fontSizeH4};
    width: 90%;
  }
`;

export const ProfileMyinfo = styled.section`
  box-sizing: border-box;
  width: 470px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 90%;
  }
  @media all and (max-width: 479px) {
    width: 90%;
  }
`;

export const ProfileMyInfoGroup = styled.div`
  display: flex;
  margin: auto;
`;

export const MyInfoId = styled.span`
  font-family: "GangwonEduPower";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #222222;
`;

export const MyInfoNickname = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;
