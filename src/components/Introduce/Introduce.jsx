import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IntroduceBtn = styled.div`
    display: flex;
    justify-content: center;
    background-color: transparent;
    margin-bottom: 5px;
    font-size: ${(props) => props.theme.fontSizeH4};
    cursor: pointer;
    :focus{
        outline: none;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH4};
        
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH4};
        
    }
`

function Introduce(){
    return(
        <Link to="/introduce">
        <IntroduceBtn>
              <FaUsers style={{margin: "0" , padding: "0px 10px"}}/>
              About Us
        </IntroduceBtn>
        </Link>
    )
}

export default Introduce