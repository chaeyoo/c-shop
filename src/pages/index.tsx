import Loader from "@/component/loader/Loader";
import Slideshow from "@/component/slides/Slideshow";
import { useState } from "react";
import { css } from "@emotion/react";
import { Text } from "@/component/text/Text";
import { Button } from "@/component/button/Button";
import { Input } from "@/component/input/Input";
import { TextField } from "@/component/input/TextField";
import Alert from "@/component/alert/Alert";
import { useAlertContext } from "@/contexts/AlertContext";
import { Flex } from "@/component/flex/Flex";

export default function Home() {
	const [slideData, setSlideData] = useState<any[]>([
		{ image: "https://picsum.photos/id/235/500/600" },
		{ image: "https://picsum.photos/id/227/500/600" },
		{ image: "https://picsum.photos/id/177/500/600" },
		{ image: "https://picsum.photos/id/217/500/600" },
		{ image: "https://picsum.photos/id/229/500/600" },
	]);

	return <Slideshow slides={slideData} />;
}
