import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../Share/Modal";

import axios from "axios";

const UserDropOut = styled.div`
  margin: auto;
`;

const DropOutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #888888;
`;

export default function ContentUserDropOut() {
  const [modalState, setModalState] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [modalState]);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const withdrawUser = () => {
    setModalState(false);
    setIsAgree(true);
    console.log(isAgree);
    console.log("회원탈퇴 동의완료");

    axios
      .post("/api/user/delete", {
        withCredentials: true,
        credentials: "include",
      })
      .then(function (response) {
        console.log("회원탈퇴");
      })
      .catch(function (error) {
        console.log("회원탈퇴 실패", error);
      });
  };

  return (
    <UserDropOut>
      <DropOutButton onClick={openModal}>탈퇴하기</DropOutButton>
      <Modal
        open={modalState}
        close={closeModal}
        header={"회원탈퇴"}
        footerDesc={"동의"}
        isAgree={withdrawUser}
      >
        회원 탈퇴를 하게 되면 보유하신 프로필, 삼대력 등이 모두 사라지며, 작성한
        글, 댓글은 사라지지 않습니다. <br />
        동의하십니까?
      </Modal>
    </UserDropOut>
  );
}
