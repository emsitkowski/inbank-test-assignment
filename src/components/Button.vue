<template>
  <button class="px-6 py-3 rounded-full" :class="buttonVariants[variant as ButtonVariant]">{{ label }}</button>
</template>

<script setup lang="ts">
type ButtonVariant = "primary" | "secondary";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
    default: "primary",
  },
});

const buttonVariants = {
  primary: "bg-almost-white",
  secondary: "bg-secondary-plump",
};
</script>
