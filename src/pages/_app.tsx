import "@/styles/globals.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import Layout from "@/component/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "@/styles/GlobalStyle";
import { AlertContextProvider } from "@/contexts/AlertContext";
import AuthGuard from "@/component/auth/AuthGuard";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
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
	);
}
