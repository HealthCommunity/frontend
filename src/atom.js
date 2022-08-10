import { atom } from "recoil";

export const isDarkAtom = atom({
    key: "isDark",
    default: false,
});

export const isLogin = atom({
    key: "isLogin",
    default: false,
});

export const userState = atom({
    key: "userState",
    default: false,
});
