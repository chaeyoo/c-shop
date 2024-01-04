import { Button } from "@/component/button/Button";
import { Flex } from "@/component/flex/Flex";
import { Text } from "@/component/text/Text";
import useUser from "@/hooks/auth/useUser";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { auth } from "@/remote/firebase";

const LoginContainer = styled.div`
	background-color: #fff;
	padding: 20px 30px;
`;
const Gap = styled.div`
	background-color: #ebebeb;
	height: 10px;
`;

export default function Mypage() {
	const router = useRouter();
	const user = useUser();
	const handleLogout = useCallback(() => {
		signOut(auth);
	}, []);
	if (!user) {
		return (
			<>
				<LoginContainer>
					<Flex direction={"column"}>
						<Text
							typography="t4"
							bold
							onClick={() => {
								router.push("/signin");
							}}
						>
							로그인 {">"}
						</Text>

						<Text typography="t7">
							주문/혜택 등의 정보를 빠르게 <br />
							확인할 수 있습니다.
						</Text>
					</Flex>
				</LoginContainer>
				<Gap />
				<LoginContainer>
					<Flex justify="space-between" align="center">
						<Text bold typography="t7">
							아직 CSHOP 회원이 아니신가요?
						</Text>
						<Button
							color="purple"
							primary
							onClick={() => {
								router.push("/signup");
							}}
						>
							회원가입
						</Button>
					</Flex>
				</LoginContainer>
			</>
		);
	} else {
		return (
			<>
				마이페이지이이이
				<Button onClick={handleLogout}>로그아웃</Button>
			</>
		);
	}
}
