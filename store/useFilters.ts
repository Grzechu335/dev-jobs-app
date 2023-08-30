import { defineStore } from "pinia";

export const useFilters = defineStore("filters", {
	state: () => ({
		mainFilter: "",
		location: "",
		fullTimeOnly: false,
	}),
	getters: {
		getFilters: (state) => state,
	},
	actions: {
		resetFilters() {
			this.mainFilter = "";
			this.location = "";
			this.fullTimeOnly = false;
		},
	},
});
