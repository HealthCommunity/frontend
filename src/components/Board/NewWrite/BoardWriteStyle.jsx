import styled from "styled-components";
export const PostWrapper = styled.div`
  max-width: 1040px;
  width: 1024px;
  color: #333;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const PostTitleTitle = styled.input`
  width: 100%;
  height: 56px;
  min-height: 56px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
  :focus {
    outline: none;
  }
`;

export const PostLabel = styled.label`
  border: 1px solid #0066ff;
  border-radius: 60px;
  color: #0066ff;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: "Pretendard";
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
  border-radius: 40px;
  margin: 0px 10px;
  border: 1px solid #eeeeee;
  background-color: transparent;
  text-align: center;
  font-family: "Pretendard";
`;
