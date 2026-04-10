<script lang="ts">
	import BrandMark from "$lib/components/brand-mark.svelte";
	import SocialIcon from "$lib/components/social-icon.svelte";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import { company, footerSections, socialLinks } from "$lib/data/site.js";

	const visibleSocials = $derived(socialLinks.filter((link) => link.href.trim().length > 0));
</script>

<footer class="border-t border-border/70 bg-background/80">
	<div class="site-shell py-16">
		<div class="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
			<div class="space-y-6">
				<div class="flex items-center gap-4">
					<BrandMark size="md" />
					<div class="space-y-1">
						<p class="section-label">Protheus Labs</p>
						<h2 class="text-2xl font-semibold">{company.tagline}</h2>
					</div>
				</div>
				<p class="max-w-2xl text-base leading-7 text-muted-foreground">
					{company.description}
				</p>
				<Badge variant="outline" class="rounded-full border-border/80 bg-card/80 px-3 py-1">
					Legitimate product shell, ready for real brand assets and additional product pages.
				</Badge>
			</div>

			<div class="grid gap-8 sm:grid-cols-3">
				{#each footerSections as section}
					<div>
						<p class="section-label mb-4">{section.title}</p>
						<ul class="space-y-3">
							{#each section.items as item}
								<li>
									<a
										href={item.href}
										target={item.external ? "_blank" : undefined}
										rel={item.external ? "noreferrer" : undefined}
										class="text-sm leading-6 text-muted-foreground transition hover:text-foreground"
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<Separator class="my-8" />

		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<p class="text-sm text-muted-foreground">
				Protheus Labs website concept, informed by the current public organization profile and
				InfRing quick-start flow.
			</p>

			{#if visibleSocials.length > 0}
				<div class="flex items-center gap-2">
					{#each visibleSocials as social}
						<a
							href={social.href}
							target="_blank"
							rel="noreferrer"
							aria-label={social.name}
							class="inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/75 text-muted-foreground transition hover:border-brand/40 hover:text-foreground"
						>
							<SocialIcon platform={social.platform} class="size-[1.125rem]" />
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</footer>
