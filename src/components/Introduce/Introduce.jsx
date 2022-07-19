import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IntroduceBtn = styled.div`
    background-color: transparent;
    font-size: 36px;
    cursor: pointer;

    :focus{
        outline: none;
    }
    :hover {
        transform: scale(1.2);
        transition-duration: 1s;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH2};
        
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH2};
        
    }
`

function Introduce(){
    return(
        <IntroduceBtn>
              <Link to="/introduce"><IoIosPeople/></Link>
        </IntroduceBtn>
    )
}

export default Introduce