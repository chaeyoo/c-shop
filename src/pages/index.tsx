import Loader from "@/component/loader/Loader";
import Slideshow from "@/component/slides/Slideshow";
import {useState} from "react";

export default function Home() {
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
          </div>
  )
}
