import { CgChevronRight } from "react-icons/cg"
import { Link } from "react-router-dom"
import styled from "styled-components"

const HomeCategoryTitle = styled.div`
    display: flex;
    width:200px;
    padding: 10px 20px;
    margin: 20px;
    font: bold;
    font-size: 24px;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
    }
    @media all and (min-width:480px) and (max-width:767px) {
        padding: 0;

    } 
    @media all and (max-width:479px) {
        padding: 0;
    }
`

function HomeStyle({homeitem , homevalue}){
    return (
        <HomeCategoryTitle>
            <Link to={`/${homeitem}`}>{homevalue}<CgChevronRight /></Link>
        </HomeCategoryTitle>
    )
}
export default HomeStyle