<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Calculator from "../components/Calculator.vue";
</script>

<template>
  <main>
    <Hero
      class="mb-10 lg:mb-44"
      subheader="Mini loan"
      header="Take charge of unexpected costs"
      paragraph="Finance unforeseen expenses with Inbank. A quick and easy application process with an instant credit decision."
      cover-image-src="/img/man-in-the-bathroom-doing-a-laundry.jpg"
      :button="true"
      button-label="Apply now"
      button-link="#calculate"
    />
    <Calculator id="calculate" />
  </main>
</template>
