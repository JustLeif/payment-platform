<script>
	import LogoSvg from '$lib/components/elements/logo-svg.svelte';
	import Button from '$lib/components/shadcn/ui/button/button.svelte';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center">
	<div>
		<LogoSvg className="w-80 pb-10"></LogoSvg>
		<span class="sr-only">xes.software logo</span>
	</div>

	<Button href="/dashboard">Dashboard</Button>
</div>
