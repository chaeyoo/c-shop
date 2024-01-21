import { Button } from "@/component/button/Button";
import { Flex } from "@/component/flex/Flex";
import { Spacing } from "@/component/spacing/Spacing";
import { Text } from "@/component/text/Text";
import styled from "@emotion/styled";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
	ClientSafeProvider,
	LiteralUnion,
	getProviders,
	signIn,
} from "next-auth/react";
const LoginContainer = styled.div`
	background-color: #fff;
	padding: 20px 30px;
`;
export default function Signin({
	providers,
}: {
	providers: Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider>;
}) {
	return (
		<div>
			<Spacing size={100} />
				<LoginContainer>
					<Flex direction={"column"} align="center">
						<Text typography="t1">
							로그인
						</Text>
						<Spacing size={20} />
						<ul>
							{providers &&
								Object.values(providers).map((provider) => (
									<li key={provider.id}>
										<Button
											onClick={() =>
												signIn(provider.id, {
													callbackUrl: "/",
												})
											}
											color="primary"
											primary
											size="large"
											borderRadius
										>
											{provider.name} LOGIN
										</Button>
									</li>
								))}
						</ul>
					</Flex>
				</LoginContainer>
		</div>
	);
}

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: {
			providers,
		},
	};
}
