<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

const emit = defineEmits<{
  (event: "click", key: string): void;
}>();

const numbers = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
const operations = ["+", "-", "x", "/"];
const commands = ["CE", "="];

const handleBtn = (key: string) => {
  emit("click", key);
};
</script>
<template>
  <div class="grid grid-cols-4 gap-2">
    <div class="grid grid-cols-3 col-span-3 grid-rows-3 gap-2">
      <base-button
        v-for="key in numbers"
        :data-test="key"
        @click="handleBtn(key)"
      >
        {{ key }}
      </base-button>
      <base-button
        v-for="key in commands"
        @click="handleBtn(key)"
        color="outlined"
        :data-test="key"
      >
        {{ key }}
      </base-button>
    </div>

    <div class="grid grid-cols-1 grid-rows-4 gap-2">
      <base-button
        v-for="key in operations"
        @click="handleBtn(key)"
        color="orange"
        :data-test="key"
      >
        {{ key }}
      </base-button>
    </div>
  </div>
</template>
