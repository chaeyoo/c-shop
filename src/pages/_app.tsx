import '@/styles/globals.css'

import type {AppProps} from 'next/app'
import Layout from "@/component/Layout";
import {QueryClient, QueryClientProvider} from "react-query";
import GlobalStyle from "@/styles/GlobalStyle";

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <GlobalStyle />
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>);
}
