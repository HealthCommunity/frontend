import {FaSearch} from "react-icons/fa";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import {SearchDiv,SearchForm,SearchInput} from './SearchStyle'
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import Modal from "react-modal";

const SelectOption = styled.select`
    border:none;
    :focus {
        outline: none;
    }
`

const customStyles = {
    overlay: {
        backgroundColor: "#999999",
        
    },
    content: {
        zIndex: "1",
        height: "100px",
        opacity : "1",
        margin: "0 auto",
    
    },
  };
  


function Search () {
    const navigate = useNavigate();
    const [open,setOpen] = useState(false);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit =(data)=>{
        reset();
        navigate('/search' , {state : { searchItem : `${data.find}` , searchOption : `${data.option}`}});
    }
    function closeModal(){
        setOpen(false);
    }
    const openSearch = () =>{
        setOpen(true)
    }
    return(
        <div>
            <button onClick={openSearch}><FaSearch/></button>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <SearchDiv>
                    <SearchForm onSubmit={handleSubmit(onSubmit)}>
                        <SelectOption {...register("option")}>
                            <option value="total">통합검색</option>
                            <option value="write">작성자</option>
                            <option value="title">글제목</option>
                        </SelectOption>
                        <SearchInput {...register("find", {required:true})}/>
                        <FaSearch style={{width:"30%", fontSize:"20px", marginRight:"5px"}} onClick={handleSubmit(onSubmit)}/>
                    </SearchForm>
                </SearchDiv>
            </Modal>
            
        </div>
    )
}

export default Search