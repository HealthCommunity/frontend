// react hook , react

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled, { keyframes } from "styled-components";

// Components

// Icons , Images
import Spinner from "../../assets/images/symbol_bl_120.svg";

// Share , Utils

export default function LoadingSpinner({ text }) {
  return (
    <Background>
      <LodingImg>
        <img src={Spinner} alt="로딩중" />
      </LodingImg>

      <LoadingText>
        {text === undefined ? "잠시만 기다려 주세요." : text}
      </LoadingText>
    </Background>
  );
}

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(16deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Background = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background: #fcfcfcb7;
`;

const LodingImg = styled.div`
  & img {
    width: 300px;
    height: 300px;
    animation: ${animation} 1.5s linear infinite;
  }
`;

const LoadingText = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  white-space: nowrap;
  font-family: "GangwonEduPower";
  color: #0066ff;
`;
