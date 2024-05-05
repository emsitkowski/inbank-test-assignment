<template>
  <div
    v-show="show"
    class="fixed flex justify-center items-end md:items-center top-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50"
  >
    <div class="w-full md:w-[540px] max-w-full bg-almost-white rounded-t-[30px] md:rounded-[30px] p-6 md:p-10">
      <div class="flex justify-between items-center mb-6">
        <!-- Modal header -->
        <h3 class="text-xl font-medium">{{ headerText }}</h3>

        <!-- Modal close -->
        <div class="cursor-pointer p-2" @click="$emit('close')">
          <img class="w-3 h-3" src="@/assets/img/close.svg" alt="close" />
        </div>
      </div>
      <!-- Modal content -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  headerText: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["close"]);
</script>

<style scoped></style>
