import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "@/styles/GlobalStyle";
import { AlertContextProvider } from "@/contexts/AlertContext";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import AuthGuard from "@/component/auth/AuthGuard";

const queryClient = new QueryClient();

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<RecoilRoot>
				<QueryClientProvider client={queryClient}>
					<Layout>
						<GlobalStyle />
						<AlertContextProvider>
							<AuthGuard>
								<Component {...pageProps} />
							</AuthGuard>
						</AlertContextProvider>
					</Layout>
				</QueryClientProvider>
			</RecoilRoot>
		</SessionProvider>
	);
}
