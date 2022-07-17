import {FaSearch} from "react-icons/fa";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import {SearchDiv,SearchForm,SearchInput} from './SearchStyle'
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

const SelectOption = styled.select`
    border:none;
    :focus {
        outline: none;
    }
`


function Search () {
    const navigate = useNavigate();
    const { register, handleSubmit,reset } = useForm();
    const onSubmit =(data)=>{
        reset();
        navigate('/search' , {state : { searchItem : `${data.find}` , searchOption : `${data.option}`}});
    }
    return(
        <SearchDiv>
            <SearchForm onSubmit={handleSubmit(onSubmit)}>
                <SelectOption {...register("option")}>
                    <option value="total">통합검색</option>
                    <option value="write">작성자</option>
                    <option value="title">글제목</option>
                </SelectOption>
                <SearchInput {...register("find", {required:true})}/>
                <FaSearch style={{width:"10%", fontSize:"20px", marginRight:"5px"}} onClick={handleSubmit(onSubmit)}/>
            </SearchForm>
        </SearchDiv>
    )
}

export default Search