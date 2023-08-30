<template>
	<div class="inline-flex items-center space-x-3">
		<Icon name="ph:sun" size="20" color="#fff" />
		<HeadlessSwitch
			:default-checked="colorMode.value === 'dark'"
			:class="colorMode.value === 'dark' ? 'bg-blue-600' : 'bg-gray-200'"
			@update:model-value="toggleColorMode"
			class="relative inline-flex items-center w-12 h-6 bg-white rounded-full group"
		>
			<span
				v-if="!colorMode.unknown"
				:class="
					colorMode.value === 'dark'
						? 'translate-x-7'
						: 'translate-x-1'
				"
				class="inline-block w-4 h-4 transition-all duration-200 transform rounded-full bg-violet group-hover:bg-light-violet"
			/>
		</HeadlessSwitch>
		<Icon name="ph:moon" size="20" color="#fff" />
	</div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

function toggleColorMode() {
	if (colorMode.value === "light") {
		colorMode.preference = "dark";
	} else {
		colorMode.preference = "light";
	}
}
</script>
