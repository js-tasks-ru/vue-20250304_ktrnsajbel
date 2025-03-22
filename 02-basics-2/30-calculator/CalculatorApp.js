import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref(0);
    const secondOperand = ref(0);
    const result = ref(0);
    const selectedOperator = ref('');

    watchEffect(() => {
      if(selectedOperator.value === "sum") result.value = firstOperand.value + secondOperand.value;
      if(selectedOperator.value === "subtract") result.value = firstOperand.value - secondOperand.value;
      if(selectedOperator.value === "multiply") result.value = firstOperand.value * secondOperand.value;
      if(selectedOperator.value === "divide") result.value = firstOperand.value / secondOperand.value;
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
