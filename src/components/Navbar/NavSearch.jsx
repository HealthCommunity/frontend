import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import SearchColorImage from "../../assets/images/common_search_wh_24.svg";
import SearchImage from "../../assets/images/common_search_bk_24.svg";

export default function NavSearch() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  let { pathname } = useLocation();
  const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    navigate("/search", { state: data });
  };

  let navdata =
    pathname.includes("freepost") ||
    pathname.includes("exercisepost") ||
    pathname.includes("threepowerpost")
      ? true
      : false;

  return (
    <NavSearchDiv>
      {searchOpen ? (
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <SelectForm {...register("select")}>
            <option value="titleandcontent">통합검색</option>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="user">작성자</option>
          </SelectForm>
          <SearchInput
            {...register("keyword")}
            type="text"
            style={{
              outline: "none",
              width: "100px",
              borderBottom: `3px solid ${(props) => props.color}`,
            }}
            color={navdata ? "black" : "white"}
          />
          <SearchInput
            type="submit"
            style={{
              border: "none",
              cursor: "pointer",
              borderBottom: "none",
            }}
            color={navdata ? "black" : "white"}
          />
        </FormStyle>
      ) : (
        <img
          src={!navdata && ScrollY === 0 ? SearchColorImage : SearchImage}
          alt="search"
          onClick={() => setSearchOpen((prev) => !prev)}
        />
      )}
    </NavSearchDiv>
  );
}

const NavSearchDiv = styled.div``;

const FormStyle = styled.form`
  display: flex;
  align-items: center;
`;

const SelectForm = styled.select`
  margin-right: 5px;
`;

const SearchInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  color: ${(props) => props.color};
`;
