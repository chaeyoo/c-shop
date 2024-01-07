import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/remote/firebase";
import { useSetRecoilState } from "recoil";
import { userAtom } from "@/atoms/user";
import nookies from "nookies";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
	const [authorize, setAuthorize] = useState<boolean>(false);
	const setUser = useSetRecoilState(userAtom);
	onAuthStateChanged(auth, (user) => {
		console.log(user);
		if (user) {
			const token = user.uid;
			nookies.destroy(null, "token");
			nookies.set(null, "token", token, { path: "/" });

			setUser({
				uid: user.uid,
				email: user.email ?? "",
			});
		} else {
			nookies.destroy(null, "token");
			setUser(null);
			return;
		}
		setAuthorize(true);
	});

	if (!authorize) {
		<>인증안됨</>;
	}
	return <>{children}</>;
}
