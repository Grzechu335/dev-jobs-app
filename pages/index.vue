<template>
  <div>
    <div class="w-full h-[400px] grid place-content-center">
      <Checkbox label="Checkbox" v-model="enabled" />
    </div>
  </div>
</template>

<script setup lang="ts">
const enabled = ref(false);
</script>
