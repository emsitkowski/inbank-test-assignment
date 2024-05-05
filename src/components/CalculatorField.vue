<template>
  <div class="flex flex-col-reverse md:flex-row gap-2 md:gap-6">
    <!-- Range slider -->
    <div class="basis-9/12">
      <input
        class="w-full"
        v-model="selectedValue"
        type="range"
        step="1"
        :min="minRange"
        :max="maxRange"
        name="range"
        id="range"
        @change="handleChange"
      />
      <div class="flex justify-between">
        <span class="text-sm opacity-60" v-for="label in $props.rangeLabels">{{ label }}</span>
      </div>
    </div>

    <!-- Input fields -->
    <div class="basis-3/12">
      <label class="relative left-2 z-10 text-xs font-medium px-2 bg-almost-white rounded-full" for="range">{{
        inputLabel
      }}</label>
      <div
        v-if="$props.type === 'options'"
        class="relative -top-3 flex justify-between items-center bg-almost-white border border-primary-night-violet rounded-lg"
      >
        <select v-model="selectedValue" class="w-full px-4 py-3" name="range" id="range" @change="handleChange">
          <option v-for="option in options" :value="options!.indexOf(option) + 1">{{ option }} months</option>
        </select>
        <img class="absolute right-6 pointer-events-none" src="@/assets/img/trailing-icon.svg" alt="" />
      </div>

      <div
        v-if="$props.type === 'number'"
        class="relative -top-3 flex justify-between items-center px-4 py-3 bg-almost-white border border-primary-night-violet rounded-lg"
      >
        <input
          class="w-full"
          v-model="selectedValue"
          :max="maxRange"
          :min="minRange"
          type="number"
          name="range"
          id="range"
          @change="handleChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

type CalculatorFieldType = "number" | "options";

const emit = defineEmits(["field-update"]);

const props = defineProps({
  type: {
    type: String as () => CalculatorFieldType,
    required: true,
  },
  inputLabel: {
    type: String,
    required: true,
  },
  rangeLabels: {
    type: Array<string>,
    required: true,
  },
  maxRange: {
    type: String,
    required: true,
  },
  minRange: {
    type: String,
    default: "1",
  },
  options: {
    type: Array<string | number>,
  },
});

const selectedValue = ref<string>(props.minRange);

onMounted(() => {
  emit("field-update", props.type === "number" ? selectedValue : props.options![selectedValue.value - 1]);
});

function handleChange() {
  emit("field-update", props.type === "number" ? selectedValue : props.options![Number(selectedValue.value) - 1]);
}
</script>
