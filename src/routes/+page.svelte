<script lang="ts">
	import BrandMark from '$lib/components/brand-mark.svelte';
	import ProductCard from '$lib/components/product-card.svelte';
	import SocialIcon from '$lib/components/social-icon.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import {
		company,
		homeHighlights,
		infringCapabilities,
		principles,
		products,
		proofSignals
	} from '$lib/data/site.js';
	import { ArrowRight, ShieldCheck, SquareTerminal, Workflow } from '@lucide/svelte';

	const featuredProduct = products[0];
	const supportingCards = [
		{ icon: ShieldCheck, label: 'Governed execution' },
		{ icon: Workflow, label: 'Operator workflows' },
		{ icon: SquareTerminal, label: 'Installable surfaces' }
	];
</script>

<svelte:head>
	<title>Protheus Labs</title>
	<meta
		name="description"
		content="Protheus Labs ships local-first AI products for governed execution, auditable operations, and operator-first enterprise deployment."
	/>
</svelte:head>

<section class="relative overflow-hidden border-b border-border/70">
	<div
		class="ghost-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent_82%)] opacity-40"
	></div>
	<div
		class="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
	></div>

	<div class="site-shell relative z-10 grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
		<div class="space-y-8">
			<Badge
				variant="outline"
				class="rounded-full border-border/80 bg-card/80 px-4 py-1 text-[0.68rem] tracking-[0.2em] uppercase"
			>
				{company.tagline}
			</Badge>

			<div class="space-y-5">
				<p class="section-label">Protheus Labs</p>
				<h1
					class="display-title max-w-4xl text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl xl:text-7xl"
				>
					Operator-grade AI systems that stay close to your work.
				</h1>
				<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
					Build confidence-first AI infrastructure with local-first runtime control, predictable
					installation, and operational visibility from first run to deployment.
				</p>
			</div>

			<div class="flex flex-col gap-3 sm:flex-row">
				<Button href="/infring" class="rounded-full px-5">
					Explore InfRing
					<ArrowRight class="size-4" />
				</Button>
				<Button variant="outline" href="#products" class="rounded-full px-5">
					Browse products
				</Button>
			</div>

			<div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
				{#each homeHighlights as item}
					<div
						class="rounded-full border border-border/80 bg-card/70 px-4 py-3 text-sm font-medium text-foreground/90"
					>
						{item}
					</div>
				{/each}
			</div>
		</div>

		<div class="relative">
			<Card.Root class="glass-panel ghost-grid overflow-hidden rounded-[2rem] border-border/80">
				<Card.Content class="relative space-y-8 p-8">
					<div
						class="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-brand/8 blur-3xl"
					></div>

					<div class="flex items-start gap-5">
						<BrandMark size="lg" class="size-24 shrink-0" />
						<div class="space-y-2">
							<p class="section-label">Platform profile</p>
							<h2 class="text-2xl font-semibold tracking-tight">
								Product posture built for operational teams.
							</h2>
							<p class="text-sm leading-7 text-muted-foreground">
								A practical interface language for teams evaluating real infrastructure:
								evidence-first workflows, clear install decisions, and minimal cognitive load.
							</p>
						</div>
					</div>

					<div class="grid gap-3 sm:grid-cols-3">
						{#each supportingCards as card}
							<div class="rounded-[1.5rem] border border-border/80 bg-card/80 p-4">
								<card.icon class="mb-3 size-5 text-brand" />
								<p class="text-sm font-medium">{card.label}</p>
							</div>
						{/each}
					</div>

					<div class="rounded-[1.6rem] border border-border/80 bg-background/70 p-5">
						<p class="section-label mb-2">Featured product</p>
						<h3 class="text-2xl font-semibold tracking-tight">{featuredProduct.name}</h3>
						<p class="mt-3 text-sm leading-7 text-muted-foreground">
							{featuredProduct.summary}
						</p>
						<a
							href="/infring"
							class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-brand"
						>
							Open the dedicated product page
							<ArrowRight class="size-4" />
						</a>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>

<section class="border-b border-border/70 py-16">
	<div class="site-shell">
		<div class="mx-auto max-w-6xl">
			<p class="section-label mb-6">Why this company profile reads as product-ready</p>
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{#each proofSignals as signal}
					<div class="rounded-[1.4rem] border border-border/80 bg-card/80 p-5">
						<p class="section-label mb-2">{signal.label}</p>
						<p class="text-2xl font-semibold text-balance">{signal.value}</p>
						<p class="mt-3 text-sm leading-7 text-muted-foreground">{signal.detail}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section id="products" class="py-20 lg:py-24">
	<div class="site-shell">
		<div class="max-w-3xl space-y-4">
			<p class="section-label">Products</p>
			<h2 class="display-title text-4xl leading-tight tracking-tight sm:text-5xl">
				A coherent product portfolio for runtime control, knowledge systems, and governed
				operations.
			</h2>
			<p class="text-lg leading-8 text-muted-foreground">
				We keep the narrative focused on outcomes: operational stability, evidence trails, and
				installation paths that work in real environments.
			</p>
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each products as product, index}
				<div class={index === 0 ? 'xl:col-span-2' : ''}>
					<ProductCard {product} featured={index === 0} />
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="border-y border-border/70 py-20 lg:py-24">
	<div class="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
		<div class="space-y-5">
			<p class="section-label">Platform model</p>
			<h2 class="display-title text-4xl leading-tight tracking-tight sm:text-5xl">
				Built to feel trustworthy before it ever tries to feel clever.
			</h2>
			<p class="text-lg leading-8 text-muted-foreground">
				Teams buy confidence before features. This site mirrors that: concrete capabilities, clear
				product boundaries, and transparent setup pathways.
			</p>
			<Button
				variant="outline"
				href="https://github.com/protheuslabs"
				target="_blank"
				rel="noreferrer"
				class="rounded-full px-5"
			>
				<SocialIcon platform="github" class="size-4" />
				View the organization
			</Button>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each principles as principle}
				<Card.Root class="glass-panel rounded-[1.75rem] border-border/80">
					<Card.Header class="space-y-3">
						<Card.Title class="text-xl tracking-tight">{principle.title}</Card.Title>
						<Card.Description class="text-sm leading-7 text-muted-foreground">
							{principle.description}
						</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<section class="py-20 lg:py-24">
	<div class="site-shell">
		<Card.Root class="glass-panel overflow-hidden rounded-[2rem] border-border/80">
			<Card.Content class="grid gap-10 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
				<div class="space-y-5">
					<p class="section-label">InfRing preview</p>
					<h2 class="display-title text-4xl leading-tight tracking-tight sm:text-5xl">
						InfRing already wants a true product page.
					</h2>
					<p class="text-lg leading-8 text-muted-foreground">
						The InfRing repository already includes real setup scripts, install profiles, and a
						practical local runtime flow—so the page turns source material into a launch-ready
						landing experience.
					</p>
					<Button href="/infring" class="rounded-full px-5">
						Open the InfRing page
						<ArrowRight class="size-4" />
					</Button>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					{#each infringCapabilities as capability}
						<div class="rounded-[1.5rem] border border-border/80 bg-background/70 p-5">
							<p class="text-base font-semibold tracking-tight">{capability.title}</p>
							<p class="mt-3 text-sm leading-7 text-muted-foreground">
								{capability.description}
							</p>
						</div>
					{/each}
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</section>
