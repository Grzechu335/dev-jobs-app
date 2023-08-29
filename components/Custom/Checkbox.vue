<template>
	<label class="checkbox">
		<input
			type="checkbox"
			:checked="modelValue"
			@change="$emit('update:modelValue', !modelValue)"
		/>
		<span class="dark:text-white text-very-dark-blue whitespace-nowrap"
			><slot
		/></span>
	</label>
</template>

<script setup lang="ts">
defineProps<{
	modelValue: boolean;
}>();
</script>
