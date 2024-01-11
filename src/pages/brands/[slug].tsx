import { useRouter } from "next/router";

export default function Brands() {
    const {query} = useRouter();
    console.log('query.slug::', query.slug);
    return <>
        브랜드 페이지
    </>
}