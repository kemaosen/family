import { defineComponent } from "vue"
import GalleryView from "../components/gallery/GalleryView"
import imgsData from "../components/gallery/imgsdata.json"

const imgInfos = imgsData.map((img: any) => ({
  ...img,
  url: new URL("../imgs/" + img.filename, import.meta.url).href,
}))

const Index = defineComponent({
  name: "Index",
  setup() {
    return () => <GalleryView images={imgInfos} />
  },
})

export default Index
