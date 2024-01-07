import { IUesr } from "@/models/user";
import { atom } from "recoil";
import { v1 } from "uuid";
export const userAtom = atom<IUesr | null>({
	key: `auth/User/${v1()}`,
	default: null,
});
