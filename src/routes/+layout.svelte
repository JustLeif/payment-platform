<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { Toaster } from '$lib/components/shadcn/ui/sonner';

	import { onNavigate } from '$app/navigation';

	// View transition for chrome.
	onNavigate((navigation) => {
		if (!(document as any).startViewTransition) return;
		return new Promise((resolve) => {
			(document as any).startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Toaster />
{@render children()}
