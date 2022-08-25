import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import SearchColorImage from "../../assets/images/common_search_wh_24.svg";
import SearchImage from "../../assets/images/common_search_bk_24.svg";

export default function NavSearch({ isSearchOpen, navdata, ScrollY }) {
  let navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(isSearchOpen);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    navigate("/search", { state: data });
  };

  return (
    <NavSearchDiv>
      {searchOpen ? (
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <SelectForm
            {...register("select")}
            style={{
              backgroundColor:
                !navdata && ScrollY === 0 ? "#21242E" : "#FEFEFE",
              color: !navdata && ScrollY === 0 ? "#FEFEFE" : "#21242E",
            }}
          >
            <option value="titleandcontent">통합검색</option>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="user">작성자</option>
          </SelectForm>
          <SearchInput
            {...register("keyword")}
            type="text"
            color={!navdata && ScrollY === 0 ? "white" : "black"}
          />
          <SearchButton type="submit" color={navdata ? "white" : "black"}>
            <img
              src={!navdata && ScrollY === 0 ? SearchColorImage : SearchImage}
              alt="search"
            />
          </SearchButton>
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
  position: relative;
  display: flex;
  align-items: center;
`;

const SelectForm = styled.select`
  position: absolute;
  margin: 0 20px 0 10px;
  margin-right: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  outline: 0 none;
  border: none;
  padding: 2px;
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
`;

const SearchInput = styled.input`
  width: 100px;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  color: ${(props) => props.color};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  height: 40px;
  border: 1px solid #eeeeee;
  border-radius: 60px;
  padding: 0 40px 0 90px;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
