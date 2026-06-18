import { defineComponent, Suspense } from 'vue'
import { RouterView } from 'vue-router'

const App = defineComponent({
  name: 'App',
  setup() {
    return () => (
      <Suspense>
        {{
          default: () => <RouterView />,
          fallback: () => <div class="loading-container">加载中...</div>,
        }}
      </Suspense>
    )
  },
})

export default App
