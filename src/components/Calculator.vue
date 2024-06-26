<template>
  <div
    class="grid lg:grid-cols-2 items-center bg-secondary-lavender py-10 lg:py-20 divide-x-[1px] divide-primary-night-violet divide-opacity-15"
  >
    <!-- Section heading -->
    <div class="text-center px-4 lg:px-20 mb-10 lg:mb-0">
      <h2 class="text-h1 mb-4">Calculate your monthly payment</h2>
      <p>Estimate your monthly payments based on the chosen loan amount and time period.</p>
    </div>

    <!-- Monthly payment calculator form -->
    <div class="flex flex-col px-4 lg:px-10 xl:px-20">
      <form @submit.prevent="handleSubmit" action="">
        <div class="flex flex-col gap-10 mb-10">
          <CalculatorField
            type="number"
            input-label="Amount"
            :range-labels="['300 €', '7,200 €']"
            max-range="7200"
            min-range="300"
            @field-update="handleRangeUpdate"
          />
          <CalculatorField
            type="options"
            input-label="Period"
            :range-labels="['2 months', '72 months']"
            max-range="8"
            :options="['2', '4', '8', '16', '32', '48', '60', '72']"
            @field-update="handleRangeUpdate"
          />
        </div>

        <!-- Monthly payment value -->
        <div class="flex flex-col items-center gap-6">
          <div class="text-center">
            <div class="mb-2">Monthly payment</div>
            <div class="text-h1">{{ monthlyPayment }} €</div>
          </div>

          <!-- Submit -->
          <Button class="self-center" label="Apply now" variant="secondary" type="submit"></Button>

          <!-- Legal note -->
          <p class="text-xs opacity-60">
            The calculation is approximate and may differ from the conditions offered to you. Please submit a loan
            application to receive a personal offer. Financial services are provided by AS Inbank Finance.
          </p>
        </div>
      </form>
    </div>

    <!-- Details form modal -->
    <Modal :show="showModal" header-text="Personal details" @close="showModal = false">
      <PersonalDetailsForm />
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from "vue";
import { useCalculatorStore } from "@/store/calculator";
import CalculatorField from "./CalculatorField.vue";
import Button from "./Button.vue";
import Modal from "../components/Modal.vue";
import PersonalDetailsForm from "./PersonalDetailsForm.vue";

// Show or hide modal ref
const showModal = ref<boolean>(false);

// Keeps selected values in a ref
const selectedValues = ref({
  period: 0,
  amount: 0,
});

// Handle calculator form submit
function handleSubmit(e: Event) {
  // Save loan period and amount values to store
  useCalculatorStore().savePeriod(selectedValues.value.period);
  useCalculatorStore().saveAmount(selectedValues.value.amount);

  // Open details form modal
  showModal.value = true;
}

// Retrieve range slider update value
function handleRangeUpdate(e: Ref | number) {
  if (typeof e === "object") {
    selectedValues.value.amount = e.value;
  } else {
    selectedValues.value.period = e;
  }
}

// Calculate monthly payment value
const monthlyPayment = computed(() => (selectedValues.value.amount / selectedValues.value.period).toFixed(2));
</script>
