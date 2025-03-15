import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counterValue = ref(0);

    function decrement() {
      counterValue.value--;
    }

    function increment() {
      counterValue.value++;
    }

    return { counterValue, decrement, increment };
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counterValue < 1"
        @click="decrement()"
      >➖</button>

      <span class="count" data-testid="count">{{ counterValue }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counterValue > 4"
        @click="increment()"
      >➕</button>
    </div>
  `,
})
