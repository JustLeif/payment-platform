import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	return {
		searchParams: url.searchParams
	};
};
