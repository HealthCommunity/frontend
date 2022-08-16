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
                console.log("useGetUserData의 에러", error);
            });
    }, []);

    return [userData, reFetch];
}
