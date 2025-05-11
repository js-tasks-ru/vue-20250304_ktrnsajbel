<script setup>
import { ref } from 'vue';

const props = defineProps({
  to: { type: [String, Object], default: '' },
  href: { type: String, default: '' },
});

const component = ref(props.to ? 'RouterLink' : 'a');
</script>

<template>
  <component
    :is="component"
    :to="to"
    :href="href"
    class="link"
    tabindex="0"
  >
    <slot />
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
