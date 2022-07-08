import styled from "styled-components";
export const NavDiv = styled.div`
    width: 100%;
    height: 100px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.navBgColor};
    z-index: 10;
    opacity: 0.98;
    @media all and (min-width: 480px) and (max-width: 767px) {
        justify-content: center;
        flex-direction: column;
        height: ${(props) => (props.heigthchange ? "250px" : "100px")};
    }
    @media all and (max-width: 479px) {
        justify-content: center;
        flex-direction: column;
        height: ${(props) => (props.heigthchange ? "250px" : "100px")};
    }
`;

export const NavLogo = styled.div`
    display: flex;
    width: 30%;
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
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 30px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        flex-direction: column;
        width: 100%;
        display: ${(props) => (props.displaychange ? "" : "none")};
        margin: 0 auto;
    }
    @media all and (max-width: 479px) {
        flex-direction: column;
        width: 100%;
        display: ${(props) => (props.displaychange ? "" : "none")};
        margin: 0 auto;
    }
`;

export const NavItem = styled.div`
    margin: 0px 10px;
    padding: 10px;
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontSizeH5};
    font-weight: 600;
    :hover {
        transition-duration: 1s;
        transform: translateY(-5px);
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 10px;
        :hover {
            cursor: pointer;
            background-color: ${(props) => props.theme.colorPointPupple300};
        }
    }
    @media all and (max-width: 479px) {
        font-size: 10px;
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
export const NavToggleTwo = styled(NavItem)`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: ${(props) => props.theme.fontSizeH2};
    cursor: pointer;
    display: flex;
    :hover {
        transform: scale(1.2);
        transition-duration: 1s;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        display: none;
    }
    @media all and (max-width: 479px) {
        display: none;
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
        width: 70%;
    }
    @media all and (max-width: 479px) {
        display: flex;
        width: 70%;
    }
`;
export const ToggleMenu = styled.div`
    display: flex;
`;
