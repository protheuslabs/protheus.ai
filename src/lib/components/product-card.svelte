<script lang="ts">
	import * as Card from "$lib/components/ui/card/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import type { Product } from "$lib/data/site.js";
	import { cn } from "$lib/utils.js";
	import { ArrowUpRight } from "@lucide/svelte";

	let {
		product,
		featured = false
	}: {
		product: Product;
		featured?: boolean;
	} = $props();
</script>

<Card.Root
	id={product.anchor}
	class={cn(
		"glass-panel group h-full rounded-[1.75rem] border-border/80 transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_28px_100px_-42px_rgba(15,23,42,0.35)]",
		featured && "bg-card"
	)}
>
	<Card.Header class="space-y-6">
		<div class="flex items-center justify-between gap-4">
			<Badge
				variant="outline"
				class="rounded-full border-border/70 bg-background/80 px-3 py-1 text-[0.65rem] tracking-[0.18em] uppercase"
			>
				{product.category}
			</Badge>
			<span class="text-xs uppercase tracking-[0.22em] text-muted-foreground">
				{product.status}
			</span>
		</div>

		<div class="space-y-3">
			<Card.Title class={cn("text-2xl tracking-tight", featured && "text-3xl")}>
				{product.name}
			</Card.Title>
			<Card.Description class="text-base leading-7 text-muted-foreground">
				{product.summary}
			</Card.Description>
		</div>
	</Card.Header>

	<Card.Content class="space-y-6">
		<p class="text-sm leading-7 text-foreground/82">{product.details}</p>

		<div class="flex items-center justify-between gap-4">
			<a
				href={product.ctaHref}
				target={product.external ? "_blank" : undefined}
				rel={product.external ? "noreferrer" : undefined}
				class="inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-brand"
			>
				{product.ctaLabel}
				<ArrowUpRight class="size-4" />
			</a>

			<a
				href={product.repo}
				target="_blank"
				rel="noreferrer"
				class="text-sm text-muted-foreground transition hover:text-foreground"
			>
				GitHub
			</a>
		</div>
	</Card.Content>
</Card.Root>
