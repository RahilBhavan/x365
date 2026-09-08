# Course strategy

## Starting point

The learner begins at level 0 in programming, web development, Ethereum, Solidity, testing, finance, and public portfolio work. The course must teach ordinary software engineering before it asks the learner to secure financial smart contracts.

The learner is a US citizen and can pursue US roles without sponsorship. The plan assumes a Summer 2027 internship search, but graduation-year requirements still need to be checked on every application.

## Career position

The primary target is a full-stack crypto software role. Backend and blockchain infrastructure are the secondary strengths. Solidity and RWA tokenization provide the specialization.

This position keeps the application pool wider than a Solidity-only search. It also produces better tokenization projects because real systems include web interfaces, databases, workers, indexing, monitoring, and recovery processes.

## What world-class means this year

A beginner cannot become a world-class professional in 365 days. That claim would make the project less credible. The course instead aims for world-class learning habits and unusually strong junior evidence.

By Day 365, the learner must be able to:

- build a typed full-stack application without following a tutorial line by line;
- write and test a Solidity system that uses standard contracts;
- derive meaningful properties and test them with fuzz and invariant tests;
- explain what a Share Token represents and what it does not represent;
- model failure across onchain and offchain records;
- present two projects to an experienced engineer and answer detailed questions;
- pass junior software-engineering interviews and discuss crypto-specific risks;
- accept criticism, fix the work, and record what changed.

## One case study

The course uses a fictional short-duration Treasury fund. The same case appears in accounting lessons, settlement simulations, the permissioned-fund project, and the capstone.

The repeated model is deliberate. Changing asset classes would add vocabulary without adding engineering depth. The glossary in [CONTEXT.md](../CONTEXT.md) separates the Fund Share from its Share Token and names each fictional party.

## Portfolio shape

The portfolio contains four learning labs and two flagships:

1. Asset Record Lab
2. Onchain Ownership Lab
3. Settlement Failure Lab
4. Vault Attack Lab
5. TreasuryFlow, a permissioned tokenized-fund application
6. RWA Settlement Engine, an asynchronous subscription and redemption capstone

The labs answer narrow technical questions. The flagships combine those answers into complete products.

## How each week works

Every syllabus week follows the same seven-day loop:

| Day | Work | Evidence |
| ---: | --- | --- |
| 1 | Complete the lesson and write questions. | Notes and one concept explanation. |
| 2 | Follow a guided exercise. | Working example and test output. |
| 3 | Solve a related task without copying the example. | Commit and short design note. |
| 4 | Break, debug, and test the work. | Failing test, fix, and lesson. |
| 5 | Review vocabulary and explain the week's hardest idea. | Short X post or private draft. |
| 6 | Finish the weekly artifact. | Tagged release, demo, or build log. |
| 7 | Review the week and do career work. | Tracker update and next-week plan. |

Days 1 through 7 repeat for 52 weeks. Day 365 is the final portfolio launch.

## Time allocation

Use the 18-hour weekly budget this way:

| Work | Hours |
| --- | ---: |
| Lessons and primary-source reading | 5 |
| Implementation | 8 |
| Testing and security | 2.5 |
| Writing and review | 1.5 |
| Interview and career work | 1 |

During active recruiting, add applications to the career block or replace one hour of reading. Do not remove project testing.

The [research and source-code curriculum](READING_AND_SOURCE_CODE_PLAN.md) assigns about three hours of the lesson block to primary documentation, targeted repository study, and papers. Every source assignment must change a test, diagram, decision, explanation, or implementation.

## Project release standard

A flagship release requires:

- a defined user and problem;
- a glossary and trust-boundary diagram;
- a working local setup and public testnet demonstration;
- contracts based on accepted standards;
- unit, integration, fuzz, invariant, and end-to-end tests where relevant;
- role and authorization tests;
- a threat model and known-limitations document;
- indexed events, reconciliation, logs, and at least one recovery demonstration;
- an accessible interface with pending, success, empty, and failure states;
- continuous integration;
- a two-minute demonstration and technical case study;
- review from at least one person who did not build it.

The capstone requires three outside reviews and no known unresolved critical or high-severity security finding.

## Progress gates

| Day | Required result |
| ---: | --- |
| 30 | Write small TypeScript programs with functions, conditions, loops, arrays, and tests. |
| 60 | Build an accessible browser application that calls an API. |
| 90 | Build a Node.js API backed by SQL and explain its data model. |
| 120 | Complete the Asset Record Lab and solve basic algorithm problems aloud. |
| 180 | Explain an Ethereum transaction, write Solidity, and test an ERC-20 integration. |
| 240 | Explain fund accounting and settlement, then complete the Settlement Failure Lab. |
| 300 | Release TreasuryFlow and present its security assumptions. |
| 365 | Release the RWA Settlement Engine, finish the portfolio, and complete two mock interviews. |

If a gate fails, spend the next week repairing the gap. Remove optional features before moving the gate.

## Career system

Applications begin in Week 1 because Summer 2027 recruiting has already started. At first, the learner applies to eligible general software and fintech roles while building the crypto portfolio.

Run these tasks every week:

- complete three data-structures sessions;
- review five suitable openings;
- submit up to five applications that match the learner's eligibility;
- send three researched outreach messages;
- have or schedule one useful conversation;
- make one open-source interaction after Week 10;
- rehearse one project explanation after the first lab ships.

Application count is not the goal. Screens, technical rounds, feedback, and referrals show whether the strategy works.

## Public work

Use a real professional name and voice. Showing a face is optional. Publish code, diagrams, tests, corrections, and screen recordings. Keep private application information and personal data out of public artifacts.

The account subtitle is:

> x/365: Building Tokenization Systems in Public

The subtitle gives the short name enough context for a reader or search engine.

## Boundaries

- Use fictional participants and assets.
- Store no personal identity data.
- Use local chains and testnets only.
- Do not solicit or accept investment funds.
- Do not write custom cryptography.
- Do not copy code that you cannot explain.
- Do not treat a Policy Rule as proof of legal compliance.
- Do not add a second chain or contract language before the capstone works.
- Do not buy a course or tool until a specific learning problem justifies the cost.

Required budget is $0. An optional yearly budget of $300 to $600 can cover a domain, hosting, books, an event, or a tool that solves a demonstrated need.
