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
