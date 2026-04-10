<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { infringInstallCommands } from '$lib/data/site.js';
	import { Check, Copy } from '@lucide/svelte';

	type Platform = keyof typeof infringInstallCommands;

	let platform = $state<Platform>('mac');
	let copied = $state(false);
	let detectedLabel = $state<string>(infringInstallCommands.mac.detectedLabel);
	let resetHandle: ReturnType<typeof setTimeout> | undefined;

	const activeInstall = $derived(infringInstallCommands[platform]);

	function detectPlatform(): Platform {
		const userAgentData = navigator as Navigator & {
			userAgentData?: { platform?: string };
		};
		const source = [
			navigator.userAgent,
			navigator.platform,
			userAgentData.userAgentData?.platform ?? ''
		]
			.join(' ')
			.toLowerCase();

		return source.includes('win') ? 'windows' : 'mac';
	}

	async function copyActiveCommand() {
		await navigator.clipboard.writeText(activeInstall.command);
		copied = true;
		clearTimeout(resetHandle);
		resetHandle = setTimeout(() => {
			copied = false;
		}, 1800);
	}

	onMount(() => {
		platform = detectPlatform();
		detectedLabel = infringInstallCommands[platform].detectedLabel;
	});

	onDestroy(() => {
		clearTimeout(resetHandle);
	});
</script>

<div class="glass-panel rounded-[2rem] p-5 sm:p-6">
	<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
		<div class="space-y-2">
			<p class="section-label">Install InfRing</p>
			<h2 class="text-2xl font-semibold tracking-tight">
				Copy the quick-start and launch locally.
			</h2>
			<p class="text-sm leading-6 text-muted-foreground">{activeInstall.hint}</p>
		</div>

		<Badge
			variant="outline"
			class="rounded-full border-border/80 bg-background/80 px-3 py-1 text-[0.65rem] tracking-[0.18em] uppercase"
		>
			Detected {detectedLabel}
		</Badge>
	</div>

	<Tabs.Root bind:value={platform} class="mt-6 gap-4">
		<Tabs.List
			variant="line"
			class="w-full justify-start gap-4 rounded-none border-b border-border/80 bg-transparent p-0"
		>
			<Tabs.Trigger
				value="mac"
				class="rounded-none border-b-2 border-transparent px-0 pt-0 pb-3 text-sm data-[state=active]:border-brand data-[state=active]:bg-transparent data-[state=active]:text-foreground"
			>
				macOS
			</Tabs.Trigger>
			<Tabs.Trigger
				value="windows"
				class="rounded-none border-b-2 border-transparent px-0 pt-0 pb-3 text-sm data-[state=active]:border-brand data-[state=active]:bg-transparent data-[state=active]:text-foreground"
			>
				Windows
			</Tabs.Trigger>
		</Tabs.List>
	</Tabs.Root>

	<div class="mt-5 overflow-hidden rounded-[1.5rem] border border-border/80 bg-background/70">
		<div
			class="flex flex-col gap-4 border-b border-border/80 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
		>
			<div>
				<p class="text-sm font-semibold">{activeInstall.label} install</p>
				<p class="text-sm leading-6 text-muted-foreground">
					The copied snippet includes the install flow plus the gateway launch command.
				</p>
			</div>

			<Button variant="outline" size="sm" class="rounded-full" onclick={copyActiveCommand}>
				{#if copied}
					<Check class="size-4" />
					Copied
				{:else}
					<Copy class="size-4" />
					Copy command
				{/if}
			</Button>
		</div>

		<pre class="overflow-x-auto px-4 py-5 text-sm leading-7 text-foreground"><code
				>{activeInstall.command}</code
			></pre>
	</div>

	<p class="mt-4 text-sm leading-6 text-muted-foreground">
		Source: the current public quick-start in the
		<a
			href="https://github.com/protheuslabs/InfRing/blob/main/README.md"
			target="_blank"
			rel="noreferrer"
			class="font-medium text-foreground underline decoration-border underline-offset-4 transition hover:decoration-brand"
		>
			InfRing README
		</a>
		.
	</p>
</div>
