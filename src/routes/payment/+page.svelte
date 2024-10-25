<script lang="ts">
	import AdaSvg from '$lib/components/elements/ada-svg.svelte';
	import * as Card from '$lib/components/shadcn/ui/card/index.js';
	import Separator from '$lib/components/shadcn/ui/separator/separator.svelte';
	import { browser } from '$app/environment';
	import Skeleton from '$lib/components/shadcn/ui/skeleton/skeleton.svelte';
	import { type Wallet } from '@meshsdk/core';
	import Label from '$lib/components/shadcn/ui/label/label.svelte';

	let wallets: Wallet[] | null = $state(null);
	if (browser) {
		import('@meshsdk/core').then((sdk) => {
			sdk.BrowserWallet.getAvailableWallets().then((availableWallets) => {
				wallets = availableWallets;
			});
		});
	}
</script>

<div class="absolute top-2 left-8 z-20 flex items-center text-lg font-medium p-4">
	On Chain Solutions LLC.
</div>
<div
	class="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div
		class="bg-muted relative hidden h-full flex flex-col justify-center items-center p-10 text-white lg:flex dark:border-r"
	>
		<Card.Root class="w-full max-w-md">
			<Card.Header class="font-semibold">Payment Details</Card.Header>
			<Card.Content>
				<ul class="grid gap-3">
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">
							Chain Webhook Events x <span>429</span>
						</span>
						<span class="inline-flex items-center"
							>250.458374 <AdaSvg className={'pl-1 h-6 w-6'} /></span
						>
					</li>
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">
							1-Year Premium x <span>1</span>
						</span>
						<span class="inline-flex items-center">495 <AdaSvg className={'pl-1 h-6 w-6'} /></span>
					</li>
				</ul>
				<Separator class="my-2" />
				<ul class="grid gap-3">
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">Subtotal</span>
						<span class="inline-flex items-center"
							>745.458374 <AdaSvg className={'pl-1 h-6 w-6'} /></span
						>
					</li>
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">Tax</span>
						<span class="inline-flex items-center"
							>25.128 <AdaSvg className={'pl-1 h-6 w-6'} /></span
						>
					</li>
					<li class="flex items-center justify-between font-semibold text-primary">
						<span>Total</span>
						<span class="inline-flex items-center">
							770.586374

							<AdaSvg className={'pl-1 h-6 w-6'} fillPrimary={true} /></span
						>
					</li>
				</ul>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 items-center">
			<Card.Root class="lg:hidden w-full max-w-md mt-24">
				<Card.Header class="font-semibold">Payment Details</Card.Header>
				<Card.Content>
					<ul class="grid gap-3">
						<li class="flex items-center justify-between">
							<span class="text-muted-foreground pr-4">
								Chain Webhook Events x <span>429</span>
							</span>
							<span class="inline-flex items-center"
								>250.458374 <AdaSvg className={'pl-1 h-6 w-6'} /></span
							>
						</li>
						<li class="flex items-center justify-between">
							<span class="text-muted-foreground">
								1-Year Premium x <span>1</span>
							</span>
							<span class="inline-flex items-center">495 <AdaSvg className={'pl-1 h-6 w-6'} /></span
							>
						</li>
					</ul>
					<Separator class="my-2" />
					<ul class="grid gap-3">
						<li class="flex items-center justify-between">
							<span class="text-muted-foreground">Subtotal</span>
							<span class="inline-flex items-center"
								>745.458374 <AdaSvg className={'pl-1 h-6 w-6'} /></span
							>
						</li>
						<li class="flex items-center justify-between">
							<span class="text-muted-foreground">Tax</span>
							<span class="inline-flex items-center"
								>25.128 <AdaSvg className={'pl-1 h-6 w-6'} /></span
							>
						</li>
						<li class="flex items-center justify-between font-semibold">
							<span class="text-primary">Total</span>
							<span class="inline-flex items-center text-primary">
								770.586374
								<AdaSvg fillPrimary={true} className={'pl-1 h-6 w-6'} /></span
							>
						</li>
					</ul>
				</Card.Content>
			</Card.Root>

			{#if wallets === null}
				<Label class="text-muted-foreground">Loading Cryptography Libraries...</Label>
				<div class="flex flex-wrap justify-center gap-4">
					<Skeleton class="h-36 w-36 rounded-lg" />
					<Skeleton class="h-36 w-36 rounded-lg" />
					<Skeleton class="h-36 w-36 rounded-lg" />
				</div>
			{:else}
				<div class="flex flex-wrap justify-center gap-4">
					{#each wallets as wallet}
						<Card.Root class="hover:cursor-pointer hover:bg-muted">
							<Card.Content
								><img class="h-24 w-24" src={wallet.icon} alt={wallet.name} /></Card.Content
							>
						</Card.Root>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
