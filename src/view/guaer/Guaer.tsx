import { defineComponent } from "vue"
import GalleryView from "../../components/gallery/GalleryView"
import imgsData from "./imgGuaEr.json"

const imgInfos = imgsData.map((img: any) => ({
  ...img,
  url: new URL("./image/" + img.filename, import.meta.url).href,
}))

const Guaer = defineComponent({
  name: "Guaer",
  setup() {
    return () => <GalleryView images={imgInfos} />
  },
})

export default Guaer
