import axios from "axios";

export default async function API() {
    //const API_URL =
    //"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
    const API_URL = "http://54.166.132.169:8080/api/user/1";
    try {
        const response = await axios.get(API_URL);
        console.log("api", response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
