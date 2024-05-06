<template>
  <button
    v-if="!link"
    class="px-6 py-3 rounded-full disabled:bg-disabled-gray-lighter disabled:text-disabled-gray"
    :class="buttonVariants[variant as ButtonVariant]"
    :disabled="disabled"
  >
    {{ label }}
  </button>

  <a
    v-else
    :href="link"
    class="px-6 py-3 rounded-full disabled:bg-disabled-gray-lighter disabled:text-disabled-gray"
    :class="buttonVariants[variant as ButtonVariant]"
    :disabled="disabled"
  >
    {{ label }}
  </a>
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
  disabled: {
    type: Boolean,
  },
  link: {
    type: String,
  },
});

const buttonVariants = {
  primary: "bg-almost-white",
  secondary: "bg-secondary-plump hover:bg-secondary-plump-lighter active:bg-secondary-plump-darker",
};
</script>
