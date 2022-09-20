// recoil ( 상태관리 )
import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
