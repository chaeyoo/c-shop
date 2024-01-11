import { useRouter } from "next/router";

export default function ProductDetail() {
    const {query} = useRouter();
    console.log('query.slug::', query.slug);
    return <>
        상품 상세 페이지
    </>
}