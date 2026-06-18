import { defineComponent, ref, onMounted, nextTick, type PropType } from "vue"
import ImageCard from "./ImageCard"
import Controller from "./Controller"
import type { FigureArrange, ImageInfo } from "./ImageCard"
import "./gallery.scss"

const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)
const getRandomDeg = () => ((Math.random() > 0.5 ? "" : "-") + Math.ceil(Math.random() * 30))

const GalleryView = defineComponent({
  name: "GalleryView",
  props: {
    images: { type: Array as PropType<ImageInfo[]>, required: true },
  },
  setup(props) {
    const figureArrangeArr = ref<FigureArrange[]>([])
    const initialized = ref(false)
    const constantPos = ref({
      centerPos: { left: 0, top: 0 },
      horizontalRange: { leftSectionX: [0,0], rightSectionX: [0,0], y: [0,0] },
      verticalRange: { x: [0,0], topSectionY: [0,0] },
    })

    const reArrangFigure = (centerIndex: number) => {
      const { centerPos, horizontalRange, verticalRange } = constantPos.value
      const { leftSectionX, rightSectionX, y: hY } = horizontalRange
      const arr = [...figureArrangeArr.value]
      if (arr.length === 0) return
      arr.splice(centerIndex, 1)
      const newCenter: FigureArrange = { pos: { ...centerPos }, rotate: 0, isReverse: false, isCenter: true }
      const topArrNum = Math.floor(Math.random() * 2)
      const topIdx = Math.floor(Math.random() * (arr.length - topArrNum))
      const figureTopArr = arr.splice(topIdx, topArrNum)
      figureTopArr.forEach((_, i) => {
        figureTopArr[i] = {
          pos: { left: getRandom(verticalRange.x[0], verticalRange.x[1]), top: getRandom(verticalRange.topSectionY[0], verticalRange.topSectionY[1]) },
          rotate: parseInt(getRandomDeg()), isReverse: false, isCenter: false,
        }
      })
      for (let i = 0, j = arr.length, k = j / 2; i < j; i++) {
        const section = i < k ? leftSectionX : rightSectionX
        arr[i] = {
          pos: { left: getRandom(section[0], section[1]), top: getRandom(hY[0], hY[1]) },
          rotate: parseInt(getRandomDeg()), isReverse: false, isCenter: false,
        }
      }
      if (figureTopArr[0]) arr.splice(topIdx, 0, figureTopArr[0])
      arr.splice(centerIndex, 0, newCenter)
      figureArrangeArr.value = arr
    }

    const putFigureCenter = (index: number) => () => reArrangFigure(index)

    const initLayout = () => {
      const stage = document.getElementById("stage")
      if (!stage) { setTimeout(initLayout, 50); return }
      const stageWidth = stage.scrollWidth
      const stageHeight = stage.scrollHeight
      if (stageWidth === 0 || stageHeight === 0) { setTimeout(initLayout, 50); return }
      const halfStageWidth = Math.ceil(stageWidth / 2)
      const halfStageHeight = Math.ceil(stageHeight / 2)

      const figure = document.getElementById("figure0")
      if (!figure) { setTimeout(initLayout, 50); return }
      const figureWidth = figure.scrollWidth
      const figureHeight = figure.scrollHeight
      if (figureWidth === 0 || figureHeight === 0) { setTimeout(initLayout, 50); return }
      const halfFigureWidth = Math.ceil(figureWidth / 2)
      const halfFigureHeight = Math.ceil(figureHeight / 2)

      constantPos.value = {
        centerPos: { left: halfStageWidth - halfFigureWidth, top: halfStageHeight - halfFigureHeight },
        horizontalRange: {
          leftSectionX: [-halfFigureWidth, halfStageWidth - 3 * halfFigureWidth],
          rightSectionX: [3 * halfFigureWidth + halfStageWidth, stageWidth - halfFigureWidth],
          y: [-halfFigureHeight, stageHeight - halfFigureHeight],
        },
        verticalRange: {
          x: [halfStageWidth - figureWidth, halfStageWidth],
          topSectionY: [-halfFigureHeight, halfStageHeight - 3 * halfFigureHeight],
        },
      }
      const initArr: FigureArrange[] = props.images.map(() => ({ pos: { left: 0, top: 0 }, rotate: 0, isReverse: false, isCenter: false }))
      figureArrangeArr.value = initArr
      initialized.value = true
      nextTick(() => reArrangFigure(0))
    }

    onMounted(() => {
      setTimeout(initLayout, 100)
    })

    return () => (
      <div class="stage" id="stage">
        <div class="img-container">
          {props.images.map((img, index) => {
            const a = figureArrangeArr.value[index] || { pos: { left: 0, top: 0 }, rotate: 0, isReverse: false, isCenter: false }
            return <ImageCard key={index} data={img} id={"figure" + index} arrange={a} onCard-click={putFigureCenter(index)} />
          })}
        </div>
        <nav class="img-nav">
          {props.images.map((_, index) => {
            const a = figureArrangeArr.value[index] || { pos: { left: 0, top: 0 }, rotate: 0, isReverse: false, isCenter: false }
            return <Controller key={index} arrange={a} onCtrl-click={putFigureCenter(index)} />
          })}
        </nav>
      </div>
    )
  },
})

export default GalleryView
