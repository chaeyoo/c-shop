import "@/styles/globals.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import Layout from "@/component/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "@/styles/GlobalStyle";
import { AlertContextProvider } from "@/contexts/AlertContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<GlobalStyle />
				<AlertContextProvider>
					<Component {...pageProps} />
				</AlertContextProvider>
			</Layout>
		</QueryClientProvider>
	);
}
