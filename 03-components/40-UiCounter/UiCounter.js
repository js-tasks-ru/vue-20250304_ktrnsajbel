import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: Infinity },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    const decrement = () => {
      emit('update:count', props.count - 1);
    }; 
    const increment = () => {
      emit('update:count', props.count + 1);
    };

    return {
      decrement,
      increment,
      props,
    };
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count <= props.min" @click="decrement">➖</UiButton>
      <span class="count" data-testid="count">{{ props.count }}</span>
      <UiButton aria-label="Increment" :disabled="count >= props.max" @click="increment">➕</UiButton>
    </div>
  `,
})
