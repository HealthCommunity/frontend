// react hook , react
import React, { useState, useEffect } from "react";

// recoil ( 상태관리 )
import useUserData from "../../api/useUserData";

// react library
import { useNavigate } from "react-router-dom";
import axios from "axios";

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images

// Share , Utils
import Modal from "../../share/Modal";
import userLogout from "../../utils/User/userLogout";

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
    axios
      .post("/api/user/delete", {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        alert("회원 탈퇴룰 성공하였습니다.");
        userLogout({
          onSuccess: (response) => {
            reFetch();
            navigate("/login");
          },
          onError: (error) => {
            reFetch();
            alert("회원 탈퇴 실패하였습니다.");
          },
        });
      })
      .catch((error) => {
        alert("회원 탈퇴 실패하였습니다.");
      });
  };

  return (
    <DropOut>
      <DropOutButton onClick={openModal}>탈퇴하기</DropOutButton>
      <Modal
        open={modalState}
        close={closeModal}
        header={"회원탈퇴"}
        footerDesc={"동의하고 탈퇴하기"}
        isAgree={submitDropOut}
      >
        회원탈퇴를 하게되면 보유하신 프로필, 삼대력 등이 모두 사라지지만, 작성한
        글 및 댓글은 사라지지 않습니다. <br />
        동의하십니까?
      </Modal>
    </DropOut>
  );
}

const DropOut = styled.div`
  margin: 24px auto 0;
`;

const DropOutButton = styled.p`
  border: none;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #888888;
  background-color: transparent;
  cursor: pointer;
`;
