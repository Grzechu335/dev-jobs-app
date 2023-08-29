import { defineStore } from "pinia";
import { jobs } from "../public/data";

export const useJobs = defineStore("jobs", {
	state: () => ({
		jobs: jobs,
	}),
	getters: {
		getJobs: (state) => state.jobs,
		getJob: (state) => (id: number) =>
			state.jobs.filter((job) => job.id === id)[0],
	},
});
