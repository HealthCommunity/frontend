import {FaSearch} from "react-icons/fa";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import {SearchDiv,SearchForm,SearchInput} from './SearchStyle'

function Search () {
    const [inputValue, setInputValue]= useState("");
    const { register, handleSubmit,reset } = useForm();
    const onSubmit =(data)=>{
        setInputValue(data.find);
        reset();
    }
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