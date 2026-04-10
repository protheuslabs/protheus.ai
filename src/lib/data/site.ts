export type Product = {
	slug: string;
	anchor: string;
	name: string;
	category: string;
	status: string;
	summary: string;
	details: string;
	ctaHref: string;
	ctaLabel: string;
	external?: boolean;
	repo: string;
};

export type SocialPlatform = "github" | "linkedin" | "x" | "youtube" | "discord";

export const company = {
	name: "Protheus Labs",
	tagline: "Sovereign AI orchestration & local agent platform",
	description:
		"Protheus Labs builds local-first products for governed execution, auditable operator workflows, and agent-native knowledge systems."
};

export const products: Product[] = [
	{
		slug: "infring",
		anchor: "infring",
		name: "InfRing",
		category: "Runtime",
		status: "Flagship",
		summary: "Receipt-first autonomous runtime for governed operator workflows.",
		details:
			"Deterministic execution, fail-closed safety, and a local gateway/dashboard surface built around a Rust-authoritative core.",
		ctaHref: "/infring",
		ctaLabel: "Open product page",
		repo: "https://github.com/protheuslabs/InfRing"
	},
	{
		slug: "lycium",
		anchor: "lycium",
		name: "Lycium",
		category: "Learning",
		status: "Public",
		summary: "Reliability-aware learning paths generated from open internet knowledge.",
		details:
			"Learner-facing product focused on turning sprawling source material into structured, personalized knowledge journeys.",
		ctaHref: "https://github.com/protheuslabs/Lycium",
		ctaLabel: "View repository",
		external: true,
		repo: "https://github.com/protheuslabs/Lycium"
	},
	{
		slug: "prism",
		anchor: "prism",
		name: "Prism",
		category: "Governance",
		status: "Public",
		summary: "Policy-first complexity management for regulated codebases.",
		details:
			"Ownership, risk, and evidence workflows designed to simplify large regulated software estates without losing operational context.",
		ctaHref: "https://github.com/protheuslabs/Prism",
		ctaLabel: "View repository",
		external: true,
		repo: "https://github.com/protheuslabs/Prism"
	},
	{
		slug: "thoughtforge",
		anchor: "thoughtforge",
		name: "ThoughtForge",
		category: "Knowledge",
		status: "Public",
		summary: "Local-first, agent-native second brain for notes, context, tasks, and intent.",
		details:
			"Built to keep context close to the operator while giving agents durable memory, task structure, and intent-aware retrieval.",
		ctaHref: "https://github.com/protheuslabs/ThoughtForge",
		ctaLabel: "View repository",
		external: true,
		repo: "https://github.com/protheuslabs/ThoughtForge"
	},
	{
		slug: "git-warden",
		anchor: "git-warden",
		name: "Git-Warden",
		category: "Operations",
		status: "Public",
		summary: "Policy-governed multi-target repository operations for AI-assisted maintenance.",
		details:
			"Auditable repository actions, fork management, and guarded automation designed for agentic maintenance loops.",
		ctaHref: "https://github.com/protheuslabs/Git-Warden",
		ctaLabel: "View repository",
		external: true,
		repo: "https://github.com/protheuslabs/Git-Warden"
	},
	{
		slug: "lensmap",
		anchor: "lensmap",
		name: "Lensmap",
		category: "Tooling",
		status: "Internal",
		summary: "Internal tooling that reduces boilerplate inside production code files.",
		details:
			"A focused internal system for trimming repetitive implementation work and keeping large code surfaces more operable.",
		ctaHref: "https://github.com/protheuslabs/Lensmap",
		ctaLabel: "View repository",
		external: true,
		repo: "https://github.com/protheuslabs/Lensmap"
	}
];

export const principles = [
	{
		title: "Local control",
		description:
			"Systems are shaped around local-first control surfaces so teams can keep workflows close to the environments they trust."
	},
	{
		title: "Governed execution",
		description:
			"Products are oriented around policy, evidence, and auditable actions rather than opaque automation theatre."
	},
	{
		title: "Operator-grade UX",
		description:
			"Interfaces stay direct, installable, and legible, with product pages that move quickly from value proposition to real operational flow."
	}
];

export const homeHighlights = [
	"Local-first",
	"Receipt-backed",
	"Policy-aware",
	"Agent-native"
];

export const infringCapabilities = [
	{
		title: "Deterministic execution",
		description: "Evidence-backed receipts and reproducible operator workflows anchor the runtime."
	},
	{
		title: "Fail-closed safety",
		description: "Policy enforcement and safety guards are default behavior, not an afterthought."
	},
	{
		title: "Rust-authoritative core",
		description: "Core control lanes stay in Rust, with orchestration and presentation wrapped around them."
	},
	{
		title: "Gateway + dashboard",
		description:
			"Launches a supervised local gateway and dashboard surface for active runtime visibility."
	}
];

export const infringSurfaces = [
	{
		title: "Gateway and dashboard",
		description:
			"Main dashboard is served through the gateway and gives operators a practical entrypoint into the runtime."
	},
	{
		title: "CLI command surface",
		description:
			"Expose gateway, update, session, research, memory, RAG, and operational controls from one command namespace."
	},
	{
		title: "Profile-based installs",
		description:
			"Choose between full, pure, and tiny-max footprints depending on machine constraints and desired runtime surface."
	},
	{
		title: "Public SDK references",
		description:
			"A TypeScript SDK and reference apps exist alongside the runtime for deeper integration work."
	}
];

export const infringInstallModes = [
	{
		name: "Minimal",
		flag: "--minimal",
		description: "CLI plus daemon wrappers for the leanest standard install."
	},
	{
		name: "Full",
		flag: "--full",
		description: "Workspace runtime bootstrap with the richer surface area enabled."
	},
	{
		name: "Pure",
		flag: "--pure",
		description: "Rust-only runtime surface with no Node/TypeScript dependency."
	},
	{
		name: "Tiny-Max",
		flag: "--tiny-max",
		description: "Lowest-footprint pure profile for more constrained hardware."
	}
];

export const infringInstallCommands = {
	mac: {
		label: "macOS",
		detectedLabel: "macOS / Unix-like",
		hint: "Uses the public quick-start from the InfRing README.",
		command:
			"curl -fsSL https://raw.githubusercontent.com/protheuslabs/InfRing/main/install.sh | sh -s -- --full\ninfring gateway"
	},
	windows: {
		label: "Windows",
		detectedLabel: "Windows",
		hint: "Uses the PowerShell quick-start from the InfRing README.",
		command:
			"Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force\n$tmp = Join-Path $env:TEMP \"infring-install.ps1\"\nirm https://raw.githubusercontent.com/protheuslabs/InfRing/main/install.ps1 -OutFile $tmp\n& $tmp -Repair -Full\nRemove-Item $tmp -Force\nGet-Command infring -ErrorAction SilentlyContinue\ninfring gateway"
	}
} as const;

export const footerSections = [
	{
		title: "Products",
		items: [
			{ label: "InfRing", href: "/infring" },
			{ label: "Lycium", href: "https://github.com/protheuslabs/Lycium", external: true },
			{ label: "Prism", href: "https://github.com/protheuslabs/Prism", external: true },
			{
				label: "ThoughtForge",
				href: "https://github.com/protheuslabs/ThoughtForge",
				external: true
			}
		]
	},
	{
		title: "Company",
		items: [
			{ label: "GitHub organization", href: "https://github.com/protheuslabs", external: true },
			{
				label: "LinkedIn",
				href: "https://www.linkedin.com/company/111916065",
				external: true
			}
		]
	},
	{
		title: "Resources",
		items: [
			{
				label: "InfRing README",
				href: "https://github.com/protheuslabs/InfRing/blob/main/README.md",
				external: true
			},
			{
				label: "InfRing install script",
				href: "https://github.com/protheuslabs/InfRing/blob/main/install.sh",
				external: true
			}
		]
	}
];

export const socialLinks: Array<{
	name: string;
	platform: SocialPlatform;
	href: string;
}> = [
	{ name: "GitHub", platform: "github", href: "" },
	{ name: "X", platform: "x", href: "" },
	{ name: "LinkedIn", platform: "linkedin", href: "https://www.linkedin.com/company/111916065" },
	{ name: "YouTube", platform: "youtube", href: "" },
	{ name: "Discord", platform: "discord", href: "" }
];
