import { defineComponent } from "vue"
import GalleryView from "../../components/gallery/GalleryView"
import imgsData from "./image.json"

const imgInfos = imgsData.map((img: any) => ({
  ...img,
  url: new URL("./image/" + img.filename, import.meta.url).href,
}))

const TianTian = defineComponent({
  name: "TianTian",
  setup() {
    return () => <GalleryView images={imgInfos} />
  },
})

export default TianTian
