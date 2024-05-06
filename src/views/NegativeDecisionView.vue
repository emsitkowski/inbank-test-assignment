<script setup lang="ts">
import { computed } from "vue";
import { useCalculatorStore } from "@/store/calculator";
import Button from "@/components/Button.vue";

const clientName = computed(() => useCalculatorStore().getClientDetails.name);
</script>

<template>
  <main>
    <div class="bg-white lg:shadow-base lg:rounded-[20px] max-w-3xl mx-auto px-4 py-10 lg:p-20 mt-10 text-center">
      <div class="flex flex-col gap-10 max-w-96 mx-auto">
        <!-- Heading -->
        <div>
          <h1 class="text-h2 mb-2">Dear {{ clientName }}</h1>
          <p>Unfortunately, your loan was denied.</p>
        </div>

        <!-- Information -->
        <p
          class="text-sm opacity-75 py-4 max-w-96 mx-auto border-t border-b border-primary-night-violet border-opacity-15"
        >
          In addition to your income and expenses, a number of other factors play a role in loan decisions.
        </p>

        <!-- Exit button -->
        <router-link class="contents" to="/">
          <Button label="Exit" variant="secondary" />
        </router-link>
      </div>
    </div>
  </main>
</template>
