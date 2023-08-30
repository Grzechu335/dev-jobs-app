<template>
	<div
		v-if="modal.getFilterModalState"
		class="fixed left-0 flex justify-center items-center top-0 w-screen h-screen z-[999] px-6 bg-midnight/80 tablet:hidden"
		@click="modal.toggleModal()"
	>
		<div
			@click.stop
			class="flex flex-col w-full overflow-hidden bg-white rounded dark:bg-very-dark-blue"
		>
			<CustomInput
				:showIcon="true"
				iconName="mdi:location"
				iconSize="30"
				iconColor="#5964e0"
				v-model="filters.location"
				placeholder="Filter by location..."
				class="border-b-[1px] border-b-dark-grey/30"
			/>
			<div class="flex flex-col p-6 space-y-6">
				<CustomCheckbox v-model="filters.fullTimeOnly"
					><span class="text-very-dark-blue dark:text-white"
						>Full Time Only</span
					></CustomCheckbox
				>
				<CustomButton @click="filters.resetFilters()" variant="primary"
					>Clear</CustomButton
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useFilters } from "~/store/useFilters";
import { useModal } from "~/store/useModal";

const modal = useModal();
const filters = useFilters();
</script>
