// react hook , react
import { useState, useEffect } from "react";

// recoil ( 상태관리 )

// react library
import { useForm } from "react-hook-form";
import axios from "axios";

// styled-components , Style Files
import styled from "styled-components";

// Components

// Icons , Images

// Share , Utils
import Modal from "../../../share/Modal";

export default function PostThreePower({ userId }) {
  const [modalState, setModalState] = useState(false);

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

  const {
    register: modalregister,
    handleSubmit: modalsubmit,
    reset: modalreset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`/api/user/${userId}/bigthreepower`, {
        bench: data.bench,
        dead: data.dead,
        squat: data.squat,
      })
      .then((response) => {
        if (response.data.status === "0452") {
          alert(response.data.message);
        } else {
          alert("3대력 저장이 성공했습니다.");
        }
      })
      .catch((error) => {
        alert("3대력 저장이 실패했습니다.");
      });
    closeModal();
    modalreset();
  };

  return (
    <>
      <ModalButton onClick={openModal}>관리자 3대력 부여</ModalButton>
      <Modal
        open={modalState}
        close={closeModal}
        header={"삼대력 부여"}
        footerDesc={"삼대력 부여 완료"}
        isAgree={modalsubmit(onSubmit)}
      >
        <ModalForm onSubmit={modalsubmit(onSubmit)}>
          <p style={{ textAlign: "center", margin: "10px 0px" }}>
            숫자만 입력해주세요
          </p>
          <input
            {...modalregister("dead", {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            placeholder="데드 리프트"
          />
          <input
            {...modalregister("bench", {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            placeholder="벤치 프레스"
          />
          <input
            {...modalregister("squat", {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            placeholder="스쿼트"
          />
        </ModalForm>
      </Modal>
    </>
  );
}

const ModalButton = styled.button`
  width: 150px;
  height: 50px;
  margin: 0 auto;
  border-radius: 40px;
  border: 1px solid #eeeeee;
  background-color: transparent;
  text-align: center;
  font-family: "Pretendard";
  cursor: pointer;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    height: 50px;
    color: #888888;
    padding: 12px 20px;
    border-radius: 60px;
    background-color: #f3f4f7;
    border: 1px solid #eeeeee;
    line-height: 45px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0px;

    :focus {
      outline: none;
    }
  }
`;
