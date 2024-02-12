import { Spacing } from "@/component/spacing/Spacing";
import { Text } from "@/component/text/Text";

export default function SearchFilter() {
	return (
		<>
			<Text typography="t6" bold>
				결과 내 재검색
			</Text>
			<Spacing direction="vertical" size={10} />
		</>
	);
}
