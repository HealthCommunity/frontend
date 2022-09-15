// react hook , react
import { useCallback } from "react";

// recoil ( 상태관리 )
import { atom, useRecoilState } from "recoil";

// react library
import axios from "axios";

// styled-components , Style Files

// Components

// Icons , Images

// Share , Utils

const currentUserData = atom({
  key: "currentUserData",
  default: null,
});

export default function useUserData() {
  const [userData, setUserData] = useRecoilState(currentUserData);
  const reFetch = useCallback(() => {
    axios
      .get(`/api/user`)
      .then(({ data }) => {
        setUserData(data.data);
      })
      .catch((error) => {
        setUserData(null);
      });
  }, [setUserData]);

  return [userData, reFetch];
}
