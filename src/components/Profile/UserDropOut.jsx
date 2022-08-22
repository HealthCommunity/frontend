import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../Share/Modal";

import axios from "axios";
import userLogout from "../User/userLogout";
import useUserData from "../../api/useUserData";

export default function UserDropOut() {
  const [modalState, setModalState] = useState(false);
  const [, reFetch] = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = "hidden"; //모달 배경 스크롤 방지
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

  const submitDropOut = () => {
    setModalState(false);
    console.log("회원탈퇴 동의완료");

    axios
      .post("/api/user/delete", {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        console.log("회원탈퇴 완료");
        userLogout({
          onSuccess: (response) => {
            console.log("로그아웃 성공");
            reFetch();
            navigate("/login");
          },
          onError: (error) => {
            reFetch();
            console.log("로그아웃 실패", error);
          },
        });
      })
      .catch((error) => {
        console.log("회원탈퇴 실패", error);
      });
  };

  return (
    <DropOut>
      <DropOutButton onClick={openModal}>탈퇴하기</DropOutButton>
      <Modal
        open={modalState}
        close={closeModal}
        header={"회원탈퇴"}
        footerDesc={"동의"}
        isAgree={submitDropOut}
      >
        회원 탈퇴를 하게 되면 보유하신 프로필, 삼대력 등이 모두 사라지며, 작성한
        글, 댓글은 사라지지 않습니다. <br />
        동의하십니까?
      </Modal>
    </DropOut>
  );
}

const DropOut = styled.div`
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
