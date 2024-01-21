import { Button } from "@/component/button/Button";
import withAuth from "@/component/hoc/withAuth";
import { Spacing } from "@/component/spacing/Spacing";
import useUser from "@/hooks/auth/useUser";
import styled from "@emotion/styled";
import { signOut } from "next-auth/react";

import { useRouter } from "next/router";

const LoginContainer = styled.div`
	margin: 20px 30px;
`;

function Mypage() {
	const router = useRouter();
	const user = useUser();

	return (
		<div>
			<div>마이페이지</div>
			<Spacing size={50} />
			<LoginContainer>
				<Button
					onClick={() => signOut({ callbackUrl: "/" })}
					full
					size="large"
					color="purple"
					borderRadius
				>
					로그아웃
				</Button>
			</LoginContainer>
		</div>
	);
}

export default withAuth(Mypage);
