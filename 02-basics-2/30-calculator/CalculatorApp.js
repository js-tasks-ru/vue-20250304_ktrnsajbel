import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref(0);
    const secondOperand = ref(0);
    const selectedOperator = ref('');

    const result = computed(() => {
      if(selectedOperator.value === "sum") return firstOperand.value + secondOperand.value;
      if(selectedOperator.value === "subtract") return firstOperand.value - secondOperand.value;
      if(selectedOperator.value === "multiply") return firstOperand.value * secondOperand.value;
      if(selectedOperator.value === "divide") return firstOperand.value / secondOperand.value;
      else return 0;
    });

    return {
      firstOperand,
      secondOperand,
      result,
      selectedOperator,
    };
  },

  template: `
    <div class="calculator">
      <input type="number" v-model="firstOperand" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input type="radio" v-model="selectedOperator"  name="operator" value="sum"/>➕</label>
        <label><input type="radio" v-model="selectedOperator" name="operator" value="subtract"/>➖</label>
        <label><input type="radio" v-model="selectedOperator" name="operator" value="multiply"/>✖</label>
        <label><input type="radio" v-model="selectedOperator" name="operator" value="divide"/>➗</label>
      </div>

      <input type="number" v-model="secondOperand" aria-label="Second operand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
