import React from "react";
import styled, { keyframes } from "styled-components";

const ModalShow = keyframes`
    from {
    opacity: 0;
    margin-top: -50px;
    }
    to {
        opacity: 1;
        margin-top: 0;
    }
`;

const ModalBgShow = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export default function Modal({
  open,
  close,
  header,
  children,
  footerDesc = "확인",
  isAgree,
}) {
  return (
    <>
      {open && (
        <ModalGroup open={open}>
          <ModalBox>
            <ModalHeader>{header}</ModalHeader>
            <ModalMain>
              <MainContent>{children}</MainContent>
            </ModalMain>
            <ModalFooter>
              <CancelButton onClick={close}>취소</CancelButton>
              <Button onClick={isAgree}>{footerDesc}</Button>
            </ModalFooter>
          </ModalBox>
        </ModalGroup>
      )}
    </>
  );
}

const ModalGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(px);
  align-items: center;
  animation: ${ModalBgShow} 0.3s;
`;

const ModalBox = styled.section`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 6px;
  background-color: ${(props) => props.theme.constPointWhite100};
  animation: ${ModalShow} 0.3s;
  overflow: hidden;
  padding: 0;
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  background: #ffffff;
  padding: 28px 0px 20px 24px;
  margin-bottom: 0;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #222222;
  z-index: 99;
`;

const ModalMain = styled.div`
  padding: 10px;
`;

const MainContent = styled.div`
  padding: 0 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;

const ModalFooter = styled.div`
  padding: 40px 0 32px 0;
  text-align: right;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #222222;
  background: #ffffff;
  border: 0;
`;

const CancelButton = styled(Button)`
  font-weight: 700;
`;
