import styled from "styled-components"
import {FaSearch} from "react-icons/fa";
import  { useState } from "react";
import { useForm } from "react-hook-form";

const SearchDiv= styled.div`
    margin: 0 auto;
    padding: 150px 0px 100px 0px;
    width:20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    @media all and (min-width:480px) and (max-width:767px) {
        width:45%;
    }
    @media all and (max-width:479px) {
        width:45%;
    }
`
const SearchForm = styled.form`
    color: #555;
    display: flex;
    padding: 2px;
    font-size: ${(props)=>props.theme.fontSizeH4};
    height: 40px;
    border: 1px solid currentColor;
    border-radius: ${(props)=>props.theme.radiusSize50};
    margin: 0 0 30px;
    svg {
        :hover{
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`

const SearchInput = styled.input`
  border: none;
  background: transparent;
  margin: 0;
  width:90%;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
  :focus{
    font-size: ${(props)=>props.theme.fontSizeH4};
    outline: none;
  }
`



function Search () {
    const [inputValue, setInputValue]= useState("");
    const { register, handleSubmit,reset } = useForm();
    const onSubmit =(data)=>{
        setInputValue(data.find);
        reset();
    }
    console.log(inputValue)
    return(
        <SearchDiv>
            <SearchForm onSubmit={handleSubmit(onSubmit)}>
                <SearchInput {...register("find", {required:true})}/>
                <FaSearch style={{width:"10%", fontSize:"20px", marginRight:"5px"}} onClick={handleSubmit(onSubmit)}/>
            </SearchForm>
        </SearchDiv>
    )
}

export default Search