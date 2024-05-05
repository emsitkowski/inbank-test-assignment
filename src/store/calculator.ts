import { defineStore } from "pinia";
import { ref } from "vue";

type ClientDetails = {
  name: String;
  surname: String;
  number: String;
  email: String;
  income: String;
};

export const useCalculatorStore = defineStore("calculator", () => {
  const period = ref<number>(0);
  const amount = ref<number>(0);
  const clientDetails = ref<ClientDetails>({
    name: "",
    surname: "",
    number: "",
    email: "",
    income: "",
  });

  // Save loan period
  function savePeriod(newValue: number) {
    period.value = newValue;
  }

  // Save loan amount
  function saveAmount(newValue: number) {
    amount.value = newValue;
  }

  // Save client name
  function saveClientDetails(details: ClientDetails) {
    Object.assign(clientDetails.value, details);
  }

  return { period, amount, clientDetails, savePeriod, saveAmount, saveClientDetails };
});
