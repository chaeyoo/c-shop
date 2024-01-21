import { useSession } from "next-auth/react";
import Loader from "../loader/Loader";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
	const { data, status } = useSession();

	if (status === "loading") {
		return <Loader basic/>;
	}

	return <>{children}</>;
}
