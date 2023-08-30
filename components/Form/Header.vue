<template>
	<div
		class="absolute -bottom-6 tablet:bottom-0 h-[40px] w-full px-6 tablet:px-10 desktop:px-0"
	>
		<div
			class="max-w-[1100px] mx-auto border-dark-grey/30 dark:border-dark-grey/10 border-[1px] bg-white dark:bg-very-dark-blue overflow-hidden rounded-md"
		>
			<div
				class="flex items-center justify-between tablet:grid tablet:grid-cols-3 desktop:px-4 desktop:flex"
			>
				<CustomInput
					class="flex-grow w-full tablet:border-r-[1px] tablet:border-r-dark-grey/20 flex-shrink"
					v-model="filter.mainFilter"
					placeholder="Filter by title, companies, expertise…"
					iconName="mdi-light:magnify"
					iconSize="30"
					iconColor="#5964e0"
				/>

				<CustomInput
					iconName="mdi:location"
					iconSize="30"
					iconColor="#5964e0"
					class="border-r-[1px] border-r-dark-grey/20 hidden tablet:flex desktop:min-w-[300px]"
					v-model="filter.location"
					placeholder="Location"
				/>
				<div class="flex items-center flex-shrink-0 p-4 tablet:hidden">
					<Icon
						name="mdi:filter"
						color="#6E8098"
						size="30"
						class="mr-6"
						@click="modal.toggleModal()"
					/>
					<CustomButton
						variant="primary"
						class="grid w-12 h-12 place-content-center"
					>
						<Icon name="mdi-light:magnify" size="28" color="#fff" />
					</CustomButton>
				</div>
				<div
					class="hidden tablet:flex items-center h-full justify-between tablet:space-x-[26px] my-auto bg-white desktop:pl-4 tablet:px-4 desktop:px-0 dark:bg-very-dark-blue desktop:min-w-[345px]"
				>
					<CustomCheckbox v-model="filter.fullTimeOnly"
						>Full Time
					</CustomCheckbox>
					<CustomButton
						@click="filter.resetFilters()"
						variant="primary"
						>Clear</CustomButton
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useFilters } from "~/store/useFilters";
import { useModal } from "~/store/useModal";

const filter = useFilters();
const modal = useModal();
</script>
