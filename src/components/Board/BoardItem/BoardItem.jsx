import {RightDivItem,RightItemTitle,RightItemSeparate,RightItemComments,RightItemViews} from './BoardItemStyle'
import Animal from "react-animals";
import {GoComment , GoEye} from 'react-icons/go';
import { Link } from 'react-router-dom';

function BoardItem ({item,color,value}){
    return (
        <Link to={`./${value}/${item.id}`}>
            <RightDivItem >
                <Animal size="100px" color={color} circle dance/>
                <RightItemTitle>{item.title}</RightItemTitle>
                <RightItemSeparate>
                    <RightItemComments><GoComment style={{marginRight:"3px"}}/>{item.comments}</RightItemComments>
                    <RightItemViews><GoEye style={{marginRight:"3px"}}/>{item.views}</RightItemViews>
                </RightItemSeparate>
            </RightDivItem>
        </Link>
    )
}
export default BoardItem