import React from "react";
import styled from "styled-components";
import { ContentContainer, ContainerTitle } from "../Menu/MenuStyle";
import DescTextInput from "../Form/DescTextInput";
import Modal from "../Asset/Modal";

const ProfileFrom = styled.section`
    padding: 20px;
    min-height: 200px;
    margin-bottom: 72px;
`;

const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const InputGroup = styled.div`
    width: 100%;
    margin-left: auto;
    margin-bottom: 1rem;
    text-align: left;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    font-weight: 700;
    background-color: #9e9a9a;
    color: white;
    cursor: pointer;
`;

const Label = styled.label`
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 14px;
`;

export default function ContentUserModify() {
    return (
        <ContentContainer>
            <ProfileFrom>
                <ContainerTitle>회원정보 변경</ContainerTitle>
                <Form>
                    <InputGroup>
                        <Label>닉네임</Label>
                        <DescTextInput
                            type="text"
                            name="nickname"
                            placeholder="닉네임"
                            required
                        />
                    </InputGroup>
                    <Button type="submit">{"정보변경"}</Button>
                </Form>
            </ProfileFrom>
        </ContentContainer>
    );
}
