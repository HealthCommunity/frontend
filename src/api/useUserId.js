import axios from "axios";
import { selector } from "recoil";

export const useUserId = selector({
    key: "userState",
    get: async () => {
        try {
            const response = await axios.get("/api/user");
            return response.data.data;
        } catch {
            return null;
        }
    },
});

//해야할것
//데이터 axios 가져오기
//예외처리
//상태변경하기
//유즈이펙트
//익스폴트하기
