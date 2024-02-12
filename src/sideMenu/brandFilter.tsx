import { Flex } from "@/component/flex/Flex";
import { Spacing } from "@/component/spacing/Spacing";
import { Text } from "@/component/text/Text";
import { brand } from "@/mock/brand";

export default function BrandFilter() {
	return (
		<>
			<Text typography="t6" bold>
				브랜드
			</Text>
			<Spacing direction="vertical" size={10} />
			{brand.map((v, i) => (
				<div key={i}>
					<Flex direction="column">
						<Text typography="t7" bold>
							{v.value}
						</Text>
						<Text typography="t7">{v.label}</Text>
					</Flex>
				</div>
			))}
		</>
	);
}
