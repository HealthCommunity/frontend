import { atom } from "recoil";

export const isDarkAtom = atom({
    key: "isDark",
    default: false,
});

export const isLogin = atom({
    key: "isLogin",
    default: false,
});
