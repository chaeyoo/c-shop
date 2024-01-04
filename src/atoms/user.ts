import { IUesr } from "@/models/user";
import { atom } from "recoil";

export const userAtom = atom<IUesr | null>({
	key: "auth/User",
	default: null,
});
