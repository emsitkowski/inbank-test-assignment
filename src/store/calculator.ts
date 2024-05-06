import { defineStore } from "pinia";
import { ref, computed } from "vue";

type ClientDetails = {
  name: String;
  surname: String;
  number: String;
  email: String;
  income: String;
};

export const useCalculatorStore = defineStore("calculator", () => {
  const isSuccessfullySubmitted = ref<Boolean>(false);
  const period = ref<number>(0);
  const amount = ref<number>(0);
  const clientDetails = ref<ClientDetails>({
    name: "",
    surname: "",
    number: "",
    email: "",
    income: "",
  });

  // Set submission status
  function setSubmissionStatus(value: Boolean) {
    isSuccessfullySubmitted.value = value;
  }

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

  // Get client personal info
  const getClientDetails = computed(() => clientDetails.value);

  return {
    isSuccessfullySubmitted,
    setSubmissionStatus,
    period,
    amount,
    clientDetails,
    savePeriod,
    saveAmount,
    saveClientDetails,
    getClientDetails,
  };
});
