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

const ModalGroup = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: ${ModalBgShow} 0.3s;
`;

const Section = styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: ${ModalShow} 0.3s;
    overflow: hidden;
`;

const Header = styled.div`
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
`;

const Button = styled.button`
    outline: none;
    cursor: pointer;
    border: 0;
`;

const HeaderButton = styled(Button)`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
`;

const FooterButton = styled(Button)`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    outline: none;
    cursor: pointer;
    border: 0;
`;

const Main = styled.div`
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`;

const Footer = styled.div`
    padding: 12px 16px;
    text-align: right;
`;

export default function Modal({
    open,
    close,
    header,
    children,
    footerDesc = "확인",
}) {
    return (
        <>
            {open && (
                <ModalGroup open={open}>
                    <Section>
                        <Header>
                            {header}
                            <HeaderButton onClick={close}>X</HeaderButton>
                        </Header>
                        <Main>{children}</Main>
                        <Footer>
                            <FooterButton onClick={close}>
                                {footerDesc}
                            </FooterButton>
                        </Footer>
                    </Section>
                </ModalGroup>
            )}
        </>
    );
}
