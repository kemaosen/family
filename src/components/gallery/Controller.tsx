import { defineComponent, computed, type PropType } from 'vue'
import type { FigureArrange } from './ImageCard'

const Controller = defineComponent({
  name: 'Controller',
  props: {
    arrange: { type: Object as PropType<FigureArrange>, required: true },
  },
  emits: ['ctrl-click'],
  setup(props, { emit }) {
    const navClass = computed(() => [
      'controller',
      { 'is-center': props.arrange.isCenter, 'is-reverse': props.arrange.isReverse },
    ]);

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      emit('ctrl-click');
    };

    return () => <span class={navClass.value} onClick={handleClick}></span>;
  },
});

export default Controller;
