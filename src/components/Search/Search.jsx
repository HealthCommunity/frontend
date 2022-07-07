import {FaSearch} from "react-icons/fa";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import {SearchDiv,SearchForm,SearchInput} from './SearchStyle'
import styled from "styled-components";

const SearchIconStyle =styled.div`
    width:150px;
    height:150px;
    margin:0 auto;
    display: flex;
    position: relative;
    background-color: ${(props)=>props.theme.fontColor};
    border-radius: ${(props)=>props.theme.radiusSize50};
    color:  ${(props)=>props.theme.bgColor};
    cursor:pointer;
    user-select:none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s; /* Safari */
    :hover{
        transition-duration: 2s;
        transform: translateY(-10px);
        background-color: ${(props)=>props.theme.navBgColor};
    }
    ::after{
        content: "";
        display: block;
        position: absolute;
        border-radius: 4em;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.5s;
        box-shadow: 0 0 10px 40px white;
    }
    :active::after{
        box-shadow: 0 0 0 0 white;
        position: absolute;
        border-radius: 4em;
        left: 0;
        top:0;
        opacity: 1;
        transition: 0s;
    }
    :active{
        top: 1px;
    }
`

function Search () {
    const [inputValue, setInputValue]= useState("");
    const [searchIcon, setSearchIcon] = useState(false);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit =(data)=>{
        setInputValue(data.find);
        reset();
    }
    return(
        <SearchDiv>
            {searchIcon ? 
            <SearchForm onSubmit={handleSubmit(onSubmit)}>
                <SearchInput {...register("find", {required:true})}/>
                <FaSearch style={{width:"10%", fontSize:"20px", marginRight:"5px"}} onClick={handleSubmit(onSubmit)}/>
            </SearchForm>:  <SearchIconStyle onClick={()=>setSearchIcon((prev)=>!prev)}><FaSearch style={{fontSize:"64px"}} /></SearchIconStyle>
        }   
        </SearchDiv>
    )
}

export default Search