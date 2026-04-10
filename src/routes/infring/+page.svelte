<script lang="ts">
	import InstallCommandTabs from "$lib/components/install-command-tabs.svelte";
	import SocialIcon from "$lib/components/social-icon.svelte";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import {
		infringCapabilities,
		infringInstallModes,
		infringSurfaces
	} from "$lib/data/site.js";
	import {
		ArrowUpRight,
		ReceiptText,
		ShieldCheck,
		SquareTerminal,
		Workflow
	} from "@lucide/svelte";

	const capabilityIcons = [ReceiptText, ShieldCheck, Workflow, SquareTerminal];
	const operatingSteps = [
		{
			title: "Install the runtime",
			description: "Run the quick-start for your platform and choose the footprint you want."
		},
		{
			title: "Launch the gateway",
			description:
				"Start the supervised local gateway and move directly into the dashboard-backed surface."
		},
		{
			title: "Operate with evidence",
			description:
				"Use the runtime, CLI, or SDK surfaces while staying inside a governed, receipt-first loop."
		}
	];
</script>

<svelte:head>
	<title>InfRing | Protheus Labs</title>
	<meta
		name="description"
		content="InfRing is Protheus Labs' receipt-first autonomous runtime with policy-aware execution, local gateway tooling, and profile-based installs."
	/>
</svelte:head>

<section class="relative overflow-hidden border-b border-border/70">
	<div
		class="ghost-grid pointer-events-none absolute inset-0 opacity-35 [mask-image:linear-gradient(to_bottom,white,transparent_84%)]"
	></div>
	<div class="pointer-events-none absolute left-0 top-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl"></div>

	<div class="site-shell relative z-10 grid gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
		<div class="space-y-8">
			<Badge
				variant="outline"
				class="rounded-full border-border/80 bg-card/80 px-4 py-1 text-[0.68rem] uppercase tracking-[0.2em]"
			>
				Flagship runtime
			</Badge>

			<div class="space-y-5">
				<p class="section-label">InfRing</p>
				<h1 class="display-title max-w-4xl text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl">
					A local-first runtime for autonomous systems that need evidence, policy, and
					operator trust.
				</h1>
				<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
					InfRing is described publicly as a deterministic, receipt-first autonomous runtime
					built around a Rust-first control surface and a supervised gateway workflow. This
					page turns that repository story into a real product experience.
				</p>
			</div>

			<div class="flex flex-col gap-3 sm:flex-row">
				<Button
					href="https://github.com/protheuslabs/InfRing"
					target="_blank"
					rel="noreferrer"
					class="rounded-full px-5"
				>
					<SocialIcon platform="github" class="size-4" />
					View repository
				</Button>
				<Button
					variant="outline"
					href="https://github.com/protheuslabs/InfRing/blob/main/README.md"
					target="_blank"
					rel="noreferrer"
					class="rounded-full px-5"
				>
					README and quick-start
				</Button>
			</div>

			<div class="grid gap-3 sm:grid-cols-2">
				<div class="rounded-[1.4rem] border border-border/80 bg-card/70 p-4">
					<p class="section-label mb-2">Gateway</p>
					<p class="text-sm leading-7 text-muted-foreground">
						Public docs point operators to a local gateway and dashboard flow rather than a
						vague hosted abstraction.
					</p>
				</div>
				<div class="rounded-[1.4rem] border border-border/80 bg-card/70 p-4">
					<p class="section-label mb-2">Profiles</p>
					<p class="text-sm leading-7 text-muted-foreground">
						Install minimal, full, pure, or tiny-max depending on how much runtime surface
						you want available.
					</p>
				</div>
			</div>
		</div>

		<div class="relative">
			<InstallCommandTabs />
		</div>
	</div>
</section>

<section class="py-20 lg:py-24">
	<div class="site-shell">
		<div class="max-w-3xl space-y-4">
			<p class="section-label">What the product showcases</p>
			<h2 class="display-title text-4xl leading-tight tracking-tight sm:text-5xl">
				Everything a legitimate runtime page should answer quickly.
			</h2>
			<p class="text-lg leading-8 text-muted-foreground">
				Why it exists, how it installs, what surfaces it exposes, and how it behaves under
				operator control.
			</p>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
			{#each infringCapabilities as capability, index}
				{@const Icon = capabilityIcons[index]}
				<Card.Root class="glass-panel rounded-[1.75rem] border-border/80">
					<Card.Header class="space-y-4">
						<div class="inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-background/80">
							<Icon class="size-5 text-brand" />
						</div>
						<Card.Title class="text-xl tracking-tight">{capability.title}</Card.Title>
						<Card.Description class="text-sm leading-7 text-muted-foreground">
							{capability.description}
						</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<section class="border-y border-border/70 py-20 lg:py-24">
	<div class="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
		<div class="space-y-5">
			<p class="section-label">Operator surfaces</p>
			<h2 class="display-title text-4xl leading-tight tracking-tight sm:text-5xl">
				InfRing reads like a product, not just a codebase.
			</h2>
			<p class="text-lg leading-8 text-muted-foreground">
				The public material already exposes install modes, gateway behavior, SDK surfaces, and
				CLI operations. This page simply makes those surfaces scannable.
			</p>
			<p class="text-sm leading-7 text-muted-foreground">
				The README also notes a dashboard path at
				<code class="rounded bg-card px-1.5 py-1 text-foreground">127.0.0.1:4173/dashboard#chat</code>
				and a health endpoint at
				<code class="rounded bg-card px-1.5 py-1 text-foreground">127.0.0.1:4173/healthz</code>.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each infringSurfaces as surface}
				<Card.Root class="glass-panel rounded-[1.75rem] border-border/80">
					<Card.Header class="space-y-3">
						<Card.Title class="text-xl tracking-tight">{surface.title}</Card.Title>
						<Card.Description class="text-sm leading-7 text-muted-foreground">
							{surface.description}
						</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<section class="py-20 lg:py-24">
	<div class="site-shell">
		<div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-3xl space-y-4">
				<p class="section-label">Install modes</p>
				<h2 class="display-title text-4xl leading-tight tracking-tight sm:text-5xl">
					Profile-based installs make the runtime legible.
				</h2>
				<p class="text-lg leading-8 text-muted-foreground">
					Instead of one monolithic setup path, the public install flow exposes clear runtime
					profiles that map to operator needs and hardware constraints.
				</p>
			</div>

			<a
				href="https://github.com/protheuslabs/InfRing/blob/main/README.md#install-modes"
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-brand"
			>
				See the source section
				<ArrowUpRight class="size-4" />
			</a>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
			{#each infringInstallModes as mode}
				<Card.Root class="glass-panel rounded-[1.75rem] border-border/80">
					<Card.Header class="space-y-4">
						<Badge
							variant="outline"
							class="rounded-full border-border/80 bg-background/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em]"
						>
							{mode.flag}
						</Badge>
						<Card.Title class="text-xl tracking-tight">{mode.name}</Card.Title>
						<Card.Description class="text-sm leading-7 text-muted-foreground">
							{mode.description}
						</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>

		<div class="mt-10 overflow-hidden rounded-[2rem] border border-border/80 bg-card/80">
			<div class="grid gap-6 p-8 lg:grid-cols-3 lg:p-10">
				{#each operatingSteps as step}
					<div class="space-y-3">
						<p class="section-label">{step.title}</p>
						<p class="text-sm leading-7 text-muted-foreground">{step.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
