// styled-components , Style Files
import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1040px;
  width: 1024px;
  margin: 0 auto;
  color: #333;
`;

export const PostTitleTitle = styled.input`
  width: 100%;
  height: 56px;
  min-height: 56px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
  color: #333;
  :focus {
    outline: none;
  }
`;

export const PostLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  border: 1px solid #0066ff;
  border-radius: 60px;
  padding: 15px 30px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
  font-family: "Pretendard";
  color: #0066ff;
  cursor: pointer;
  :hover {
    background-color: #0066ff;
    color: white;
    img {
      background-color: white;
    }
  }
`;

export const FileList = styled.div`
  display: flex;
  align-items: center;
`;

export const FileBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eeeeee;
  margin-top: 20px;
  padding-top: 20px;
  margin-bottom: 50px;
`;

export const FileBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 0px 10px;
  border-radius: 40px;
  border: 1px solid #eeeeee;
  text-align: center;
  font-family: "Pretendard";
  background-color: transparent;
  cursor: pointer;
`;
