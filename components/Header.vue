<template>
	<header
		id="header"
		class="absolute z-40 w-full h-[136px] tablet:h-40 bg-violet tablet:rounded-[0_0_0_100px]"
	>
		<div class="relative w-full h-full">
			<div class="mx-auto max-w-[1100px] pt-11">
				<div
					class="flex items-center justify-between px-6 tablet:px-10 desktop:px-0"
				>
					<img
						src="/assets/desktop/logo.svg"
						class="w-[115px] h-[32px]"
						alt="logo"
					/>
					<CustomThemeSwitch />
				</div>
			</div>
			<div
				class="absolute bottom-0 h-[40px] w-full px-6 tablet:px-10 desktop:px-0"
			>
				<div
					class="max-w-[1100px] mx-auto bg-white dark:bg-very-dark-blue overflow-hidden rounded-md"
				>
					<div
						class="flex items-center justify-between tablet:grid tablet:grid-cols-3 desktop:px-4 desktop:flex"
					>
						<CustomInput
							class="flex-grow w-full tablet:border-r-[1px] tablet:border-r-dark-grey/20 flex-shrink"
							v-model="formData.filter"
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
							v-model="formData.location"
							placeholder="Location"
						/>
						<div
							class="flex items-center flex-shrink-0 p-4 tablet:hidden"
						>
							<Icon
								name="mdi:filter"
								color="#6E8098"
								size="30"
								class="mr-6"
							/>
							<CustomButton
								variant="primary"
								class="grid w-12 h-12 place-content-center"
							>
								<Icon
									name="mdi-light:magnify"
									size="28"
									color="#fff"
								/>
							</CustomButton>
						</div>
						<div
							class="hidden tablet:flex items-center h-full justify-between tablet:space-x-[26px] my-auto bg-white desktop:pl-4 tablet:px-4 desktop:px-0 dark:bg-very-dark-blue desktop:min-w-[345px]"
						>
							<CustomCheckbox v-model="formData.fullTimeOnly"
								>Full Time
							</CustomCheckbox>
							<CustomButton variant="primary"
								>Search</CustomButton
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
const formData = reactive({
	filter: "",
	location: "",
	fullTimeOnly: false,
});
</script>

<style scoped>
@media only screen and (min-width: 1100px) {
	#header {
		background-image: url("/assets/desktop/bg-pattern-header.svg");
		background-size: cover;
	}
}
@media only screen and (min-width: 768px) {
	#header {
		background-image: url("/assets/tablet/bg-pattern-header.svg");
		background-size: cover;
	}
}
@media only screen and (max-width: 768px) {
	#header {
		background-image: url("/assets/mobile/bg-pattern-header.svg");
		background-size: cover;
	}
}
</style>
