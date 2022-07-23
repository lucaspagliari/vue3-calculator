<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps<{ calculation?: string; history?: string[] }>();

const history = computed<string[]>(() => {
  if (props.history?.length) {
    return props.history.reverse().slice(0, 4).reverse();
  }
  return [];
});
</script>
<template>
  <div
    class="c-display flex flex-col items-end justify-end w-full overflow-x-auto gap-1"
  >
    <div v-for="h in history" :key="h" class="text-slate text-lg">
      {{ h }}
    </div>
    <div>
      {{ calculation || "0" }}
    </div>
  </div>
</template>
<style>
.c-display {
  @apply h-44 bg-gray-dark rounded-lg p-2 text-3xl;
}
</style>
