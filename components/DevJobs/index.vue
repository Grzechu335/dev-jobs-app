<template>
	<div class="max-w-[1100px] mx-auto px-6 tablet:px-10 desktop:px-0">
		<div
			class="grid tablet:grid-cols-2 gap-12 tablet:gap-y-[55px] tablet:gap-x-[11px] desktop:gap-y-[55px] desktop:gap-x-[30px] desktop:grid-cols-3"
		>
			<DevJobsItem v-for="job in filteredJobs" :job="job" />
		</div>
		<div class="grid place-content-center mt-8 tablet:mt-[56px]">
			<CustomButton variant="primary">Load More</CustomButton>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useFilters } from "~/store/useFilters";
import { useJobs } from "~/store/useJobs";
import {
	fullTimeFilter,
	locationFilter,
	mainFilter,
} from "~/utils/filterFunctions";

const { getJobs } = useJobs();

const filters = useFilters();

const filteredJobs = computed(() => {
	let filteredArr = getJobs.filter(
		(job) =>
			fullTimeFilter(job, filters.getFilters) &&
			locationFilter(job, filters.getFilters) &&
			mainFilter(job, filters.getFilters)
	);
	return filteredArr;
});
</script>
