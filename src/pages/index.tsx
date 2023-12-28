import Loader from "@/component/loader/Loader";
import Slideshow from "@/component/slides/Slideshow";
import {useState} from "react";
import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {Text} from "@/component/text/Text";
import {Button} from "@/component/button/Button";

export default function Home() {
    const bold = css`
    font-weight: bold`;
    const containerStyles = css`
        background-color: pink;
        ${bold};
        width: 200px;
        height: 200px;
    `

    const [slideData, setSlideData] = useState<any[]>(
        [
            {"image": "https://picsum.photos/id/237/500/600"},
            {"image": "https://picsum.photos/id/227/500/600"},
            {"image": "https://picsum.photos/id/177/500/600"},
            {"image": "https://picsum.photos/id/217/500/600"},
            {"image": "https://picsum.photos/id/229/500/600"},
        ])
  return (
          <div>
              <Text typography="t1" display="block">텍쓰트요오</Text>
              <Text typography="t2" display="block" color="blue">텍쓰트요오</Text>
              <Text typography="t3" display="block">텍쓰트요오</Text>
              <Button color={"success"}>클릭하라</Button>
              <Button color={"danger"}>클릭하라</Button>
              <Button color={"success"} primary={true}>클릭하라</Button>
              <Button color={"danger"} primary={true}>클릭하라</Button>
              <Button full={true} primary={true} disabled={true}>클릭하라</Button>
              <Slideshow slides={slideData}/>
              <div css={containerStyles}>
                  까꿍
                    <Button>스타일버튼</Button>
              </div>
          </div>


  )
}
