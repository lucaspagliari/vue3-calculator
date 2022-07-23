<script setup lang="ts">
import CDisplay from "./CDisplay.vue";
import CButtons from "./CButtons.vue";
import { reactive, computed, ref } from "vue";

const calculation = ref<string>("0");
const history = reactive<string[]>([]);
const insertNewNumber = ref<boolean>(false);

const length = computed<number>(() => {
  return calculation.value.length;
});
const isLastItemOperation = computed<boolean>(() => {
  const v = calculation.value.trim();
  return operations.includes(v.charAt(v.length - 1));
});

const operations = ["÷", "×", "-", "+"];
const operationFunction: any = {
  "÷": (a: any, b: any) => a / b,
  "×": (a: any, b: any) => a * b,
  "-": (a: any, b: any) => a - b,
  "+": (a: any, b: any) => a + b,
};

const handleBackspace = () => {
  calculation.value = calculation.value.trim();
  calculation.value = calculation.value
    .substring(0, calculation.value.length - 1)
    .trim();
};

const handleOperation = (operation: string) => {
  if (isLastItemOperation.value) {
    calculation.value = calculation.value.trim().substring(0, length.value - 2);
  }
  calculation.value += ` ${operation} `;
  insertNewNumber.value = false;
};

const isNumber = (value: any) => {
  return !isNaN(Number(value));
};
const handleBtnClick = (key: string) => {
  if (operations.includes(key)) {
    handleOperation(key);
    return;
  }
  if (isNumber(key)) {
    if (calculation.value === "0") {
      calculation.value = "";
    }
    if (insertNewNumber.value) {
      calculation.value = "";
      insertNewNumber.value = false;
    }
    calculation.value += key;
    return;
  }

  if (key === "=") {
    if (isLastItemOperation.value) {
      handleBackspace();
    }
    handleEquals();
  } else if (key === "←") {
    handleBackspace();
  }
};

const handleEquals = () => {
  let usedOperations = new Set();

  operations.forEach((item) => {
    if (calculation.value.includes(item)) {
      usedOperations.add(item);
    }
  });

  let op = calculation.value.split(" ");
  usedOperations.forEach((item: any) => {
    let i = 0;
    while (op.includes(item) && i < 10000) {
      const index = op.indexOf(item);
      const f = operationFunction[item];
      const a = parseFloat(op[index - 1]);
      const b = parseFloat(op[index + 1]);
      op.splice(index + 1, 1);
      op[index] = f(a, b);
      op.splice(index - 1, 1);
      i++;
    }
  });
  insertNewNumber.value = true;
  history.push(calculation.value);
  calculation.value = String(op[0]);
};
</script>
<template>
  <div class="w-96 bg-dark rounded-lg drop-shadow-xl p-4 flex gap-2 flex-col">
    <CDisplay :history="history" :calculation="calculation" />
    <CButtons @click="handleBtnClick" />
  </div>
</template>
<style></style>
