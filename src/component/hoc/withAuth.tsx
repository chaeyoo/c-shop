import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

type WithAuthComponent<P> = React.FunctionComponent<P> & {
	getLayout?: (page: React.ReactElement) => React.ReactNode;
};

function withAuth<P = {}>(WrappedComponent: React.ComponentType<P>): WithAuthComponent<P>{
	return function AuthenticatedComponent(props: P) {
		const { data, status } = useSession();
		const router = useRouter();

		if (status !== "loading" && data == null) {
			router.replace("/signin");
			return null;
		}
		return <WrappedComponent {...(props as any)} />;
	};
}

export default withAuth;
