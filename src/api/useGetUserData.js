import axios from "axios";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const currentUserData = atom({
    key: "currentUserData",
    default: null,
});

export default function useGetUserData() {
    const [userData, setUserData] = useRecoilState(currentUserData);

    const reFetch = useCallback(() => {
        axios
            .get(`/api/user`)
            .then(({ data }) => {
                setUserData(data.data);
                console.log("useGetUserData의 data", data);
            })
            .catch((error) => {
                setUserData(null);
                console.log(
                    "useGetUserData의 로그인 없어서 회원 데이터 가져오지 못함",
                    error
                );
            });
    }, []);

    return [userData, reFetch];
}
