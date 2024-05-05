import { defineStore } from "pinia";
import { ref } from "vue";

export const useCalculatorStore = defineStore("calculator", () => {
  const period = ref<number>(0);
  const amount = ref<number>(0);
  const clientName = ref<string>("");

  // Save loan period
  function savePeriod(value: number) {
    period.value = value;
  }

  // Save loan amount
  function saveAmount(value: number) {
    amount.value = value;
  }

  // Save client name
  function saveClientName(value: string) {
    clientName.value = value;
  }

  return { period, amount, clientName, savePeriod, saveAmount, saveClientName };
});
