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

export type ProofSignal = {
	label: string;
	value: string;
	detail: string;
};

export type SocialPlatform = 'github' | 'linkedin' | 'x' | 'youtube' | 'discord';

export const company = {
	name: 'Protheus Labs',
	tagline: 'Sovereign AI software for operator-driven teams',
	description:
		'Protheus Labs ships local-first AI products that prioritize auditable operations, operator control, and practical rollout paths for real teams.'
};

export const products: Product[] = [
	{
		slug: 'infring',
		anchor: 'infring',
		name: 'InfRing',
		category: 'Runtime',
		status: 'Flagship',
		summary: 'A receipt-first local runtime for governed autonomy.',
		details:
			'Deterministic execution with fail-closed safety patterns and a local gateway/dashboard surface.',
		ctaHref: '/infring',
		ctaLabel: 'Open product page',
		repo: 'https://github.com/protheuslabs/InfRing'
	},
	{
		slug: 'lycium',
		anchor: 'lycium',
		name: 'Lycium',
		category: 'Learning',
		status: 'Public',
		summary: 'Personalized knowledge experiences for teams and operators.',
		details:
			'Transforms source material into structured learning journeys with progress tracking and practical retention tooling.',
		ctaHref: 'https://github.com/protheuslabs/Lycium',
		ctaLabel: 'View repository',
		external: true,
		repo: 'https://github.com/protheuslabs/Lycium'
	},
	{
		slug: 'prism',
		anchor: 'prism',
		name: 'Prism',
		category: 'Governance',
		status: 'Public',
		summary: 'Policy-first controls for large code and documentation estates.',
		details:
			'Provides policy, risk, and evidence workflows that keep operations visible without blocking velocity.',
		ctaHref: 'https://github.com/protheuslabs/Prism',
		ctaLabel: 'View repository',
		external: true,
		repo: 'https://github.com/protheuslabs/Prism'
	},
	{
		slug: 'thoughtforge',
		anchor: 'thoughtforge',
		name: 'ThoughtForge',
		category: 'Knowledge',
		status: 'Public',
		summary: 'An operator-friendly, agent-native workspace for context and knowledge.',
		details:
			'Keeps context local, links intent to evidence, and keeps task handoff clear between people and agents.',
		ctaHref: 'https://github.com/protheuslabs/ThoughtForge',
		ctaLabel: 'View repository',
		external: true,
		repo: 'https://github.com/protheuslabs/ThoughtForge'
	},
	{
		slug: 'git-warden',
		anchor: 'git-warden',
		name: 'Git-Warden',
		category: 'Operations',
		status: 'Public',
		summary: 'Governed repository operations for distributed maintenance.',
		details:
			'Standardizes repo tasks with auditable actions and controlled automation for maintenance at scale.',
		ctaHref: 'https://github.com/protheuslabs/Git-Warden',
		ctaLabel: 'View repository',
		external: true,
		repo: 'https://github.com/protheuslabs/Git-Warden'
	},
	{
		slug: 'lensmap',
		anchor: 'lensmap',
		name: 'Lensmap',
		category: 'Tooling',
		status: 'Internal',
		summary: 'Internal tooling that reduces boilerplate inside production code files.',
		details:
			'A focused internal system for trimming repetitive implementation work and keeping large code surfaces more operable.',
		ctaHref: 'https://github.com/protheuslabs/Lensmap',
		ctaLabel: 'View repository',
		external: true,
		repo: 'https://github.com/protheuslabs/Lensmap'
	}
];

export const proofSignals: ProofSignal[] = [
	{
		label: 'Local-first',
		value: 'Edge-first runtime',
		detail:
			'Core control and data paths run close to your machine and infra before any optional cloud integration.'
	},
	{
		label: 'Governed automation',
		value: 'Receipt-first',
		detail:
			'Install flows and runtime actions are structured so behavior is auditable from start to execution.'
	},
	{
		label: 'Ops-focused',
		value: 'Profile-based installs',
		detail:
			'Operators can choose a minimal, full, pure, or tiny-max footprint based on hardware and risk appetite.'
	},
	{
		label: 'Open posture',
		value: 'Public references',
		detail:
			'Install scripts and repo-level references are exposed directly in the InfRing and product pages.'
	}
];

export const principles = [
	{
		title: 'Local control',
		description:
			'Products are built for environments teams already trust, so operations stay close to policy and infrastructure.'
	},
	{
		title: 'Governed execution',
		description:
			'Every useful action is designed to produce evidence first and avoid hidden, opaque behavior.'
	},
	{
		title: 'Operator-grade UX',
		description:
			'Navigation and installation stay practical: setup, safety model, and runtime controls are visible in one place.'
	}
];

export const homeHighlights = [
	'Deploy locally before you scale',
	'Receipt-backed operations',
	'Policy-aware controls',
	'Fast onboarding'
];

export const infringCapabilities = [
	{
		title: 'Deterministic execution',
		description: 'Evidence-backed receipts and reproducible operator workflows anchor the runtime.'
	},
	{
		title: 'Fail-closed safety',
		description: 'Policy enforcement and safety guards are default behavior, not an afterthought.'
	},
	{
		title: 'Rust-authoritative core',
		description:
			'Core control lanes stay in Rust, with orchestration and presentation wrapped around them.'
	},
	{
		title: 'Gateway + dashboard',
		description:
			'Launches a supervised local gateway and dashboard surface for active runtime visibility.'
	}
];

export const infringSurfaces = [
	{
		title: 'Gateway and dashboard',
		description:
			'Main dashboard is served through the gateway and gives operators a practical entrypoint into the runtime.'
	},
	{
		title: 'CLI command surface',
		description:
			'Expose gateway, update, session, research, memory, RAG, and operational controls from one command namespace.'
	},
	{
		title: 'Profile-based installs',
		description:
			'Choose between full, pure, and tiny-max footprints depending on machine constraints and desired runtime surface.'
	},
	{
		title: 'Public SDK references',
		description:
			'A TypeScript SDK and reference apps exist alongside the runtime for deeper integration work.'
	}
];

export const infringInstallModes = [
	{
		name: 'Minimal',
		flag: '--minimal',
		description: 'CLI plus daemon wrappers for the leanest standard install.'
	},
	{
		name: 'Full',
		flag: '--full',
		description: 'Workspace runtime bootstrap with the richer surface area enabled.'
	},
	{
		name: 'Pure',
		flag: '--pure',
		description: 'Rust-only runtime surface with no Node/TypeScript dependency.'
	},
	{
		name: 'Tiny-Max',
		flag: '--tiny-max',
		description: 'Lowest-footprint pure profile for more constrained hardware.'
	}
];

export const infringInstallCommands = {
	mac: {
		label: 'macOS',
		detectedLabel: 'macOS / Unix-like',
		hint: 'Uses the public quick-start from the InfRing README.',
		command:
			'curl -fsSL https://raw.githubusercontent.com/protheuslabs/InfRing/main/install.sh | sh -s -- --full\ninfring gateway'
	},
	windows: {
		label: 'Windows',
		detectedLabel: 'Windows',
		hint: 'Uses the PowerShell quick-start from the InfRing README.',
		command:
			'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force\n$tmp = Join-Path $env:TEMP "infring-install.ps1"\nirm https://raw.githubusercontent.com/protheuslabs/InfRing/main/install.ps1 -OutFile $tmp\n& $tmp -Repair -Full\nRemove-Item $tmp -Force\nGet-Command infring -ErrorAction SilentlyContinue\ninfring gateway'
	}
} as const;

export const footerSections = [
	{
		title: 'Products',
		items: [
			{ label: 'InfRing', href: '/infring' },
			{ label: 'Lycium', href: 'https://github.com/protheuslabs/Lycium', external: true },
			{ label: 'Prism', href: 'https://github.com/protheuslabs/Prism', external: true },
			{
				label: 'ThoughtForge',
				href: 'https://github.com/protheuslabs/ThoughtForge',
				external: true
			}
		]
	},
	{
		title: 'Company',
		items: [
			{ label: 'GitHub organization', href: 'https://github.com/protheuslabs', external: true },
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/company/111916065',
				external: true
			}
		]
	},
	{
		title: 'Resources',
		items: [
			{
				label: 'InfRing README',
				href: 'https://github.com/protheuslabs/InfRing/blob/main/README.md',
				external: true
			},
			{
				label: 'InfRing install script',
				href: 'https://github.com/protheuslabs/InfRing/blob/main/install.sh',
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
	{ name: 'GitHub', platform: 'github', href: '' },
	{ name: 'X', platform: 'x', href: '' },
	{ name: 'LinkedIn', platform: 'linkedin', href: 'https://www.linkedin.com/company/111916065' },
	{ name: 'YouTube', platform: 'youtube', href: '' },
	{ name: 'Discord', platform: 'discord', href: '' }
];
