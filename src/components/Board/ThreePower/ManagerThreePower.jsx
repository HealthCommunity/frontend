import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
  },
};

export default function PostThreePower({ item }) {
  const [modalOpen, setModalOpen] = useState(false);

  const modalIsOpen = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const {
    register: modalregister,
    handleSubmit: modalsubmit,
    reset: modalreset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`/api/user/${item}/bigthreepower`, {
        bench: data.bench,
        dead: data.dead,
        squat: data.squat,
      })
      .then(function (response) {
        console.log("성공", response);
        alert("3대력이 저장되었습니다.");
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log("실패", error);
      });
    closeModal();
    modalreset();
  };

  return (
    <>
      <ModalButton onClick={modalIsOpen}>관리자 3대력 부여</ModalButton>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
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
          <input
            style={{
              fontWeight: "600",
              width: "100%",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
            type="submit"
          />
        </ModalForm>
      </Modal>
    </>
  );
}

const ModalButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 40px;
  border: 1px solid #eeeeee;
  background-color: transparent;
  text-align: center;
  font-family: "Pretendard";
`;
const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    height: 45px;
    color: #21242e;
    font-size: 16px;
    padding: 0 20px;
    border-radius: 10px;
    background-color: #f3f4f7;
    border: 1px solid #ccc;
    line-height: 45px !important;
    margin: 10px 0px;
    :focus {
      outline: none;
    }
  }
`;
