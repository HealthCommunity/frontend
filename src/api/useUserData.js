import axios from "axios";
import { selector } from "recoil";

export const currentUserState = selector({
    key: "currentUserState",
    get: async ({ get }) => {
        try {
            const response = await axios.get("/api/user");
            console.log("useUSerData 그 자체 함수 실행", response.data.data);
            return response.data.data;
        } catch {
            return null;
        }
    },
});
