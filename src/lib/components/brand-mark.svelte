<script lang="ts">
	import { cn } from "$lib/utils.js";

	const sizeClasses = {
		sm: "size-9",
		md: "size-[4.5rem]",
		lg: "size-[7rem]"
	} as const;

	let {
		size = "md",
		class: className = ""
	}: {
		size?: keyof typeof sizeClasses;
		class?: string;
	} = $props();
</script>

<div
	class={cn(
		"relative inline-flex aspect-square rounded-full border border-border/80 bg-card shadow-[0_18px_54px_-28px_rgba(15,23,42,0.35)]",
		sizeClasses[size],
		className
	)}
	aria-hidden="true"
>
	<div
		class="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_28%,rgba(255,255,255,0.96),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.96),rgba(219,229,241,0.64)_58%,rgba(51,65,85,0.18))] dark:bg-[radial-gradient(circle_at_28%_28%,rgba(255,255,255,0.2),transparent_34%),linear-gradient(145deg,rgba(82,95,113,0.72),rgba(7,10,14,0.98))]"
	></div>
	<div class="absolute inset-[18%] rounded-full border border-black/6 dark:border-white/10"></div>
	<div class="absolute inset-[42%] rounded-full bg-white/80 dark:bg-white/12"></div>
</div>
