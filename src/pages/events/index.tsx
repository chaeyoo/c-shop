import { userAtom } from "@/atoms/user";
import SideMenu, { ListItem } from "@/bottomSheet/SideMenu";
import { Button } from "@/component/button/Button";
import { Input } from "@/component/input/Input";
import { TextField } from "@/component/input/TextField";
import { Text } from "@/component/text/Text";
import { useAlertContext } from "@/contexts/AlertContext";
import { css } from "@emotion/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { motion, useAnimation } from "framer-motion";

export default function Events() {
	const { open } = useAlertContext();

	// const constrols = useAnimation();
	const [isSideOpen, setIsSideOpen] = useState<boolean>(false);

	const bold = css`
		font-weight: bold;
	`;
	const containerStyles = css`
		background-color: pink;
		${bold};
		width: 200px;
		height: 200px;
	`;
	const user = useRecoilState(userAtom);
	console.log(user[0]?.email);

	const data: ListItem[] = [
		{ name: "1", url: "/private/loans" },
		{ name: "2", url: "/private/cards" },
		{ name: "3", url: "/private/deposits" },
		{ name: "4", url: "/private/services" },
		{ name: "5", url: "/private/services" },
		{ name: "6", url: "/private/services" },
		{ name: "7", url: "/private/services" },
	];

	return (
		<>
			<Text typography="t1">{user[0]?.email}</Text>
			<br />
			이벤트가 될 샘플 페이지
			<Button onClick={() => setIsSideOpen(true)}>검색하기</Button>
			<Text typography="t1" display="block">
				텍쓰트요오
			</Text>
			<Text typography="t2" display="block" color="blue">
				텍쓰트요오
			</Text>
			<Text typography="t3" display="block">
				텍쓰트요오
			</Text>
			<Button color={"success"}>클릭하라</Button>
			<Button color={"danger"}>클릭하라</Button>
			<Button color={"success"} primary={true}>
				클릭하라
			</Button>
			<Button color={"black"} primary={true} borderRadius={true}>
				클릭하라
			</Button>
			<Button full={true} primary={true} disabled={true}>
				클릭하라
			</Button>
			<div style={{ margin: "10px" }}>
				<Input />
				<Input aria-invalid={true} />

				<TextField label={"아이디"} helpMessage="아이디를 입력하라" />
				<TextField
					label={"비밀번호"}
					hasError={true}
					helpMessage="비밀의 번호를 입력하세요."
				/>
			</div>
			<div css={containerStyles}>
				까꿍
				<Button>스타일버튼</Button>
			</div>
			<Button
				onClick={() => {
					open({
						title: "채채퐁",
						description: "짜자자자장",
						onButtonClick: () => {},
						buttonLabel: "버퉁",
					});
				}}
			>
				알러트 열어라
			</Button>
			<SideMenu
				overlaycolor="rgba(0,0,0, 0.4)"
				data={data}
				width={240}
				isSideOpen={isSideOpen}
				setIsSideOpen={setIsSideOpen}
				/* constrols={constrols} */
			/>
			,
		</>
	);
}
