import { defineComponent } from "vue"
import GalleryView from "../../components/gallery/GalleryView"
import imgsData from "./image.json"

const imgInfos = imgsData.map((img: any) => ({
  ...img,
  url: new URL("./image/" + img.filename, import.meta.url).href,
}))

const Hu = defineComponent({
  name: "Hu",
  setup() {
    return () => <GalleryView images={imgInfos} />
  },
})

export default Hu
