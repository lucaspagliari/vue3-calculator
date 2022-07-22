<script setup lang="ts">
import CDisplay from "./CDisplay.vue";

import { reactive } from "vue";

const calculation = reactive<string[]>([]);

const addValue = (value: string) => {
  if (value === "CE") {
    calculation.splice(0);
  } else {
    calculation.push(value);
  }
};


</script>
<template>
  <div class="w-96 bg-dark rounded-lg drop-shadow-xl p-3">
    <div class="h-40 bg-gray-dark rounded-lg mb-2" data-test="calculation">
      {{ calculation }}
      <CDisplay history="history" :calculation="calculation" />
      <br />
    </div>


  </div>
</template>
<style></style>
