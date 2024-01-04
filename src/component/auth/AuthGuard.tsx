import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/remote/firebase";
import { useSetRecoilState } from "recoil";
import { userAtom } from "@/atoms/user";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
	const [authorize, setAuthorize] = useState<boolean>(false);
	const setUser = useSetRecoilState(userAtom);
	onAuthStateChanged(auth, (user) => {
		console.log(user);
		if (user) {
			setUser({
				uid: user.uid,
				email: user.email ?? "",
			});
		} else {
			setUser(null);
		}
		setAuthorize(true);
	});

	if (!authorize) {
		<>인증안됨</>;
	}
	return <>{children}</>;
}
