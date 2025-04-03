<script setup lang="ts">
import { defineProps, defineSlots } from 'vue';

defineProps<{
  for?: string,
  label?: string,
  description?: string,
  hint?: string,
  showHint?: boolean,
  invalid?: boolean,
}>()

defineSlots<{
  default(): void
  label(): void
  description(): void
}>();
</script>

<template>
  <div class="form-group">
    <div class="form-group__label-wrapper">
      <label :for="$props.for" class="form-group__label">
        <slot name="label">
          {{ label ? label : 'LABEL'}}
        </slot>
      </label>
      <div class="form-group__description">
        <slot name="description">
          {{ description ? description : 'DESCRIPTION'}}
        </slot>
      </div>   
    </div>
    <div class="form-group__control">
      <slot name="default">CONTENT</slot>
    </div>
    <div v-if="hint !== undefined" class="form-group__hint" :class="{'form-group__hint--invalid': invalid}">
      <span v-if="showHint || invalid">{{ hint ? hint : 'HINT' }}</span>
    </div>
  </div>
</template>

<style scoped>
/* _form-group.css */
.form-group {
}

.form-group__label-wrapper {
  margin-block-end: var(--spacing-small);
}

.form-group__label {
  display: block;
  font-size: var(--font-size-control);
}

.form-group__description {
  color: var(--color-dimmed);
}

.form-group__hint {
  font-size: var(--font-size-small);
  color: var(--color-dimmed);
  min-height: 1lh;

  &.form-group__hint--invalid {
    color: var(--color-danger);
  }
}
</style>
