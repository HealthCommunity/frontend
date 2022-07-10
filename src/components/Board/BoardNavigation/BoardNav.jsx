import {LeftBtn,LeftBtnLogo,LeftBtnSummary,LeftBtnSummaryH4,LeftBtnSummaryH5,LeftDivArrow} from './BoardNavStyle'
import { MdArrowForwardIos } from "react-icons/md";
import { GiMuscleUp,GiThreeFriends} from "react-icons/gi";
import { BsClipboard} from "react-icons/bs";
function BoardNav({border,style,click,name,summary}){
    return(
        <LeftBtn border={border} onClick={click} style={style}>
            <LeftBtnLogo>
            {name=== "운동 게시판" ? <GiMuscleUp/> :name==="3대 운동 게시판" ? <GiThreeFriends/> : <BsClipboard/> }
            </LeftBtnLogo>
            <LeftBtnSummary>
                <LeftBtnSummaryH4>
                    {name}
                </LeftBtnSummaryH4>
                <LeftBtnSummaryH5>
                    {summary}
                </LeftBtnSummaryH5>
            </LeftBtnSummary>
            <LeftDivArrow>
                <MdArrowForwardIos/>
            </LeftDivArrow>
        </LeftBtn>
    )
}

export default BoardNav