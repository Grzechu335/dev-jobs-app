<template>
	<label
		class="flex items-center px-6 bg-white desktop:px-8 dark:bg-very-dark-blue py-7 caret-violet"
	>
		<div :class="showIcon ? '' : 'hidden tablet:block'">
			<Icon
				v-if="showIcon"
				:name="iconName"
				:color="iconColor"
				:size="iconSize"
				class="mr-4"
			/>
		</div>
		<input
			type="text"
			:value="modelValue"
			@input="
				$emit(
					'update:modelValue',
					($event.target as HTMLInputElement).value
				)
			"
			:placeholder="placeholder"
			class="w-full truncate bg-white dark:bg-very-dark-blue placeholder-very-dark-blue/50 text-very-dark-blue dark:text-white focus:outline-none dark:placeholder-white/50"
		/>
	</label>
</template>

<script setup lang="ts">
type InputProps = {
	placeholder: string;
	modelValue: string;
	iconName: string;
	iconColor: string;
	iconSize: string;
	showIcon?: boolean;
};

withDefaults(defineProps<InputProps>(), {
	showIcon: true,
});
</script>
