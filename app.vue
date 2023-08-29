<template>
	<div :class="theme.value">
		<NuxtLayout />
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
const theme = useColorMode();
</script>
