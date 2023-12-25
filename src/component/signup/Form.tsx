interface IForm {

}
export default function Form(props: IForm) {
    return <div>
        <p>이메일</p>
        <input type="text"/>
        <p>비밀번호</p>
        <input type="password"/>
        <p>비밀번호 확인</p>
        <input type="password"/>
        <button>
            회원가입
        </button>
    </div>
}