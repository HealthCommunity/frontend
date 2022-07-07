import styled from "styled-components"
export const SearchDiv= styled.div`
    margin: 0 auto;
    padding: 150px 0px 50px 0px;
    width:25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    @media all and (min-width:480px) and (max-width:767px) {
        width:65%;
    }
    @media all and (max-width:479px) {
        width:65%;
    }
`
export const SearchForm = styled.form`
    color: ${(props)=>props.theme.fontColor};
    display: flex;
    padding: 2px;
    font-size: ${(props)=>props.theme.fontSizeH4};
    height: 40px;
    border: 1px solid currentColor;
    border-radius: ${(props)=>props.theme.radiusSize20};
    margin: 0 0 30px;
    svg {
        :hover{
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  margin: 0;
  width:100%;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
  :focus{
    font-size: ${(props)=>props.theme.fontSizeH4};
    outline: none;
  }
`
