import {FootDiv,FootItem} from './FooterStyle'

function Footer({color}) {
    return (
        <FootDiv style={{backgroundColor:color}}>
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