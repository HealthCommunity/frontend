import axios from "axios";
import { atom, selector } from "recoil";

export const isLogin = atom({
    key: "isLogin2",
    default: false,
});

export const currentUserState = selector({
    key: "currentUserState",
    get: async ({ get }) => {
        console.log(1);
        get(isLogin);
        console.log(2);
        try {
            const response = await axios.get("/api/user");
            console.log(3);
            return response.data.data;
        } catch {
            console.log(4);
            return null;
        }
    },
});
