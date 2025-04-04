<script setup></script>

<template>
  <div class="stretch-container">
    <slot />
  </div>
</template>

<style scoped>
.stretch-container > * {
  width: 100%;
  height: 100%;
}

:deep(.stretch-container > img),
:deep(.stretch-container > video),
:deep(.stretch-container > picture) {
  object-fit: scale-down;
}
</style>
