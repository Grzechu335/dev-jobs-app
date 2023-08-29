<template>
	<div class="p-12 bg-white rounded-md space-y-11 dark:bg-very-dark-blue">
		<div
			class="flex flex-col items-start tablet:items-center justify-between space-y-[54px] tablet:space-y-0 tablet:flex-row"
		>
			<div class="space-y-2 tablet:space-y-3">
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
					class="dark:text-white group-hover:text-dark-grey text-very-dark-blue"
				>
					{{ job.position }}
				</h3>
				<h4 class="font-bold text-violet">{{ job.location }}</h4>
			</div>
			<CustomButton class="w-full tablet:w-fit" variant="primary"
				>Apply Now</CustomButton
			>
		</div>
		<!-- Description -->
		<p class="text-justify text-dark-grey">{{ job.description }}</p>
		<!-- Requirements -->
		<div class="space-y-9">
			<h3 class="text-very-dark-blue dark:text-white">Requirements</h3>
			<p class="text-justify text-dark-grey">
				{{ job.requirements.content }}
			</p>
			<ul class="space-y-1">
				<li
					class="flex text-dark-grey"
					v-for="item in job.requirements.items"
				>
					<Icon
						name="mdi:dot"
						size="26"
						color="#5964e0"
						class="flex-shrink-0 inline-block mr-3"
					/>
					<p>{{ item }}</p>
				</li>
			</ul>
		</div>
		<!-- What You Will Do -->
		<div class="space-y-9">
			<h3 class="text-very-dark-blue dark:text-white">
				What You Will Do
			</h3>
			<p class="text-justify text-dark-grey">
				{{ job.role.content }}
			</p>
			<ol class="space-y-1">
				<li
					class="flex text-justify text-dark-grey"
					v-for="(item, idx) in job.role.items"
				>
					<p class="mr-4 text-[#5964e0] font-bold">{{ idx + 1 }}.</p>
					<p>{{ item }}</p>
				</li>
			</ol>
		</div>
	</div>
</template>

<script setup lang="ts">
import { JobType } from "~/types/Job";
defineProps<{
	job: JobType;
}>();
</script>
