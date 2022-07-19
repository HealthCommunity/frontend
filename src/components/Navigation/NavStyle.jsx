import styled from "styled-components";
export const NavDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    top: 0;
    background-color: ${(props) => props.theme.navBgColor};
    opacity: 0.98;
    @media all and (min-width: 480px) and (max-width: 767px) {
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;
        height: ${(props) => (props.heigthchange ? "200px" : "100px")};
    }
    @media all and (max-width: 479px) {
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        height: ${(props) => (props.heigthchange ? "200px" : "100px")};
    }
`;

export const NavLogo = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
    @media all and (min-width: 480px) and (max-width: 767px) {
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
    }
    @media all and (max-width: 479px) {
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
    }
`;

export const NavItemDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:100px;
    margin: 0px 30px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        
        width: 100%;
        margin: 0 auto;
    }
    @media all and (max-width: 479px) {
        
        width: 100%;
        margin: 0 auto;
    }
`;

export const NavItem = styled.div`
    padding: 10px;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizeH5};
    font-weight: 600;
    cursor: pointer;
    :hover {
        transition-duration: 1s;
        background-color: ${(props) => props.theme.navBgColor};
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH7};
        :hover {
            cursor: pointer;
            background-color: ${(props) => props.theme.colorPointPupple300};
        }
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH7};
        :hover {
            cursor: pointer;
            background-color: ${(props) => props.theme.colorPointPupple300};
        }
    }
`;

export const NavToggle = styled(NavItem)`
    display: none;
    :hover {
        transform: scale(1.2);
        transition-duration: 1s;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        border-radius: 50%;
        font-size: ${(props) => props.theme.fontSizeH3};
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
    }
    @media all and (max-width: 479px) {
        border-radius: 50%;
        font-size: ${(props) => props.theme.fontSizeH3};
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
    }
`;
export const NavToggleTwo = styled.div`
    font-size: ${(props) => props.theme.fontSizeH4};
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding: 0.375rem 1.5rem;
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH4};
        
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH4};
    }
    :hover{
        background-color: #ebebeb;
    }
`;

export const NavHamberDiv = styled.div`
    display: none;
    cursor: pointer;
    :hover {
        transform: scale(1.2);
        transition-duration: 1s;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        display: flex;
        
    }
    @media all and (max-width: 479px) {
        display: flex;
        
    }
`;
export const ToggleMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
