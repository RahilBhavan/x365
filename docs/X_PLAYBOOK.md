# X playbook

## The content thesis

The account documents becoming a tokenization engineer in public. It is not a news feed, price-prediction account, engagement farm, or daily diary.

Audience:

- engineers building smart contracts, custody, settlement, identity, security, and developer tooling;
- product and finance practitioners working on digital assets;
- students who want technically honest explanations;
- recruiters and hiring managers who need inspectable evidence.

Promise:

> One useful artifact or lesson about building secure tokenized-asset systems every day for 365 days.

## Profile setup

**Display name:** `Your Name | x/365`

**Bio template:**

> Learning to build tokenization systems in public for 365 days. TypeScript, Ethereum, Solidity, and RWA systems. Open to US software internships. Projects: [link]

**Pinned post template:**

> Day 1/365: I am starting from zero and learning how real-world assets move onchain. I will build four focused labs and two complete products. I will publish the code, tests, mistakes, diagrams, and demonstrations. Here is the syllabus: [link]

Link to one portfolio landing page, not a link aggregator full of unrelated profiles.

## Content pillars

Use a 70/20/10 mix:

- **70% build evidence:** commits, traces, tests, diagrams, demos, bugs, reviews, and tradeoffs;
- **20% teaching:** standards, accounting, security, market structure, and source-code walkthroughs;
- **10% reflection/career:** progress reviews, events, OSS lessons, asks, and internship milestones.

Avoid market-price commentary unless it directly affects a technical design and is sourced. Avoid announcing what you will build repeatedly; show what changed.

## Daily post formula

Each post should contain:

1. `Day N/365` and a concrete claim;
2. one useful artifact: image, diagram, 15–45 second clip, code diff, test trace, or linked commit;
3. why it matters in a tokenization system;
4. one limitation, surprise, or tradeoff;
5. a narrow question when genuine feedback would change the work.

Keep most posts under 150–220 words. The artifact carries the proof.

### Six reusable formats

**Build**

> Day 43/365. I implemented ___. The interesting constraint was ___. I chose ___ over ___ because ___. This test proves ___. Remaining risk: ___. [commit]

**Bug**

> Day 88/365. This test broke my assumption that ___. Root cause: ___. The fix was ___. The new invariant is ___. [failing and passing trace]

**Diagram**

> Day 121/365. Where does ownership actually live in this design? The diagram separates the token, transfer-agent record, custodian, and legal agreement. If ___ disagrees with ___, the recovery path is ___. [diagram]

**Spec note**

> Day 180/365. ERC-4626 requires ___ to round ___. A one-unit mistake can ___. Here is the smallest example and test I used to understand it. [source and test]

**Tradeoff**

> Day 230/365. I rejected ___ for this prototype. It would improve ___ but adds the trust assumption ___. The trigger to revisit the decision is ___. [ADR]

**Demo**

> Day 310/365. Failure demo: the NAV feed is stale during redemption. Expected behavior: ___. Actual interface and operator response: ___. The system deliberately still allows ___. [clip]

## Weekly publishing rhythm

The topic comes from the syllabus; the format rotates:

- Monday: primary-source concept or diagram;
- Tuesday: smallest code proof;
- Wednesday: design decision;
- Thursday: adversarial test or failure;
- Friday: integration/demo;
- Saturday: weekly technical thread/build log;
- Sunday: retrospective, next question, and credit to people/sources that helped.

The weekly thread follows: problem → model → implementation → failure → test evidence → tradeoff → next risk. Link a fuller GitHub build log for readers who want details.

## Monthly anchor content

At the end of each four-week block, publish:

- a 2-minute demo or architecture tour;
- a concise "what I believed and what changed" retrospective;
- a portfolio index update;
- one specific request for technical review.

At Days 90, 180, 270, and 365, publish a long-form case study. These are the pieces to send in applications.

## Relationship system

Daily posting alone rarely creates strong professional relationships. Each week:

- write five substantive replies that add an example, source, test, or thoughtful question;
- thank and follow up with anyone whose feedback changes the work;
- have one 15–20 minute conversation with a builder, researcher, alum, professor, or recruiter;
- review one relevant open-source issue or pull request before asking its maintainers for time;
- keep a private relationship log with last interaction, interests, promised follow-up, and next useful action.

Do not cold-message "can you refer me?" Start with their work, make a small useful contribution, ask a narrow question, apply their advice, and report back.

## Quality checklist before posting

- Is the claim true and supported by the linked artifact/source?
- Does the screenshot expose a key, address you meant to keep private, personal data, or internal message?
- Am I calling a prototype "secure," "audited," "compliant," or "production-ready" without evidence?
- Can a reader learn something without already following the series?
- Did I explain why the technical detail matters?
- Is the source primary where possible?
- Is the post understandable without inflated language or unexplained acronyms?

## Metrics that matter

Review monthly, not hourly:

- substantive replies from practitioners;
- project clicks, clones, stars, issues, and repeat visitors;
- code-review feedback and OSS merges;
- conversations, referrals, recruiter messages, interviews, and offers;
- which topics attract the right people, not merely the most impressions.

Do not delete low-performing posts to curate a false streak. Correct material errors publicly and link the correction.

## Sustainable rules

- Keep a seven-post buffer of evergreen explanations, but label posts with the actual publishing day.
- Batch diagrams and demo capture on Saturday; do not batch fake daily progress.
- Reuse one artifact across X, the weekly build log, README, and interview story.
- If school or health requires a break, say so once, resume honestly, and preserve the learning objective over the streak.
- Spend at most 20% of project time producing content.
