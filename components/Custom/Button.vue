<template>
	<button
		class="btn"
		:class="variant === 'primary' ? 'btn-primary' : 'btn-secondary'"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
defineProps<{
	variant: "primary" | "secondary";
}>();
</script>
