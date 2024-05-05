<template>
  <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:px-10">
    <div
      class="flex flex-col basis-5/12 justify-center items-center px-6 py-16 lg:px-10 lg:py-56 bg-secondary-khaki rounded-[100px] lg:rounded-[200px] text-center"
    >
      <h1 class="text-h1 font-primary mb-4">
        <span v-if="subheader" class="inline-block mb-4 text-base not-italic font-secondary">{{ subheader }}</span
        ><br />
        {{ header }}
      </h1>
      <p class="mb-6">
        {{ header }}
      </p>
      <Button v-if="buttonLabel" :label="buttonLabel" />
    </div>
    <div class="flex basis-7/12 rounded-[100px] lg:rounded-[200px] overflow-hidden">
      <img class="object-cover w-full h-full" :src="coverImageSrc" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";

const props = defineProps({
  subheader: {
    type: String,
  },
  header: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  coverImageSrc: {
    type: String,
    required: true,
  },
  buttonLabel: {
    type: String,
  },
});
</script>

<style scoped></style>
