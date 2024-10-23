<script lang="ts">
	import { buttonVariants } from '$lib/components/shadcn/ui/button/index.js';
	import * as Dialog from '$lib/components/shadcn/ui/dialog/index.js';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>Connect</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>I'm here to support you.</Dialog.Title>
			<Dialog.Description>
				<strong>leif@xes.software</strong> is my personal email. Let's get in touch.
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
