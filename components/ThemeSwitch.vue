<template>
  <div class="inline-flex items-center space-x-3">
    <Icon name="ph:sun" size="20" color="#fff" />
    <HeadlessSwitch
      v-model="enabled"
      @update:model-value="testUpdate"
      :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
      class="relative inline-flex items-center w-12 h-6 bg-white rounded-full group"
    >
      <span
        :class="enabled ? 'translate-x-7' : 'translate-x-1'"
        class="inline-block w-4 h-4 transition transform rounded-full bg-violet group-hover:bg-light-violet"
      />
    </HeadlessSwitch>
    <Icon name="ph:moon" size="20" color="#fff" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();
const enabled = ref(false);
const emit = defineEmits<{
  "update:modelValue": [newValue: boolean];
}>();
function testUpdate(newValue: boolean) {
  emit("update:modelValue", newValue);
}
</script>
