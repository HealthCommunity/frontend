import styled from 'styled-components'
import {BannerDiv,BannerLeft,BannerRight,BannerRightItemTitle,BannerRightItem} from './BoardSliderStyle'
const ImgStyle =styled.img`
    cursor: pointer;
    border-radius: ${(props)=>props.theme.radiusSize50};
`
function BoardSliderItem ({color ,url,urlname,urlimage, title,summary}) {
    return (
            <BannerDiv color={color}>
                    <BannerLeft>
                        <a href={`${url}`} target="_blank" rel="noreferrer">{urlname}</a>
                        {urlimage !== undefined && <ImgStyle src={`${urlimage}`}/>}
                    </BannerLeft>
                <BannerRight>
                    <BannerRightItemTitle>{title}</BannerRightItemTitle>
                    <BannerRightItem>
                       {summary}
                    </BannerRightItem>
                </BannerRight>
            </BannerDiv>
    )
}

export default BoardSliderItem