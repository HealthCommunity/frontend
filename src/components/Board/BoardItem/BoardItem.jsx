import {RightDivItem,RightItemTitle,RightItemSeparate,RightItemComments,RightItemViews} from './BoardItemStyle'
import Animal from "react-animals";
import {GoComment , GoEye} from 'react-icons/go';
import { Link } from 'react-router-dom';

export function BoardItem ({item,color,value}){
    const shortItemTItle = item.title.slice(0,14);
    return (
        <Link to={`./${value}/${item.id}`} style={{margin:"0 auto"}}>
            <RightDivItem >
                <Animal size="100px" color={color} circle dance/>
                <RightItemTitle>{item.title.length <= 14 ? item.title : `${shortItemTItle} ...`}</RightItemTitle>
                <RightItemSeparate>
                    <RightItemComments><GoComment style={{marginRight:"3px"}}/>{item.comments}</RightItemComments>
                    <RightItemViews><GoEye style={{marginRight:"3px"}}/>{item.views}</RightItemViews>
                </RightItemSeparate>
            </RightDivItem>
        </Link>
    )
}

export function SoloBoardItem ({item,color}){
    const shortItemTItle = item.title.slice(0,14);
    return (
        <Link to={`./${item.id}`} style={{margin:"0 auto"}}>
            <RightDivItem >
                <Animal size="100px" color={color} circle dance/>
                <RightItemTitle>{item.title.length <= 14 ? item.title : `${shortItemTItle} ...`}</RightItemTitle>
                <RightItemSeparate>
                    <RightItemComments><GoComment style={{marginRight:"3px"}}/>{item.comments}</RightItemComments>
                    <RightItemViews><GoEye style={{marginRight:"3px"}}/>{item.views}</RightItemViews>
                </RightItemSeparate>
            </RightDivItem>
        </Link>
    )
}