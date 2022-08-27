import axios from "axios";

export default function userLogout({ onError, onSuccess }) {
  return axios.post("/api/user/logout").then(onSuccess).catch(onError);
}
