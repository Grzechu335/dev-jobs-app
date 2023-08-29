<template>
	<div class="px-6 tablet:px-10 desktop:px-0 mt-[136px] tablet:mt-40">
		<div
			class="max-w-[730px] space-y-8 relative z-50 pt-16 bottom-4 mx-auto pb-[160px] target:pb-[149px] desktop:pb-[176px]"
		>
			<JobHeading :job="job" />
			<JobDescription :job="job" />
			<JobFooter :job="job" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useJobs } from "~/store/useJobs";

const {
	params: { id },
} = useRoute();

const { getJob } = useJobs();

// @ts-ignore
const job = getJob(Number(id));
</script>
