import { JobType } from "~/types/Job";

const contractRecord: Record<string, boolean> = {
	"Part Time": false,
	"Full Time": true,
	Freelance: false,
};

interface Filters {
	mainFilter: string;
	location: string;
	fullTimeOnly: boolean;
}

export function fullTimeFilter(job: JobType, filters: Filters) {
	return contractRecord[job.contract] === filters.fullTimeOnly;
}
export function locationFilter(job: JobType, filters: Filters) {
	return job.location.toLowerCase().includes(filters.location.toLowerCase());
}
function companyFilter(job: JobType, filters: Filters) {
	return job.company.toLowerCase().includes(filters.mainFilter.toLowerCase());
}
function positionFilter(job: JobType, filters: Filters) {
	return job.position
		.toLowerCase()
		.includes(filters.mainFilter.toLowerCase());
}

export function mainFilter(job: JobType, filters: Filters) {
	return companyFilter(job, filters) || positionFilter(job, filters);
}
