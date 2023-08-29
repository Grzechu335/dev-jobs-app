<template>
	<NuxtLink
		:to="`job/${job.id}`"
		class="p-8 relative pt-[49px] group flex flex-col justify-between bg-white rounded-md dark:bg-very-dark-blue shadow-lg"
	>
		<div
			:style="`background-color: ${job.logoBackground}`"
			class="absolute left-8 top-0 transform translate-y-[-50%] w-[50px] h-[50px] rounded-2xl grid place-content-center"
		>
			<img :src="job.logo" :alt="`${job.company} logo`" />
		</div>
		<div>
			<p class="text-dark-grey">
				{{ job.postedAt }}
				<Icon
					name="mdi:dot"
					size="30"
					color="#6e8098"
					class="inline-block"
				/>
				{{ job.contract }}
			</p>
			<h3
				class="mt-4 dark:text-white group-hover:text-dark-grey text-very-dark-blue"
			>
				{{ job.position }}
			</h3>
			<p class="mt-3 text-dark-grey">{{ job.company }}</p>
		</div>
		<h4 class="font-bold mt-11 text-violet">{{ job.location }}</h4>
	</NuxtLink>
</template>

<script setup lang="ts">
import { JobType } from "~/types/Job";
defineProps<{
	job: JobType;
}>();
</script>
