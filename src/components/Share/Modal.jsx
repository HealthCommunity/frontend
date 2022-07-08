import React from "react";
import styled, { keyframes } from "styled-components";
import { IoClose } from "react-icons/io5";

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
    box-sizing: border-box;
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    align-items: center;
    animation: ${ModalBgShow} 0.3s;
`;

const Section = styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 25px;
    background-color: ${(props) => props.theme.constPointWhite100};
    animation: ${ModalShow} 0.3s;
    overflow: hidden;
    padding: 0;
`;

const Header = styled.div`
    position: relative;
    display: flex;
    border-radius: ${(props) => props.theme.radiusSize20}
        ${(props) => props.theme.radiusSize20} 0 0;
    padding: 40px 50px 30px;
    margin-bottom: 0;
    font-size: ${(props) => props.theme.fontSizeH4};
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.constPointWhite100};
    background-color: black;
    z-index: 99;
`;

const Button = styled.button`
    outline: none;
    cursor: pointer;
    border: 0;
`;

const HeaderButton = styled(Button)`
    position: absolute;
    top: 20px;
    right: 15px;
    width: 50px;
    height: 50px;
    background: hsla(0, 0%, 100%, 0.3);
    text-indent: -999999px;
    border: 0;
    border-radius: 50%;
    transition: all 0.3s ease 0s;

    :hover {
        background: hsla(0, 0%, 100%, 0.4);
    }

    .logo {
        color: ${(props) => props.theme.constPointWhite100};
        position: absolute;
        top: 42%;
        left: 42%;
        display: block;
        width: 24px;
        height: 24px;
        margin: -7.6px 0 0 -7.6px;
    }
`;

const FooterButton = styled(Button)`
    padding: 6px 12px;
    border: 0;
    width: 150px;
    height: 45px;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2px;
    border-radius: 40px;
    color: #fff;
    box-shadow: ${(props) => props.theme.shadowColor2};
    background-image: linear-gradient(180deg, #87a2ff, #867dfe);

    :hover {
        color: #fff;
        background-image: linear-gradient(180deg, #8099ef, #8179f4);
    }
`;

const Main = styled.div`
    padding: 10px;
`;

const MainContent = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: ${(props) => props.theme.radiusSize20};
    box-shadow: ${(props) => props.theme.shadowColor};

    font-size: ${(props) => props.theme.fontSizeH6};
    font-weight: 600;
    line-height: 1.8;
    letter-spacing: 0.3px;
    margin-bottom: 0;
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
                            <HeaderButton onClick={close}>
                                <IoClose className="logo"></IoClose>
                            </HeaderButton>
                        </Header>
                        <Main>
                            <MainContent>{children}</MainContent>
                        </Main>
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
