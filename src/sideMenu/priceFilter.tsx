import { Spacing } from "@/component/spacing/Spacing";
import { Text } from "@/component/text/Text";

export default function PriceFilter() {
	return (
		<>
			<Text typography="t6" bold>
				가격
			</Text>
			<Spacing direction="vertical" size={10} />
		</>
	);
}
