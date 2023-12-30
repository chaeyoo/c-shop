import { Button } from "@/component/button/Button";
import Checkbox from "@/component/checkbox/Checkbox";
import { Input } from "@/component/input/Input";
import { TextField } from "@/component/input/TextField";
import { Text } from "@/component/text/Text";
import { useAlertContext } from "@/contexts/AlertContext";
import { css } from "@emotion/react";

export default function Events() {
	const { open } = useAlertContext();
	const bold = css`
		font-weight: bold;
	`;
	const containerStyles = css`
		background-color: pink;
		${bold};
		width: 200px;
		height: 200px;
	`;
	return (
		<>
			이벤트가 될 샘플 페이지
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
			
			
		</>
	);
}
