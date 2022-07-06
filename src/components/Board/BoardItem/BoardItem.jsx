import {RightDivItem,RightItemTitle,RightItemSeparate,RightItemComments,RightItemViews} from './BoardItemStyle'
import Animal from "react-animals";
import {GoComment , GoEye} from 'react-icons/go';

function BoardItem ({item}){
    return (
        <RightDivItem >
            <Animal size="100px" color="#6C5DD3" circle dance/>
            <RightItemTitle>{item.title}</RightItemTitle>
            <RightItemSeparate>
                <RightItemComments><GoComment style={{marginRight:"3px"}}/>{item.comments}</RightItemComments>
                <RightItemViews><GoEye style={{marginRight:"3px"}}/>{item.views}</RightItemViews>
            </RightItemSeparate>
        </RightDivItem>
    )
}
export default BoardItem