import {IoPersonOutline} from "react-icons/io5";
import { useRouter } from 'next/router'

export default function Mypage() {
    const router = useRouter();
    return <>
        <div style={{display: "flex", margin: "10px 20px"}}>
            <div style={{background: "#999", margin: "auto 0", borderRadius: "50px"}}>
                <IoPersonOutline  size={50} color={"gray"}/>
            </div>
            <div style={{margin: "10px 20px"}}>
                <button
                    style={{
                        border: "1px solid gray",
                        width: "70px"
                    }}
                    onClick={() => {router.push("/signin")}}
                >
                    로그인
                </button>
                <p>주문/혜택 등의 정보를 빠르게<br/> 확인할 수 있습니다.</p>
            </div>
        </div>

        <div style={{display: "flex", justifyContent: "space-around", margin: "10px 20px"}}>
            <p style={{fontSize: "14px"}}>아직 CSHOP 회원이 아니신가요?</p>
            <button style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "3px",
                    border: "1px solid gray",
                    width: "80px",
                    fontSize: "14px"
                }}
                onClick={() => {router.push("/signup")}}
            >
                회원가입
            </button>
        </div>
    </>
}