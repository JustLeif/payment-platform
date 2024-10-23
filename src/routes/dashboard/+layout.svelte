<script lang="ts">
	import ResponsiveMenu from '$lib/components/elements/responsive-menu.svelte';
	let { children, data } = $props();
</script>

<ResponsiveMenu path={data.path}>{@render children()}</ResponsiveMenu>
