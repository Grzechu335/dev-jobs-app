import { defineStore } from "pinia";

export const useModal = defineStore("modal", {
	state: () => ({
		filterModal: false,
	}),
	getters: {
		getFilterModalState: (state) => state.filterModal,
	},
	actions: {
		toggleModal() {
			this.filterModal = !this.filterModal;
		},
		setModal(newValue: boolean) {
			this.filterModal = newValue;
		},
	},
});
