import styled from "styled-components";

const MyInfo = styled.section`
    padding: 20px;
    min-height: 200px;
    margin-bottom: 72px;
    box-shadow: 0 4px 16px 0 rgb(126 155 255 / 30%);
`;

const MyInfoTitle = styled.h3`
    font-weight: 700;
    font-size: 16px;
    display: inline-block;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 32px 0;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            display: block;
        }

        b {
            font-size: 20px;
            padding: 0 12px;
        }
    }
`;

export default function ContentMyinfoMain({ data, children }) {
    return (
        <MyInfo>
            <MyInfoTitle>내 프로필</MyInfoTitle>
            {children}
            <Info>
                {Object.keys(data).map((name) => (
                    <div>
                        <span>{name}</span>
                        <b>{data[name]}kg</b>
                    </div>
                ))}
            </Info>
        </MyInfo>
    );
}
