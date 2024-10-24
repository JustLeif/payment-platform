<script lang="ts">
	import Package from 'lucide-svelte/icons/package';
	import Menu from 'lucide-svelte/icons/menu';
	import Cog from 'lucide-svelte/icons/cog';
	import Image from 'lucide-svelte/icons/image';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Slash from 'svelte-radix/Slash.svelte';
	import Gauge from 'lucide-svelte/icons/gauge';

	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import * as Sheet from '$lib/components/shadcn/ui/sheet/index.js';
	import LogoSvg from './logo-svg.svelte';
	import type { Snippet } from 'svelte';
	import { Separator } from '$lib/components/shadcn/ui/separator/index.js';
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';
	import * as Breadcrumb from '$lib/components/shadcn/ui/breadcrumb/index.js';
	import SupportDialog from '$lib/components/elements/support-dialog.svelte';

	let { children, path }: { children: Snippet; path: string } = $props();

	const signOut = async () => {
		await fetch('/auth', { method: 'DELETE' });
		toast.success('Successful Sign Out!');
		goto('/auth');
	};

	const calculateBreadcrumbPath = (index: number) => {
		const splitPaths = path.split('/');
		splitPaths.shift();
		let newPath = '/';
		for (let i = 0; i < index; i++) {
			newPath += splitPaths[i];
		}
		return newPath;
	};
</script>

<div class="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
	<div class="hidden border-r bg-muted/40 md:block">
		<div class="flex h-full max-h-screen flex-col gap-2">
			<div class="flex w-full items-center justify-center p-4 text-center">
				<LogoSvg className="w-32 mt-2" />
			</div>
			<div class="w-full flex-1">
				<nav class="grid items-start text-sm font-medium">
					<a
						href="/dashboard"
						class="mx-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
						class:text-primary={path === '/dashboard'}
						class:bg-muted={path === '/dashboard'}
					>
						<Gauge class="h-4 w-4" />
						Dashboard
					</a>
					<Separator class="my-4 w-full" />
					<a
						href="/dashboard/products"
						class="mx-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
						class:text-primary={path.startsWith('/dashboard/products')}
						class:bg-muted={path.startsWith('/dashboard/products')}
					>
						<Package class="h-4 w-4" />
						Products
					</a>
					<a
						href="/dashboard/branding"
						class="mx-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
						class:text-primary={path.startsWith('/dashboard/branding')}
						class:bg-muted={path.startsWith('/dashboard/branding')}
					>
						<Image class="h-4 w-4" />
						Branding
					</a>
					<a
						href="/dashboard/settings"
						class="mx-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
						class:text-primary={path.startsWith('/dashboard/settings')}
						class:bg-muted={path.startsWith('/dashboard/settings')}
					>
						<Cog class="h-4 w-4" />
						Settings
					</a>
					<Separator class="my-4 w-full" />
					<button
						onclick={signOut}
						class="mx-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<LogOut class="h-4 w-4" />
						Sign Out
					</button>
				</nav>
			</div>
			<div class="mt-auto p-4">
				<Card.Root
					data-x-chunk-name="dashboard-02-chunk-0"
					data-x-chunk-description="A card with a call to action"
				>
					<Card.Header class="p-2 pt-0 md:p-4">
						<Card.Title>Connect with Us</Card.Title>
						<Card.Description>We invite you to get in contact with us.</Card.Description>
					</Card.Header>
					<Card.Content class="w-full p-2 pt-0 md:p-4 md:pt-0">
						<SupportDialog />
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</div>
	<Sheet.Root>
		<div class="flex flex-col">
			<Sheet.Content side="left" class="flex flex-col">
				<nav class="grid gap-2 text-lg font-medium">
					<a
						href="/dashboard"
						class="mb-4 flex items-center justify-center gap-2 text-lg font-semibold"
					>
						<LogoSvg className="w-32" />
					</a>
					<a
						href="/dashboard"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
						class:text-foreground={path === '/dashboard'}
						class:bg-muted={path === '/dashboard'}
					>
						<Gauge class="h-4 w-4" />
						Dashboard
					</a>
					<Separator class="my-4 w-full" />
					<a
						href="/dashboard/products"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
						class:text-foreground={path.startsWith('/dashboard/products')}
						class:bg-muted={path.startsWith('/dashboard/products')}
					>
						<Package class="h-4 w-4" />
						Products
					</a>
					<a
						href="/dashboard/branding"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
						class:text-foreground={path.startsWith('/dashboard/branding')}
						class:bg-muted={path.startsWith('/dashboard/branding')}
					>
						<Image class="h-4 w-4" />
						Branding
					</a>
					<a
						href="/dashboard/settings"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
						class:text-foreground={path.startsWith('/dashboard/settings')}
						class:bg-muted={path.startsWith('/dashboard/settings')}
					>
						<Cog class="h-4 w-4" />
						Settings
					</a>

					<Separator class="my-4 w-full" />
					<button
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
						onclick={signOut}
					>
						<LogOut class="h-4 w-4" />
						Sign Out
					</button>
				</nav>
				<div class="mt-auto">
					<Card.Root>
						<Card.Header>
							<Card.Title>Connect with Us</Card.Title>
							<Card.Description>We invite you to get in contact with us.</Card.Description>
						</Card.Header>
						<Card.Content>
							<SupportDialog />
						</Card.Content>
					</Card.Root>
				</div>
			</Sheet.Content>
			<main class="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
				<div class="flex gap-4 align-bottom">
					<Sheet.Trigger asChild let:builder>
						<Button variant="outline" size="icon" class="md:hidden" builders={[builder]}>
							<Menu class="h-6 w-6" />
							<span class="sr-only">Toggle navigation menu</span>
						</Button>
					</Sheet.Trigger>
					<Breadcrumb.Root>
						<Breadcrumb.List>
							{#each path.split('/') as slug, index}
								<Breadcrumb.Item class="text-lg">
									<Breadcrumb.Link href={calculateBreadcrumbPath(index)}
										>{slug.charAt(0).toUpperCase() + slug.slice(1)}</Breadcrumb.Link
									>
								</Breadcrumb.Item>
								{#if index !== path.split('/').length - 1 && index != 0}
									<Breadcrumb.Separator>
										<Slash tabindex="-1" />
									</Breadcrumb.Separator>
								{/if}
							{/each}
						</Breadcrumb.List>
					</Breadcrumb.Root>
				</div>
				{@render children()}
			</main>
		</div></Sheet.Root
	>
</div>
