<template>
	<header
		id="header"
		class="fixed left-0 top-0 z-[999] w-full tablet:h-40 bg-violet tablet:rounded-[0_0_0_100px]"
	>
		<div class="relative w-full h-full">
			<div class="mx-auto max-w-[1100px] py-6 tablet:pt-11">
				<div
					class="flex items-center justify-between px-6 tablet:px-10 desktop:px-0"
				>
					<NuxtLink to="/">
						<img
							src="/assets/desktop/logo.svg"
							class="w-[115px] h-[32px]"
							alt="logo"
						/>
					</NuxtLink>
					<CustomThemeSwitch />
				</div>
			</div>
			<FormHeader v-if="!$route.fullPath.match(/\/job\/\d+/g)" />
		</div>
	</header>
</template>

<script setup lang="ts"></script>

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
