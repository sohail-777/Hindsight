// All page content lives here so it is easy to edit without touching components.

export const NAV_LINKS = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
]

export const DEMO_DECISION = {
  title: 'Move invoicing to a third-party billing provider',
  decidedOn: 'Decided 14 Oct by Priya N.',
  why: 'Saves about 12 hours of manual invoicing every week.',
  assumptions: [
    { id: 1, text: 'Monthly churn stays under 3%', owner: 'Dana', expiresInMonth: 2 },
    { id: 2, text: 'Support team stays at six people', owner: 'Marcus', expiresInMonth: 4 },
    { id: 3, text: "Provider's fee stays at 0.8% per invoice", owner: 'Priya', expiresInMonth: 6 },
  ],
}

export const FEATURES = [
  {
    icon: 'pen',
    title: 'Decision capture',
    text: 'Log a choice in under a minute. Write what you decided, why, and what it depends on, from Slack or the web app.',
  },
  {
    icon: 'watch',
    title: 'Assumption watch',
    text: 'Give each assumption an expiry date or a metric threshold. The owner gets a nudge before it goes stale.',
  },
  {
    icon: 'replay',
    title: 'Outcome replay',
    text: 'Revisit a decision and see what you predicted next to what actually happened, with the original discussion attached.',
  },
  {
    icon: 'gauge',
    title: 'Calibration score',
    text: 'See how often your team’s assumptions hold up, and which kinds of calls you tend to over- or under-estimate.',
  },
]

export const STEPS = [
  {
    title: 'Write the decision down',
    text: 'Use the /hindsight command in Slack or the web form. Add the choice, the reasoning, and the assumptions behind it.',
  },
  {
    title: 'Set the tripwires',
    text: 'Pick an expiry date or connect a metric for each assumption. Name one owner who will be asked about it.',
  },
  {
    title: 'Get asked at the right moment',
    text: 'When an assumption expires or a number crosses its line, the owner is prompted to confirm it or reopen the decision.',
  },
]

export const PLANS = [
  {
    id: 'solo',
    name: 'Solo',
    blurb: 'A personal decision log for one person.',
    monthly: 0,
    yearly: 0,
    unit: 'free forever',
    features: ['25 active decisions', 'Email reminders', 'Calibration score for you'],
    cta: 'Start free',
  },
  {
    id: 'team',
    name: 'Team',
    blurb: 'For teams that want fewer repeat mistakes.',
    monthly: 12,
    yearly: 9,
    unit: 'per seat each month',
    features: ['Unlimited decisions', 'Slack and Notion sync', 'Outcome replay', 'Team calibration dashboard'],
    cta: 'Book a team demo',
    featured: true,
  },
  {
    id: 'organization',
    name: 'Organization',
    blurb: 'For companies with many teams and audits.',
    monthly: null,
    yearly: null,
    unit: 'custom pricing',
    features: ['Everything in Team', 'Single sign-on', 'Audit log export', 'Dedicated success manager'],
    cta: 'Talk to us',
  },
]
