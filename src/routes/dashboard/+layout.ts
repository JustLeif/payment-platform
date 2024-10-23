import type { LayoutLoad } from './$types';
export const load: LayoutLoad = ({ url }) => {
	const path = url.pathname;
	return {
		path
	};
};
