import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
			<style>
                    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap");
                </style>
			</Head>
			<body>
				<Main />
				<div id="root-portal" />
				<NextScript />
			</body>
		</Html>
	);
}
