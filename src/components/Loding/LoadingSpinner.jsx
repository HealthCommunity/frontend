import styled from "styled-components";
import Spinner from "../../assets/images/spinner.gif";

function LoadingSpinner({ text }) {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="10%" />
      <LoadingText>
        {text === undefined ? "잠시만 기다려 주세요." : text}
      </LoadingText>
    </Background>
  );
}

export default LoadingSpinner;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #fcfcfcb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  text-align: center;
`;
