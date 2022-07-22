<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = withDefaults(defineProps<{ color?: string }>(), {
  color: "gray-dark",
});

const colorClass = computed<string>(() => {
  return props.color;
});
</script>

<template>
  <button class="c-btn" :class="colorClass">
    <slot></slot>
  </button>
</template>
<style lang="css">
.c-btn {
  @apply py-4 px-1 border-2 drop-shadow-lg rounded-lg transition;
}
.c-btn:hover {
  @apply text-orange border-orange;
}
.gray-dark {
  @apply bg-gray-dark   border-gray-dark;
}
.orange {
  @apply bg-orange   border-orange;
}
.orange:hover {
  @apply text-white border-white;
}
.outlined {
  @apply border-gray-dark;
}
</style>
