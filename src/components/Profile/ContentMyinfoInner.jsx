import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../Share/Modal";

const InfoInnerDiv = styled.div`
    display: flex;
    padding: 32px;

    @media all and (min-width: 480px) and (max-width: 767px) {
        padding: 16px 0px;
    }
    @media all and (max-width: 479px) {
        padding: 16px 0px;
    }
`;

const ProfileImg = styled.div`
    img {
        border-radius: ${(props) => props.theme.radiusSize20};
        width: 200px;
        height: 200px;

        @media all and (min-width: 480px) and (max-width: 767px) {
            width: 80px;
            height: 80px;
        }
        @media all and (max-width: 479px) {
            width: 80px;
            height: 80px;
        }
    }
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        padding: 0 12px;
    }
    @media all and (max-width: 479px) {
        padding: 0 12px;
    }
`;

const DescGroup = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    margin: 16px 0;
    @media all and (min-width: 480px) and (max-width: 767px) {
        flex-direction: column;
        align-items: start;
    }
    @media all and (max-width: 479px) {
        flex-direction: column;
        align-items: start;
    }
`;

const DescSub = styled.span`
    width: 80px;
    margin: 4px;

    color: ${(props) => props.theme.colorFontGrey100};
    font-size: ${(props) => props.theme.fontSizeH6};
`;

const DescText = styled.p`
    font-size: ${(props) => props.theme.fontSizeH5};
`;

const Button = styled.button`
    outline: none;
    cursor: pointer;
    border: 0;
    margin: 0;
`;

const DescChangeBtn = styled(Button)`
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

const TextArea = styled.textarea`
    width: 100%;
    height: 6.25em;
    resize: none;
    border: none;
    outline: none;

    font-size: ${(props) => props.theme.fontSizeH6};
    font-weight: 600;
    line-height: 1.8;
    letter-spacing: 0.3px;
    margin-bottom: 0;
`;

export default function ContentMyinfoInner({ id, nickname, desc, imgUrl }) {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "visible";
        };
    }, [modalOpen]);

    const openModal = () => {
        //console.log("open");
        setModalOpen(true);
    };

    const closeModal = () => {
        //console.log("close");
        setModalOpen(false);
    };

    return (
        <InfoInnerDiv>
            <ProfileImg>
                <img src={imgUrl} alt=""></img>
            </ProfileImg>
            <ProfileInfo>
                <DescGroup>
                    <DescSub>이메일</DescSub>
                    <DescText>{id}</DescText>
                </DescGroup>

                <DescGroup>
                    <DescSub>닉네임</DescSub>
                    <DescText>{nickname}</DescText>
                </DescGroup>
                <DescGroup>
                    <DescSub>한줄소개</DescSub>
                    <DescText>{desc}</DescText>
                </DescGroup>
                <DescGroup>
                    <DescChangeBtn onClick={openModal}>
                        한줄소개 변경
                    </DescChangeBtn>
                </DescGroup>

                <Modal
                    open={modalOpen}
                    close={closeModal}
                    header={"한줄 소개 변경"}
                >
                    <TextArea></TextArea>
                </Modal>
            </ProfileInfo>
        </InfoInnerDiv>
    );
}
