export type ModuleDetail = {
  slug: string
  title: string
  icon: 'clock' | 'map' | 'book' | 'grid'
  shortDescription: string
  longDescription: string
  accent: 'neutral' | 'cyan' | 'purple'
  tagline: string
  outcomes: string[]
  featurePillars: { title: string; description: string }[]
  workflow: { step: string; description: string }[]
  useCases: string[]
  ctaLabel: string
}

export const modules: ModuleDetail[] = [
  {
    slug: 'sessions',
    title: 'Sessions',
    icon: 'clock',
    shortDescription: 'Live capture, chronological logs, and session recall without friction during play.',
    longDescription:
      'Sessions is the runtime layer of AraE. It captures what happened during the game, preserves chronology, and turns chaotic note taking into a reliable timeline you can audit later.',
    accent: 'neutral',
    tagline: 'Keep pace with the table without sacrificing structure.',
    outcomes: [
      'Capture NPCs, clues, hooks, and outcomes while the game is live.',
      'Generate a coherent session recap instead of reconstructing it from scraps.',
      'Trace consequences across past sessions through linked timeline entries.',
    ],
    featurePillars: [
      {
        title: 'Live capture bar',
        description: 'Record quick notes, tags, and references in seconds without leaving the flow of the scene.',
      },
      {
        title: 'Timeline fidelity',
        description: 'Every event remains anchored in sequence, which makes later review and summary generation much more reliable.',
      },
      {
        title: 'Session recap builder',
        description: 'Convert raw logs into a structured summary you can share, archive, and connect to the rest of the campaign.',
      },
    ],
    workflow: [
      { step: 'Capture key beats in real time', description: 'Tag scenes, NPCs, discoveries, and player choices as they happen.' },
      { step: 'Review after the session', description: 'Clean up entries, merge duplicates, and elevate quick notes into durable records.' },
      { step: 'Publish the summary', description: 'Create a readable recap that stays connected to world entities and rules references.' },
    ],
    useCases: ['Campaign recap generation', 'Long-arc clue tracking', 'Chronology reconstruction', 'Retcon prevention'],
    ctaLabel: 'Use Sessions as the runtime memory of the campaign',
  },
  {
    slug: 'world',
    title: 'World',
    icon: 'map',
    shortDescription: 'Structured entities, factions, locations, and relationships in one campaign atlas.',
    longDescription:
      'World is the persistent knowledge graph of the campaign. It stores your NPCs, locations, organizations, lore fragments, and cross-links them so your setting remains navigable as it grows.',
    accent: 'cyan',
    tagline: 'Turn scattered worldbuilding into a browsable campaign atlas.',
    outcomes: [
      'Preserve clarity across dozens of places, factions, and unresolved threads.',
      'Map relationships explicitly so connections are not trapped in prose notes.',
      'Link sessions back to the people and places they changed.',
    ],
    featurePillars: [
      {
        title: 'Entity records',
        description: 'Store canonical information for NPCs, locations, items, and factions in a format you can actually query later.',
      },
      {
        title: 'Relationship mapping',
        description: 'Track alliances, rivalries, dependencies, and historical ties across the setting.',
      },
      {
        title: 'Lore that stays anchored',
        description: 'Connect discoveries and world facts to source sessions, references, and affected entities.',
      },
    ],
    workflow: [
      { step: 'Create or enrich entities', description: 'Promote people, places, and groups from rough mentions into canonical records.' },
      { step: 'Connect the graph', description: 'Add relationships, ownership, geography, and history between records.' },
      { step: 'Use the atlas during prep', description: 'Navigate the setting quickly when building scenes, travel, politics, or continuity checks.' },
    ],
    useCases: ['NPC management', 'Faction politics', 'Setting continuity', 'Travel and location prep'],
    ctaLabel: 'Build a world model that survives long campaigns',
  },
  {
    slug: 'rules',
    title: 'Rules',
    icon: 'book',
    shortDescription: 'A searchable rules layer for snippets, rulings, edge cases, and house rules.',
    longDescription:
      'Rules is the reference layer of AraE. It centralizes the system text you actually need at the table and connects rulings back to the sessions and modules where they matter.',
    accent: 'neutral',
    tagline: 'Keep rulings, references, and house rules consistent over time.',
    outcomes: [
      'Find important snippets quickly instead of digging through PDFs and bookmarks.',
      'Capture house rules explicitly so they stay stable across months of play.',
      'Connect rulings to sessions, modules, and prep material where they matter.',
    ],
    featurePillars: [
      {
        title: 'Search-first references',
        description: 'Use fast retrieval instead of manual browsing when the table needs an answer immediately.',
      },
      {
        title: 'House-rule tracking',
        description: 'Separate canonical source text from local adjudications and custom mechanics.',
      },
      {
        title: 'Contextual linkage',
        description: 'Attach rule entries to scenarios, modules, and session events so the right information appears in the right place.',
      },
    ],
    workflow: [
      { step: 'Import or summarize the rules you use', description: 'Bring in the parts of the system that matter for your campaign and table.' },
      { step: 'Layer rulings on top', description: 'Record interpretations, caveats, and edge-case decisions as they emerge in play.' },
      { step: 'Reference during prep or play', description: 'Resolve disputes faster with an organized, searchable source of truth.' },
    ],
    useCases: ['House-rule governance', 'Rules lookup', 'Edge-case adjudication', 'Scenario-specific references'],
    ctaLabel: 'Keep your rules layer searchable and stable',
  },
  {
    slug: 'gm-toolbox',
    title: 'GM Toolbox',
    icon: 'grid',
    shortDescription: 'Prep tools, scenario framing, reusable checklists, and practical campaign operations.',
    longDescription:
      'GM Toolbox is the planning surface of AraE. It helps you prepare scenes, organize operational checklists, and keep campaign administration under control without bloating the runtime experience.',
    accent: 'purple',
    tagline: 'Move prep out of ad hoc documents and into a reusable system.',
    outcomes: [
      'Prepare scenes and arcs with reusable structures instead of blank pages.',
      'Keep prep assets aligned with world entities, rules, and recent session outcomes.',
      'Reuse templates, checklists, and scenario frameworks across campaigns.',
    ],
    featurePillars: [
      {
        title: 'Scenario architect',
        description: 'Outline scenes, tensions, clues, reveals, and branching consequences before the session starts.',
      },
      {
        title: 'Reusable templates',
        description: 'Standardize your prep process with checklists and planning blocks you can copy forward.',
      },
      {
        title: 'Operational overview',
        description: 'Track what still needs attention before the next game: maps, stat blocks, unresolved hooks, or reminders.',
      },
    ],
    workflow: [
      { step: 'Choose a prep template', description: 'Start from a scenario or session-prep structure instead of rebuilding from nothing.' },
      { step: 'Connect relevant assets', description: 'Attach the NPCs, places, rules references, and prior events that matter.' },
      { step: 'Run a final readiness pass', description: 'Use checklists and task markers to confirm the next session is operationally ready.' },
    ],
    useCases: ['Session prep', 'Arc design', 'Scenario checklists', 'Campaign operating system'],
    ctaLabel: 'Turn preparation into a reusable operating system',
  },
]

export function getModuleBySlug(slug: string) {
  return modules.find((item) => item.slug === slug)
}
