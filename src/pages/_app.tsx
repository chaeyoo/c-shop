import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "@/styles/GlobalStyle";
import { AlertContextProvider } from "@/contexts/AlertContext";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import AuthGuard from "@/component/auth/AuthGuard";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

const queryClient = new QueryClient();

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<SessionProvider session={session}>
			<RecoilRoot>
				<QueryClientProvider client={queryClient}>
					<Layout>
						<GlobalStyle />
						<AlertContextProvider>
							<AuthGuard>
								{getLayout(<Component {...pageProps} />)}
							</AuthGuard>
						</AlertContextProvider>
					</Layout>
				</QueryClientProvider>
			</RecoilRoot>
		</SessionProvider>
	);
}
