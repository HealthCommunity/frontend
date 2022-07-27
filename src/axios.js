import axios from "axios";

export default async function getAxiosUserData() {
    const API_URL = "http://54.166.132.169:8080";
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// 지금 JOIN API가 QueryString으로 받고 있는 것 같은데요,
// 나중에 비밀번호같은 경우 암호화해서 보내야하기 때문에 DATA로 받도록 바꾸는 게 좋을 것 같아요
