<template>
  <div :class="theme.value">
    <NuxtLayout />
    <NuxtPage />
  </div>
</template>

<script setup>
const theme = useColorMode();
</script>
