<template>
	<footer
		class="fixed bottom-0 px-6 tablet:px-10 desktop:px-0 left-0 w-full py-6 bg-white dark:bg-very-dark-blue border-t-[1px] border-t-dark-grey/50"
	>
		<div class="max-w-[730px] mx-auto flex items-center justify-between">
			<div class="hidden tablet:block">
				<h3 class="text-very-dark-blue dark:text-white">
					{{ job.position }}
				</h3>
				<p class="text-dark-grey">{{ job.company }}</p>
			</div>
			<CustomButton class="w-full tablet:w-fit" variant="primary"
				>Apply Now</CustomButton
			>
		</div>
	</footer>
</template>
<script setup lang="ts">
import { JobType } from "~/types/Job";

defineProps<{
	job: JobType;
}>();
</script>
