import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../Share/Modal";
import { ButtonPupple } from "../Share/ButtonPupple";
import { ProfileContainerCenter } from "./ProfileLayout";

import axios from "axios";

const UserDropOutGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Btn = styled.button`
    //버튼 컴포넌트 대체 필요
    width: 100%;
    min-width: 120px;
    height: 56px;
    border: none;
    border-radius: ${(props) => props.theme.radiusSize20};
    font-size: ${(props) => props.theme.fontSizeH4};
    line-height: 1.42857;
    font-weight: 700;
    -webkit-transition: all 0.25s;
    -o-transition: all 0.25s;
    transition: all 0.25s;
    cursor: pointer;

    background: ${(props) => props.theme.colorPointPupple200};
    color: #fefefe;

    :hover {
        background: ${(props) => props.theme.colorPointPupple300};
    }
`;

const DescTitle = styled.span`
    color: ${(props) => props.theme.fontColor};
    margin-bottom: 40px;
`;

export default function ContentUserDropOut(loginId) {
    const [modalOpen, setModalOpen] = useState(false);
    const [isAgree, setIsAgree] = useState(false);

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

    const withdrawUser = () => {
        setModalOpen(false);
        setIsAgree(true);
        console.log(isAgree);
        console.log("회원탈퇴 동의완료");

        axios
            .post("/api/user/delete", {
                withCredentials: true,
                credentials: "include",
            })
            .then(function (response) {
                if (response.status === 200) {
                    console.log("회원탈퇴");
                }
            })
            .catch(function (error) {
                console.log("회원탈퇴 실패", error);
            });
    };

    return (
        <>
            <ProfileContainerCenter>
                <UserDropOutGroup>
                    <DescTitle>정말로 탈퇴하시겠습니까?</DescTitle>
                    <Btn onClick={openModal}>탈퇴하기</Btn>
                    <Modal
                        open={modalOpen}
                        close={closeModal}
                        header={"회원탈퇴"}
                        footerDesc={"동의"}
                        isAgree={withdrawUser}
                    >
                        회원 탈퇴를 하게 되면 보유하신 프로필, 삼대력 등이 모두
                        사라지며, 작성한 글, 댓글은 사라지지 않습니다. <br />
                        동의하십니까?
                    </Modal>
                </UserDropOutGroup>
            </ProfileContainerCenter>
        </>
    );
}
