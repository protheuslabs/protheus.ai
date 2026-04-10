<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteFooter from '$lib/components/site-footer.svelte';
	import SiteHeader from '$lib/components/site-header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="application-name" content="Protheus Labs" />
</svelte:head>

<div class="min-h-dvh overflow-x-clip">
	<SiteHeader />
	<main class="relative">
		{@render children()}
	</main>
	<SiteFooter />
</div>
