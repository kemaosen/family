import { defineComponent, computed, type PropType } from 'vue'

export interface FigureArrange {
  pos: { left: number; top: number }
  rotate: number
  isReverse: boolean
  isCenter: boolean
}

export interface ImageInfo {
  filename: string
  url: string
  title: string
  desc: string
}

const ImageCard = defineComponent({
  name: 'ImageCard',
  props: {
    arrange: { type: Object as PropType<FigureArrange>, required: true },
    data: { type: Object as PropType<ImageInfo>, required: true },
    id: { type: String, required: true },
  },
  emits: ['card-click'],
  setup(props, { emit }) {
    const cssVars = computed(() => ({
      '--figure-left': props.arrange.pos ? props.arrange.pos.left + 'px' : '0',
      '--figure-top': props.arrange.pos ? props.arrange.pos.top + 'px' : '0',
      '--figure-transform': props.arrange.rotate ? `rotate(${props.arrange.rotate}deg)` : 'none',
      '--figure-z-index': props.arrange.isCenter ? '11' : '1',
    }));

    const figureClass = computed(() => [
      'img-figure',
      { 'is-reverse': props.arrange.isReverse, 'is-center': props.arrange.isCenter },
    ]);

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      emit('card-click');
    };

    return () => (
      <figure class={figureClass.value} id={props.id} style={cssVars.value} onClick={handleClick}>
        <div class="front">
          <img src={props.data.url} alt={props.data.title} loading="lazy" />
          <h3 class="img-title">{props.data.title}</h3>
        </div>
        <div class="back" onClick={handleClick}>
          <p>{props.data.desc}</p>
        </div>
      </figure>
    );
  },
});

export default ImageCard;
