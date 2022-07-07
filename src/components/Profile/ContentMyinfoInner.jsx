import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../Share/Modal";
import { ButtonPupple } from "../Share/ButtonPupple";

const InfoInnerDiv = styled.div`
    display: flex;
    padding: 32px;

    @media all and (min-width: 480px) and (max-width: 767px) {
        padding: 32px 0px;
    }
    @media all and (max-width: 479px) {
        padding: 32px 0px;
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
    margin: 12px 0;
    @media all and (min-width: 480px) and (max-width: 767px) {
        margin: 4px 0;
    }
    @media all and (max-width: 479px) {
        margin: 4px 0;
    }
`;

const DescSub = styled.span`
    width: 80px;

    color: ${(props) => props.theme.colorFontGrey100};
    font-size: ${(props) => props.theme.fontSizeH4};
`;

const DescText = styled.p`
    font-size: ${(props) => props.theme.fontSizeH3};
`;

const DescChangeBtn = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: ${(props) => props.theme.radiusSize20};
    font-size: ${(props) => props.theme.fontSizeH5};
    line-height: 1.42857;
    font-weight: 700;
    -webkit-transition: all 0.25s;
    -o-transition: all 0.25s;
    transition: all 0.25s;
    cursor: pointer;

    background: #e4e4e4;

    :hover {
        background: rgba(228, 228, 228, 0.5);
    }
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
        console.log("open");
        setModalOpen(true);
    };

    const closeModal = () => {
        console.log("close");
        setModalOpen(false);
    };

    const TextArea = styled.textarea`
        width: 100%;
        height: 80px;
    `;

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
