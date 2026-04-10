<script lang="ts">
	import { page } from "$app/state";
	import SocialIcon from "$lib/components/social-icon.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import BrandMark from "$lib/components/brand-mark.svelte";
	import { company, products } from "$lib/data/site.js";
	import { ArrowUpRight, ChevronDown, Menu, X } from "@lucide/svelte";

	let mobileOpen = $state(false);

	const pathname = $derived(page.url.pathname);
	const navProducts = products;

	$effect(() => {
		page.url.pathname;
		mobileOpen = false;
	});

	function productHref(slug: string, anchor: string) {
		return slug === "infring" ? "/infring" : `/#${anchor}`;
	}
</script>

<header class="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
	<div class="site-shell flex h-[4.5rem] items-center gap-4">
		<a href="/" class="flex items-center gap-3">
			<BrandMark size="sm" />
			<div class="leading-tight">
				<p class="text-sm font-semibold tracking-[0.18em] uppercase text-muted-foreground">
					Protheus
				</p>
				<p class="text-sm font-medium text-foreground/90">Labs</p>
			</div>
		</a>

		<nav class="ml-auto hidden items-center gap-2 md:flex">
			<a
				href="/"
				class="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
				aria-current={pathname === "/" ? "page" : undefined}
			>
				Overview
			</a>

			<div class="group relative">
				<button
					type="button"
					class="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
					aria-label="Open products menu"
				>
					Products
					<ChevronDown class="size-4 transition duration-200 group-hover:rotate-180" />
				</button>

				<div
					class="invisible absolute right-0 top-full z-30 mt-3 w-[24rem] translate-y-2 rounded-[1.75rem] border border-border/80 bg-card/95 p-3 opacity-0 shadow-[0_30px_90px_-36px_rgba(15,23,42,0.35)] backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
				>
					<div class="grid gap-2">
						{#each navProducts as product}
							<a
								href={productHref(product.slug, product.anchor)}
								class="rounded-[1.25rem] border border-transparent p-4 transition hover:border-border hover:bg-muted/60"
							>
								<div class="mb-2 flex items-center justify-between gap-3">
									<div>
										<p class="text-sm font-semibold">{product.name}</p>
										<p class="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
											{product.category}
										</p>
									</div>
									<ArrowUpRight class="size-4 text-muted-foreground" />
								</div>
								<p class="text-sm leading-6 text-muted-foreground">{product.summary}</p>
							</a>
						{/each}
					</div>
				</div>
			</div>

			<Button
				variant="ghost"
				size="sm"
				href="https://github.com/protheuslabs"
				target="_blank"
				rel="noreferrer"
				class="rounded-full"
			>
				<SocialIcon platform="github" class="size-4" />
				GitHub
			</Button>
			<Button href="/infring" size="sm" class="rounded-full px-4">
				Explore InfRing
			</Button>
		</nav>

		<button
			type="button"
			class="ml-auto inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/70 text-foreground md:hidden"
			aria-expanded={mobileOpen}
			aria-label={mobileOpen ? "Close menu" : "Open menu"}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			{#if mobileOpen}
				<X class="size-5" />
			{:else}
				<Menu class="size-5" />
			{/if}
		</button>
	</div>

	{#if mobileOpen}
		<div class="border-t border-border/70 md:hidden">
			<div class="site-shell grid gap-4 py-5">
				<a href="/" class="rounded-2xl px-1 py-2 text-sm font-medium text-foreground">Overview</a>
				<a href="/infring" class="rounded-2xl px-1 py-2 text-sm font-medium text-foreground">
					InfRing
				</a>

				<div class="rounded-[1.5rem] border border-border/80 bg-card/75 p-3">
					<p class="section-label mb-3">Products</p>
					<div class="grid gap-2">
						{#each navProducts as product}
							<a
								href={productHref(product.slug, product.anchor)}
								class="rounded-[1rem] px-3 py-3 transition hover:bg-muted/70"
							>
								<p class="text-sm font-semibold">{product.name}</p>
								<p class="mt-1 text-sm leading-6 text-muted-foreground">{product.summary}</p>
							</a>
						{/each}
					</div>
				</div>

				<Button
					variant="outline"
					href="https://github.com/protheuslabs"
					target="_blank"
					rel="noreferrer"
					class="w-full rounded-full"
				>
					<SocialIcon platform="github" class="size-4" />
					View the organization
				</Button>
			</div>
		</div>
	{/if}
</header>
