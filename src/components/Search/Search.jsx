import {FaSearch} from "react-icons/fa";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import {SearchDiv,SearchForm,SearchInput} from './SearchStyle'
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import Modal from "react-modal";

const MobileSearch = styled.div`
    
    @media all and (min-width: 480px) and (max-width: 767px) {
        display: flex;
        
    }
    @media all and (max-width: 479px) {
        display: flex;
        
    }
`


const SearchBtn = styled.div`
    display:flex;
    background-color: transparent;
    font-size: 24px;
    border: none;
    padding: 10px;
    cursor: pointer;
    :focus{
        outline: none;
    }
    :hover {
        transform: scale(1.2);
        transition-duration: 1s;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH3};
        
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH3};
        
    }
`

const SelectOption = styled.select`
    border:none;
    :focus {
        outline: none;
    }
`

const customStyles = {
    overlay: {
        background: "rgba(190, 195, 190, 0.5)",
        opacity: "0.98",
        
    },
    content: {
        zIndex: "1",
        height: "100px",
        margin: "0 auto",
    
    },
  };
  


function Search () {
    const navigate = useNavigate();
    const [open,setOpen] = useState(false);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit =(data)=>{
        reset();
        closeModal();
        navigate('/search' , {state : { searchItem : `${data.find}` , searchOption : `${data.option}`}});
    }
    function closeModal(){
        setOpen(false);
    }
    const openSearch = () =>{
        setOpen(true)
    }
    return(
        <MobileSearch>
            <SearchBtn onClick={openSearch}><FaSearch/></SearchBtn>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <SearchDiv>
                    <SearchForm onSubmit={handleSubmit(onSubmit)}>
                        <SelectOption {...register("option")}>
                            <option value="통합검색">통합검색</option>
                            <option value="작성자">작성자</option>
                            <option value="글제목">글제목</option>
                        </SelectOption>
                        <SearchInput {...register("find", {required:true})}/>
                        <FaSearch style={{width:"30%", fontSize:"20px", marginRight:"5px"}} onClick={handleSubmit(onSubmit)}/>
                    </SearchForm>
                </SearchDiv>
            </Modal>
        </MobileSearch>
    )
}

export default Search