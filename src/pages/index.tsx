import Loader from "@/component/loader/Loader";
import Slideshow from "@/component/slides/Slideshow";
import {useState} from "react";
import {css} from "@emotion/react";
import styled from "@emotion/styled";

export default function Home() {
    const bold = css`
    font-weight: bold`;
    const containerStyles = css`
        background-color: pink;
        ${bold};
        width: 200px;
        height: 200px;
    `

    const Button = styled.button`
        width: 200px;
        height: 100px;
        background-color: aquamarine;
        ${bold};
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
              <Slideshow slides={slideData} />
              <div css={containerStyles}>
                  까꿍
                    <Button>스타일버튼</Button>
              </div>
          </div>


  )
}
