import Slideshow from "@/component/slides/Slideshow";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
	const { data } = useSession();
	console.log(data);
	const [slideData, setSlideData] = useState<any[]>([
		{
			image: "https://firebasestorage.googleapis.com/v0/b/c-shop-8731f.appspot.com/o/detail_2723767_16908007568938_500.jpg?alt=media&token=a69e4a6f-da7f-4299-abea-dd6e6acee8b1",
		},
		{
			image: "https://firebasestorage.googleapis.com/v0/b/c-shop-8731f.appspot.com/o/detail_2723767_16908007581783_500.jpg?alt=media&token=1f400e67-b928-43b3-a021-01628441acf1",
		},
		{
			image: "https://firebasestorage.googleapis.com/v0/b/c-shop-8731f.appspot.com/o/detail_2723767_16908007597503_500.jpg?alt=media&token=ba0fadb9-e479-4852-9697-89e9a94c6a06",
		},
		{
			image: "https://firebasestorage.googleapis.com/v0/b/c-shop-8731f.appspot.com/o/detail_2723767_16908007617606_500.jpg?alt=media&token=c2189b74-4ca5-430c-97ba-8f21cadc1bc7",
		},
		{
			image: "https://firebasestorage.googleapis.com/v0/b/c-shop-8731f.appspot.com/o/detail_2723767_16908007664703_500.jpg?alt=media&token=2153080e-a763-4f9d-b85d-5677ecc6c532",
		},
	]);

	return <Slideshow slides={slideData} />;
}
