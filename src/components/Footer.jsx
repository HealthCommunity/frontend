import styled from "styled-components";

const FootDiv = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.footBgColor};
`

const FootItem = styled.div`
    width: 80px;
    height:80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border-radius: 50%;
`

function Footer() {
    return (
        <FootDiv>
            <FootItem>
                노션링크
            </FootItem>
            <FootItem>
                깃링크
            </FootItem>
        </FootDiv>
    )
}

export default Footer;