<script setup lang="ts">
import { computed } from "vue";
import Button from "@/components/Button.vue";
import { useCalculatorStore } from "@/store/calculator";

const { amount, period } = useCalculatorStore();

// Compute loan values
const loanAmount = computed(() => amount);
const loanPeriod = computed(() => period);
const monthlyPayment = computed(() => (amount / period).toFixed(2));
</script>

<template>
  <main>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 items-center bg-white lg:shadow-base lg:rounded-[20px] lg:max-w-[1200px] mx-auto p-1 mt-10 text-center"
    >
      <div class="lg:bg-secondary-light-khaki rounded-l-[18px] lg:py-20">
        <img
          class="hidden lg:block relative lg:left-16 w-full"
          src="@/assets/img/person-looking-at-items-drawing.png"
          alt=""
        />
        <img
          class="lg:hidden w-full max-w-60 mx-auto"
          src="@/assets/img/person-looking-at-items-drawing-mobile.png"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-10 px-4 py-6 lg:p-28 w-full max-w-xl mx-auto">
        <!-- Heading -->
        <div>
          <h1 class="text-h2 mb-2">Good news!</h1>
          <p>Your loan has been approved.</p>
        </div>

        <!-- Details -->
        <div
          class="flex flex-col text-start border-primary-night-violet border-t border-b border-opacity-15 divide-y divide-primary-night-violet divide-opacity-15 [&>*]:py-3"
        >
          <div class="grid grid-cols-2">
            <div class="font-medium">Loan amount</div>
            <div>{{ loanAmount }} €</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-medium">Loan period</div>
            <div>{{ loanPeriod }} months</div>
          </div>
          <div class="grid grid-cols-2">
            <div class="font-medium">Monthly payment</div>
            <div>{{ monthlyPayment }} €</div>
          </div>
        </div>

        <!-- Exit button -->
        <router-link class="contents" to="/">
          <Button label="Back to home page" variant="secondary" />
        </router-link>
      </div>
    </div>
  </main>
</template>
