import styled from "styled-components";

//콘텐츠 가로100, 세로 100, 전체 영역
export const ContentBackgroud = styled.div`
  width: 100%;
  height: 80vh;
`;

//콘텐츠 영역 중 가운데 세로 전체 영역
//여기서 실제 사용할 수 있는 가로 크기 잡음
export const ContentContainer = styled.div`
  width: 450px;
  height: 100%;
  margin: 0 auto;
  padding-top: 92px;
`;

//타이틀, sns nav, form, 버튼 감싸는 영역
export const LoginContainerArea = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const UserFormGroup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
`;

export const InputTextLabel = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const InputTextGroup = styled.div`
  width: 100%;
  margin-bottom: 14px;
`;

export const TextLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: #888888;
  cursor: pointer;
`;

export const CheckInput = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 12px 0 12px 0;
  display: flex;

  & input {
    margin: 0 8px 0 0;
  }
`;

export const LinkGroup = styled.div`
  margin-top: 24px;
`;
