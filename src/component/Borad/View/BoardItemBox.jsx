import styled from "styled-components";

export default function BoardItemBox({
    id,
    title,
    createdDate,
    nickname,
    view,
}) {
    return (
        <BoardItem>
            <ItemArea>
                <ItemImgGroup></ItemImgGroup>
                <ItemInfoGroup>
                    <ItemInfoTitle>{title}</ItemInfoTitle>
                    <ItemInfo>
                        <ItemInfoDesc>
                            <ItemInfoSumnail></ItemInfoSumnail>
                            <ItemInfoNicname>{nickname}</ItemInfoNicname>
                            <ItemInfoText>덧글</ItemInfoText>
                            <ItemInfoText>{view}</ItemInfoText>
                            <ItemInfoText>좋음</ItemInfoText>
                        </ItemInfoDesc>
                    </ItemInfo>
                </ItemInfoGroup>
            </ItemArea>
        </BoardItem>
    );
}

const BoardItem = styled.div`
    width: 325px;
    height: 346px;
    background: #ffffff;
    box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
`;

const ItemArea = styled.div`
    width: 300px;
    height: 250px;
    margin: 0 auto; /*수정 : margin-top 안먹음*/
`;

const ItemImgGroup = styled.div`
    width: 300px;
    height: 250px;
    background: #f4a3a3;
`;

const ItemInfoGroup = styled.div`
    width: 300px;
    background: #f18686;
`;

const ItemInfoTitle = styled.div`
    width: 300px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
`;

const ItemInfo = styled.div`
    display: flex;
    background-color: teal;
`;

const ItemInfoDesc = styled.div``;

const ItemInfoSumnail = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #d9d9d9;
    border-radius: 50%;
`;

const ItemInfoNicname = styled.span`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #222222;
`;

const ItemInfoText = styled.span`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #aaaaaa;
    margin: 0 16px;
`;
