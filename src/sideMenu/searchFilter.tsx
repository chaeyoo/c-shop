import { Spacing } from "@/component/spacing/Spacing";
import { Text } from "@/component/text/Text";
import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";

const Input = styled.input`
	padding: 2px 7px;
	font-size: 10px;
	height: 30px;
	font-weight: 100;
	border: 1px solid ${colors.grey};
	width: 77%;
	box-sizing: border-box;	
	&:focus {
		outline: none;
		border-color: ${colors.purple};
	}
}
`;

const ApplyButton = styled.button`
	font-size: 11px;
	width: 18%;
	background-color: ${colors.grey};
	margin-top: 2px;
	height: 30px;
`;

export default function SearchFilter() {
	return (
		<>
			<Text typography="t6" bold>
				결과 내 재검색
			</Text>
			<Spacing direction="vertical" size={10} />
			<Input />
			<ApplyButton>검색</ApplyButton>
		</>
	);
}
