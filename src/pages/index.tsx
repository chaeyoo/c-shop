import Slideshow from "@/component/slides/Slideshow";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
	const {data} = useSession();
	console.log(data)
	const [slideData, setSlideData] = useState<any[]>([
		{ image: "https://picsum.photos/id/235/500/600" },
		{ image: "https://picsum.photos/id/227/500/600" },
		{ image: "https://picsum.photos/id/177/500/600" },
		{ image: "https://picsum.photos/id/217/500/600" },
		{ image: "https://picsum.photos/id/229/500/600" },
	]);

	return <Slideshow slides={slideData} />;
}
