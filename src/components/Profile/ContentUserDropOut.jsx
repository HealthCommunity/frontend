import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ContentContainer } from "../Menu/MenuStyle";
import Modal from "../Asset/Modal";
import { Link } from "react-router-dom";

const ProfileFrom = styled.section`
    padding: 20px;
    min-height: 200px;
    margin-bottom: 72px;
`;

const Btn = styled.button`
    margin-right: 8px;
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    color: black;
    border-color: black;
    background-color: #fff;
    font-weight: 700;
    cursor: pointer;
`;

const DescTitle = styled.span`
    display: block;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.7);
`;

export default function ContentUserDropOut() {
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

    return (
        <ContentContainer>
            <ProfileFrom>
                <DescTitle>정말로 탈퇴하시겠습니까?</DescTitle>
                <Btn onClick={openModal}>탈퇴하기</Btn>
                <Modal open={modalOpen} close={closeModal} header={"회원 탈퇴"}>
                    회원 탈퇴를 하게 되면 보유하신 프로필, 삼대력 등이 모두
                    사라지며, 작성한 글, 댓글은 사라지지 않습니다. <br />
                    동의하십니까?
                </Modal>
                <Link to={"/profile"}>
                    <Btn>취소하기</Btn>
                </Link>
            </ProfileFrom>
        </ContentContainer>
    );
}
