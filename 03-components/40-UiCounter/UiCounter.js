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
    };
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count <= min" @click="decrement">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="count >= max" @click="increment">➕</UiButton>
    </div>
  `,
})
