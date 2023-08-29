<template>
	<div
		class="relative flex items-center bg-white rounded-md tablet:overflow-hidden dark:bg-very-dark-blue"
	>
		<div
			class="tablet:w-[140px] z-50 tablet:h-[140px] w-[50px] h-[50px] absolute tablet:static left-1/2 tablet:transform-none transform translate-x-[-50%] translate-y-[-50%] top-0 grid place-content-center tablet:rounded-none rounded-2xl"
			:style="`background-color: ${job.logoBackground}`"
		>
			<img
				class="tablet:scale-[2.3]"
				:src="job.logo"
				:alt="`${job.company} logo`"
			/>
		</div>
		<div
			class="flex flex-col items-center justify-between flex-grow p-10 space-y-9 tablet:space-y-0 tablet:flex-row"
		>
			<div
				class="space-y-2 text-center tablet:text-start tablet:space-y-0"
			>
				<h2 class="font-bold text-very-dark-blue dark:text-white">
					{{ job.company }}
				</h2>
				<p class="text-dark-grey">{{ job.website }}</p>
			</div>
			<CustomButton variant="secondary">Company Site</CustomButton>
		</div>
	</div>
</template>

<script setup lang="ts">
import { JobType } from "~/types/Job";
defineProps<{
	job: JobType;
}>();
</script>
