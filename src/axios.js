import axios from "axios";

export default async function getAxiosUserData() {
    const API_URL = "";
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
