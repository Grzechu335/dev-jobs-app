<template>
  <label
    class="flex items-center px-8 bg-white rounded-md dark:bg-very-dark-blue py-7"
  >
    <Icon
      name="simple-line-icons:magnifier"
      color="#5964E0"
      size="20"
      class="mr-4"
    />
    <input
      type="text"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :placeholder="placeholder"
      v-bind="$attrs"
      class="flex-grow bg-transparent placeholder-very-dark-blue/50 text-very-dark-blue dark:text-white focus:outline-none dark:placeholder-white/50"
    />
  </label>
</template>

<script setup lang="ts">
const { modelValue = "" } = defineProps<{
  placeholder: string;
  modelValue: string;
}>();
</script>
