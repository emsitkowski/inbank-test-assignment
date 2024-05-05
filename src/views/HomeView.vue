<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Calculator from "../components/Calculator.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <a href="#calculate">
      <Hero class="mb-10 lg:mb-44" />
    </a>
    <Calculator id="calculate" />
  </main>
</template>
