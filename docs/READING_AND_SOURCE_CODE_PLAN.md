# The x/365 research and source-code curriculum

This is the research layer for the 52-week syllabus. It answers four questions for every source: why it is worth your time, when to use it, what to produce from it, and what not to assume after reading it.

The plan was checked against primary sources and maintained repositories on September 8, 2026. Tokenization law, standards, tools, and production repositories change. Recheck dates, versions, and legal status before publishing a claim.

## Executive recommendation

Do not try to read everything about crypto. Build one coherent body of knowledge around a fictional tokenized Treasury fund and its operating system.

Your research spine is:

1. TypeScript, web, backend, databases, and testing from official documentation.
2. Ethereum, Solidity, Foundry, and token interfaces from specifications and maintained implementations.
3. Accounting, fund operations, ownership records, and settlement from public institutions.
4. Security from exploit exercises, secure-development guidance, tools, and original research papers.
5. RWA architecture from ERC-3643, Circle, Centrifuge, and one advanced vault implementation.

This ordering matters. ERC-7540 is understandable only after ERC-4626. ERC-4626 is understandable only after ERC-20 and accounting. A production RWA repository is useful only after you can trace a smaller program, test it, and explain its trust boundaries.

The goal is not the largest reading list. The goal is a portfolio in which every major design choice can be traced to a standard, an operating requirement, a threat, or an explicit simplification.

## The weekly research budget

Keep research to about three of the default eighteen weekly hours:

| Activity | Weekly time | Evidence |
| --- | ---: | --- |
| Required documentation or specification | 60 minutes | One-page model in your own words |
| Source-code trace | 60 minutes | Call path, state changes, permissions, and tests |
| Paper or market-structure reading | 45 minutes | Claim, evidence, limitation, project consequence |
| Publishable synthesis | 15 minutes | One diagram, test, or concise X post |

During Weeks 1 through 16, use most of the time for guided documentation and exercises. During the two flagships, spend more of it tracing production code and published security material.

## Source levels

### Level A: required and implemented

Read the assigned portion, reproduce an example, and apply it to the week's artifact. Specifications and official documentation usually belong here.

### Level B: required source study

Do not read the entire repository. Pin a tag or commit, follow the assigned files, trace one path through its tests, and record what you learned. You are studying engineering decisions, not adopting the code blindly.

### Level C: optional depth

Use only after the weekly acceptance checks pass. These sources add context or expose a more advanced design. They must never delay a working project.

## How to read each kind of source

### Documentation and standards

Read the abstract or overview first. Write down the actors, state, operations, required behavior, optional behavior, failure cases, and security considerations. For an ERC, convert each important `MUST`, `SHOULD`, and `MAY` into a test or a documented decision.

Do not implement from a blog summary. Use the summary to orient yourself, then work from the current specification.

### GitHub repositories

Never start by scrolling through every file. Use this sequence:

1. Confirm the repository belongs to the project or standards organization.
2. Record the repository URL, license, tag or commit, and date studied.
3. Read the README, architecture notes, interfaces, primary implementation, and tests for one flow.
4. Trace one user flow, one privileged flow, and one failure flow.
5. Write down the invariants and trust assumptions.
6. Reproduce one behavior in a tiny isolated test.
7. State what you will apply and what you will not copy.

A source walkthrough is not an audit. A passing copied test is not proof that your integration is safe.

### Papers and institutional reports

Use a four-pass method:

1. Read the abstract or executive summary and conclusion.
2. Identify the question and the evidence used to answer it.
3. Read the sections directly relevant to your project.
4. Write one consequence for your architecture and one limitation of the source.

Policy reports explain structures and risks. They are not legal advice. Academic security papers may describe older compiler and network conditions, so connect them to current documentation and tests.

## The 52-week assignment map

The deliverable column is mandatory. It prevents passive reading.

### Weeks 1 through 8: programming and the web

| Week | Required research | Optional depth | Research deliverable |
| ---: | --- | --- | --- |
| 1 | TypeScript Handbook introduction; Pro Git chapters 1 and 2[^1][^2] | Node.js command-line introduction[^3] | Explain source code, runtime, repository, commit, and working tree using your first program |
| 2 | TypeScript Everyday Types and More on Functions[^1] | TypeScript narrowing | A table of input types, output types, and invalid cases for three finance functions |
| 3 | TypeScript narrowing and control-flow analysis[^1] | MDN JavaScript control flow[^4] | An eligibility decision table before writing its `if` statements |
| 4 | TypeScript object types and array methods; JSON basics[^1][^4] | MDN structured data | A hand-worked input-to-output transformation beside the program result |
| 5 | Node.js test runner and error-handling guides[^3] | TypeScript modules | A test matrix for money, rounding, and invalid inputs |
| 6 | Node.js asynchronous work and `fetch`; MDN HTTP overview[^3][^4] | HTTP caching concepts | A request lifecycle diagram with timeout, retry, validation, and terminal failure |
| 7 | MDN Learn: HTML, CSS, forms, and accessibility[^4] | Web Content Accessibility Guidelines quick reference | Keyboard-only test notes for the Fund Share page |
| 8 | MDN DOM events, client-side form validation, and browser storage[^4] | Browser network developer tools | A state diagram for empty, invalid, loading, success, and failure states |

### Weeks 9 through 16: full-stack foundations

| Week | Required research | Optional depth | Research deliverable |
| ---: | --- | --- | --- |
| 9 | React Learn: describing UI, interactivity, and managing state[^5] | React escape hatches | A component tree and list of derived values that should not be stored as state |
| 10 | Pro Git branching; GitHub Actions documentation[^2][^6] | Conventional Commits | A pull-request checklist and a failing-then-passing CI screenshot |
| 11 | Node.js HTTP material and chosen framework's official validation/testing pages[^3] | OpenAPI specification overview | An API contract with successful and rejected examples |
| 12 | PostgreSQL tutorial on tables, joins, transactions, and constraints[^7] | PostgreSQL indexing introduction | An entity-relationship diagram and three database invariants |
| 13 | Stripe's official idempotency documentation as a concrete API pattern[^8] | PostgreSQL transaction isolation | A state machine plus a repeated-request test that creates only one result |
| 14 | Revisit TypeScript collections and write ten small solutions without a new course[^1] | MIT OpenCourseWare algorithms lectures | Complexity and edge-case notes for each solution |
| 15 | Node.js cryptography documentation; EIP-712 abstract and rationale only[^3][^22] | Merkle-tree background in Mastering Ethereum[^11] | A signed-message threat model covering domain separation, nonce, expiry, and replay |
| 16 | Re-read your own architecture, tests, and threat note | One high-quality open-source README for comparison | Asset Record Lab release review: setup, flow, failure, recovery, and limitations |

### Weeks 17 through 24: Ethereum and Solidity

| Week | Required research | Source study | Research deliverable |
| ---: | --- | --- | --- |
| 17 | Ethereum developer documentation on accounts, transactions, blocks, gas, consensus, and finality[^9] | Selected conceptual chapters in Mastering Ethereum[^11] | A public-transaction annotation that distinguishes transaction, receipt, and logs |
| 18 | Ethereum JSON-RPC and transaction lifecycle; viem client and contract docs[^9][^10] | `wevm/viem` README, client creation, receipt types, and related tests[^10] | A local-chain receipt viewer with four UI states |
| 19 | Ethereum EVM and Solidity storage/memory/calldata documentation[^9][^12] | Trace one tiny contract in Foundry | A call trace annotated with calldata, storage writes, events, and revert behavior |
| 20 | Solidity contracts, types, functions, errors, events, interfaces, and NatSpec[^12] | `ethereum/solidity` examples only when documentation links to them[^13] | A one-page contract model before the document registry implementation |
| 21 | Solidity security considerations and OpenZeppelin access-control guide[^12][^14] | Selected Ethernaut levels: Fallback, Fallout, Telephone, and Reentrance[^15] | A role-permission matrix and exploit/regression test pair |
| 22 | Foundry Book: Forge, Anvil, Cast, testing, traces, scripts, and CI[^16] | `foundry-rs/foundry` only to understand one documented behavior[^17] | A reproducible local deployment plus recorded test command |
| 23 | ERC-20 in full; OpenZeppelin ERC-20 implementation and tests[^18][^14] | Circle's stablecoin contracts for role and control comparison[^29] | Differential tests for the ERC-20 behavior your client relies on |
| 24 | Revisit EIP-712 and OpenZeppelin access control[^22][^14] | OpenZeppelin Ethernaut access-control levels[^15] | Onchain Ownership Lab release note that separates token record from legal ownership |

### Weeks 25 through 31: finance, tokenization, and settlement

| Week | Required research | Source study or paper | Research deliverable |
| ---: | --- | --- | --- |
| 25 | OpenStax accounting equation, transaction analysis, journal entries, and reconciliation[^19] | OpenStax bond lifecycle as optional context | Journal entries for subscription, issuance, fee, redemption, and cash settlement |
| 26 | TreasuryDirect marketable securities; SEC transfer-agent overview; SEC tokenized-securities statement[^20][^21][^23] | Draw the SEC's issuer-sponsored and third-party models | A parties-and-records diagram naming the Authoritative Record and correction authority |
| 27 | BIS Tokenisation Continuum; Federal Reserve tokenization paper; IMF market-inefficiencies note[^24][^25][^26] | OECD 2025 report for broader market comparison[^27] | A four-model comparison of rights, dependencies, bankruptcy exposure, and records |
| 28 | ERC-3643 documentation: identity registry, trusted issuers, claim topics, compliance, and token[^28] | Corresponding interfaces and tests in the T-REX repository[^28] | A policy decision table and data-minimization note, not a claim of legal compliance |
| 29 | Investor.gov NAV and mutual-fund mechanics[^30] | Revisit OpenStax transaction analysis[^19] | Worked NAV/share-price examples with cutoff, fee, stale-data, and rounding cases |
| 30 | New York Fed explanation of atomic settlement; BIS/CPMI tokenisation report sections on lifecycle, settlement, and risk[^31][^32] | New York Fed Project Cedar technical material[^33] | Separate diagrams for instant settlement, simultaneous settlement, and DvP |
| 31 | IMF tokenization lifecycle from issuance through redemption[^26] | Federal Reserve public-blockchain transparency note[^34] | Settlement Failure Lab postmortems tied to a lifecycle stage and record owner |

### Weeks 32 through 36: security and vaults

| Week | Required research | Source study or paper | Research deliverable |
| ---: | --- | --- | --- |
| 32 | Solidity security considerations; selected Ethernaut and Damn Vulnerable DeFi challenges[^12][^15][^35] | Atzei, Bartoletti, and Cimoli's attack survey, selected taxonomy sections[^36] | Five exploit tests, five regression tests, and a note on which historical categories still apply |
| 33 | Foundry fuzz/invariant testing; Trail of Bits secure-development workflow; Slither[^16][^37][^38] | Sendner et al. on scanner effectiveness[^39] | Three stateful invariants and a paragraph explaining why clean tool output is not proof |
| 34 | ERC-4626 in full and OpenZeppelin's implementation/documentation[^40][^14] | Read interface, conversion functions, rounding, and tests | A conformance matrix mapping standard requirements to tests |
| 35 | OpenZeppelin's ERC-4626 inflation-attack discussion; oracle SoK selected sections[^14][^41] | Damn Vulnerable DeFi vault/oracle challenges[^35] | An attack trace, explicit oracle trust model, and defense tradeoff |
| 36 | Re-read the vault specification and your invariant suite[^40] | One relevant public audit from a repository studied later | Vault Attack Lab report distinguishing tested properties from unproven claims |

### Weeks 37 through 43: TreasuryFlow flagship

| Week | Required research | Source study | Research deliverable |
| ---: | --- | --- | --- |
| 37 | SEC issuer-sponsored tokenization model; ERC-3643 architecture[^23][^28] | T-REX token, identity registry, and compliance interfaces[^28] | TreasuryFlow domain model: parties, rights, records, commands, events, and corrections |
| 38 | ERC-3643 claims and identity-registry flow[^28] | Trace one eligible transfer and one rejected transfer through T-REX tests | A sequence diagram and test cases for expiry, revocation, recovery, and rejection |
| 39 | Circle stablecoin contracts[^29] | Trace mint, burn, pause, blacklist, and role-administration paths | A control comparison: Circle's needs versus the fictional fund's needs |
| 40 | OpenZeppelin AccessControl and AccessManager documentation[^14] | OpenZeppelin Role Manager as a UI/indexing reference[^42] | An admin-risk table covering grant, revoke, delay, emergency action, and key compromise |
| 41 | Ethereum logs; viem event watching/querying; Fed transparency note[^9][^10][^34] | Trace Role Manager's history/indexing boundary[^42] | An indexer design covering confirmations, reorgs, replay, checkpoints, and repair |
| 42 | EIP-712 and ERC-2612 in full[^22][^43] | Circle typed-data or authorization flow where applicable[^29] | A signature matrix with domain, signer, nonce, deadline, consumed state, and replay tests |
| 43 | No new sources until all acceptance checks pass | One published security review relevant to the code actually used | TreasuryFlow architecture decision log, threat model, limitations, and public demo |

### Weeks 44 through 52: RWA Settlement Engine flagship

| Week | Required research | Source study | Research deliverable |
| ---: | --- | --- | --- |
| 44 | ERC-7540 in full, especially request states and ERC-4626 overrides[^44] | ERC-7540 reference implementation linked by the standard | A request-state machine and a requirement-to-test matrix |
| 45 | ERC-7575 in full; Centrifuge protocol overview and interfaces[^45][^46] | Trace one deposit/request flow in Centrifuge tests | A decision explaining single-vault versus multi-asset architecture |
| 46 | Chainlink Proof of Reserve and data-feed risk documentation; Federal Reserve liquidity-risk discussion[^47][^48] | Centrifuge valuation/reporting boundary[^46] | A reserve-report model with signer, scope, timestamp, freshness bound, pause, and dispute path |
| 47 | OpenStax journal entries and reconciliation[^19] | Centrifuge double-entry/accounting design[^46] | Balanced entries and reconciliation checks for every request transition |
| 48 | New York Fed atomic settlement; Circle Payment Network settlement contracts[^31][^49] | Trace payment intent, attestation, nonce, settlement, refund, and pause | A DvP protocol model with replay, timeout, partial-failure, and recovery tests |
| 49 | BIS/CPMI lifecycle, governance, and risk sections[^32] | Centrifuge asynchronous failure and recovery tests[^46] | An operator runbook for duplicates, delayed cash, stale NAV, reorgs, and mismatches |
| 50 | Morpho Vault V2 roles, caps, timelocks, adapters, and audits[^50] | Advanced: dependency-risk paper by Jin, Liu, and Monperrus[^51] | A dependency and privileged-operation register for your own system |
| 51 | Slither, Foundry invariants, and optional Echidna[^38][^16][^52] | Review published audits in Centrifuge or Morpho repos[^46][^50] | Final security evidence: properties, commands, seeds, findings, fixes, and residual risk |
| 52 | Recheck every external claim and pinned repository version | BIS 2025 future-system chapter for a final perspective[^53] | Final report: what works, what is simulated, what is trusted, what can fail, and what comes next |

Day 365 is for the launch and retrospective. It is not the day to discover an unread standard or add a new subsystem.

## Annotated GitHub curriculum

### Repositories to clone, run, and study

#### OpenZeppelin Contracts

Use `OpenZeppelin/openzeppelin-contracts` for ERC-20, access control, cryptography utilities, and ERC-4626. It is the baseline maintained implementation for this curriculum, not permission to inherit defaults without understanding them.[^14]

Study path: interface, implementation, relevant utility/library, tests, security documentation. Apply it in Weeks 21 through 24 and 34 through 43.

#### Ethernaut

Use `OpenZeppelin/ethernaut` for small adversarial exercises after you can write and test a contract.[^15] Solve selected levels locally and preserve an exploit test plus a repaired version. Do not publish only the answer transaction.

#### Damn Vulnerable DeFi

Use `theredguild/damn-vulnerable-defi` during Weeks 32 through 35.[^35] The repository intentionally contains vulnerable systems. Never reuse its challenge code as a production foundation.

#### ERC-3643 T-REX

Use the standards organization's T-REX repository for a real implementation of identity claims, registries, modular compliance, and permissioned transfers.[^28] Study it after your own policy engine exists. Compare its domain boundaries to yours before borrowing an interface.

#### Circle stablecoin contracts

Use `circlefin/stablecoin-evm` as a controlled-token case study.[^29] Its minting, burning, pause, blacklist, upgrade, and role model provide useful contrasts. A regulated stablecoin is not a tokenized fund, so record every control that does not belong in TreasuryFlow.

#### Circle Payment Network contracts

Use `circlefin/evm-cpn-contracts` late in the year to study attested payment settlement, EIP-712 messages, nonces, roles, refunds, and Foundry tests.[^49] Treat it as a settlement comparison, not a wholesale design template.

#### Centrifuge protocol

Use `centrifuge/protocol` for advanced RWA, asynchronous vault, hub-and-spoke, and accounting study.[^46] The public repository notes that active development is selectively synchronized from a private canonical repository, and its license is not a blanket permissive license. Pin a commit, read the license, and study targeted flows. Do not copy large sections.

#### Morpho Vault V2

Use `morpho-org/vault-v2` as an advanced comparison after the Settlement Engine works.[^50] Focus on roles, adapters, caps, timelocks, valuation, immutable-contract tradeoffs, formal properties, and audit organization. It is a synchronous ERC-4626 allocation vault, not an RWA subscription system.

### Tools and libraries to use, not read end to end

- `wevm/viem`: typed Ethereum RPC, ABI, event, transaction, and EIP-712 interaction.[^10]
- `foundry-rs/foundry`: contract compilation, testing, local chain, scripts, traces, fuzzing, and invariants.[^17]
- `crytic/slither`: static analysis that supplements review and tests.[^38]
- `crytic/echidna`: optional property-based fuzzing after Foundry invariants are comfortable.[^52]
- `OpenZeppelin/role-manager`: a focused example of role-administration UX and event history.[^42]

Read their user documentation first. Read tool internals only to answer a specific question.

### Historical or optional repositories

- `centrifuge/liquidity-pools`: useful for historical ERC-7540 architecture comparison, but prefer the current protocol repository for core study.
- `centrifuge/tinlake`: useful for RWA protocol history, not a current implementation baseline.
- Solmate or Solady token/vault implementations: valuable late-year contrasts, but unnecessary for the required path.
- Scaffold-ETH: useful for quick experiments, but it can hide boundaries a beginner should learn to wire directly.

Before using any of these, check its maintenance status, documentation, license, and whether a newer canonical repository supersedes it.

## The standards sequence

Read standards in dependency order:

1. ERC-20: fungible balances and allowances.[^18]
2. EIP-712: structured signed data and domain separation.[^22]
3. ERC-2612: permit-style approvals and replay controls.[^43]
4. ERC-4626: synchronous asset/share vault accounting.[^40]
5. ERC-7540: asynchronous request and claim behavior layered on ERC-4626.[^44]
6. ERC-7575: multiple vaults or assets sharing token/accounting structures.[^45]
7. ERC-3643: permissioned security-token architecture and identity/compliance modules.[^28]

ERC-721 and ERC-1155 are optional survey readings. They are not central to a fungible Treasury fund and should not displace the standards above.

For each required standard, create:

- a one-page actor and state model;
- a minimal implementation or integration;
- a requirement-to-test matrix;
- adversarial and boundary tests;
- a note titled "When this standard does not solve the problem."

## Papers and reports worth reading

### Core market-structure set

#### SEC: Statement on Tokenized Securities, 2026

Read in Weeks 26, 27, and 37. The staff statement distinguishes issuer-sponsored tokenization from third-party custodial and synthetic structures, and it emphasizes that format does not remove securities-law obligations.[^23] Its most useful engineering consequence is that you must name the authoritative ownership record and the relationship between onchain and offchain records.

The document states that it is a staff view without legal force. Preserve that limitation in every note and public post.

#### BIS: The Tokenisation Continuum, 2023

This short report is the best first institutional overview. It frames tokenization as a continuum of design choices instead of a binary "onchain versus offchain" decision.[^24] Read it before choosing which records and functions TreasuryFlow puts onchain.

#### Federal Reserve: Tokenization, 2023 revision

This paper surveys tokenization designs and potential financial-stability transmission channels.[^25] Use it to write risks and dependencies, not to predict adoption.

#### BIS/CPMI: Tokenisation in the Context of Money and Other Assets, 2024

This is the core lifecycle and central-bank perspective for Weeks 30, 46, and 49.[^32] Extract lifecycle stages, governance questions, settlement-asset dependencies, and risks. Map each one to an actor or control in the Settlement Engine.

#### IMF: Tokenization and Financial Market Inefficiencies, 2025

The note analyzes issuance, exchange, servicing, and redemption rather than treating minting as the whole product.[^26] Use its framework to prevent both flagships from becoming token demos with no operating model.

#### New York Fed: What Is Atomic Settlement?, 2022

This reading separates instantaneous settlement from simultaneous settlement.[^31] That distinction should appear directly in your Week 30 diagrams and DvP tests.

### Core security papers

#### Atzei, Bartoletti, and Cimoli, 2017

The systematization of Ethereum attacks is foundational vocabulary for Week 32.[^36] It is historical. Do not assume its compiler-era examples exhaust current risks.

#### Eskandari et al., 2021

The oracle SoK gives a framework from ground truth through data publication and use, including manipulation points.[^41] Apply the framework to NAV and reserve reporting rather than adding an oracle brand name to the project.

#### Sendner et al., 2023

The large-scale scanner study is assigned with Slither because automated tools have coverage and effectiveness limits.[^39] Your public security claims must name the tested properties and manual reasoning, not merely show a clean scan.

### Optional advanced papers

- Daian et al., *Flash Boys 2.0*, for transaction ordering and miner/maximal extractable value.[^54]
- Werner et al., *SoK: Decentralized Finance*, for a broader DeFi taxonomy and security overview.[^55]
- Zhou et al., *An Ever-evolving Game*, for empirical attack and defense evaluation.[^56]
- Iuliano and Di Nucci's updated systematic review for security tools and benchmark research.[^57]
- Jin, Liu, and Monperrus for contract dependency and mutability risk at scale.[^51]
- New York Fed's *Zero Settlement Risk Token Systems* for advanced formal treatment of settlement and DvP.[^58]

Optional papers do not require full-paper summaries. Extract only the sections tied to a current design question.

## Project-specific source studies

### Lab 1: Asset Record Lab

Use PostgreSQL constraints, transactions, Git history, Node validation/testing, and the SEC transfer-agent description. Demonstrate that an operational record needs ownership, correction, audit history, and recovery. Do not add a blockchain.

### Lab 2: Onchain Ownership Lab

Use ERC-20, OpenZeppelin Contracts, EIP-712, Foundry, viem, and selected Ethernaut exercises. Demonstrate permissions and observable onchain behavior. Explicitly state that the lab does not establish the legal rights of a Fund Share.

### Lab 3: Settlement Failure Lab

Use the IMF lifecycle, BIS/CPMI report, New York Fed atomic-settlement explanation, and your accounting ledger. Each injected failure must identify the affected obligation, authoritative record, detection mechanism, retry rule, and human escalation.

### Lab 4: Vault Attack Lab

Use ERC-4626, OpenZeppelin, Foundry invariants, Damn Vulnerable DeFi, the oracle SoK, Slither, and the scanner study. Demonstrate an exploit and repair. Report residual assumptions instead of claiming the vault is secure.

### Flagship 1: TreasuryFlow

Use the SEC tokenized-securities models, ERC-3643/T-REX, Circle stablecoin controls, OpenZeppelin access control, viem events, and the Fed transparency note. The project should make the relationship among wallet, investor, Fund Share, Share Token, and Authoritative Record impossible to confuse.

### Flagship 2: RWA Settlement Engine

Use ERC-4626, ERC-7540, optionally ERC-7575, Centrifuge, Circle Payment Network, BIS/CPMI, New York Fed settlement research, and OpenStax accounting. Add Morpho only as a late comparison. The flagship must make asynchronous operations, accounting conservation, reserve freshness, idempotency, reconciliation, and recovery visible in code and tests.

## The source-note format

Create one note per assigned standard, repository flow, paper, or report:

```markdown
# Source title

- URL:
- Author or organization:
- Publication date or repository commit/tag:
- Date studied:
- Level: A / B / C

## Question I brought to the source

## Actors and trust assumptions

## State, lifecycle, and invariants

## Main claim or design choice

## Evidence or tests

## Failure and recovery paths

## What is dated, uncertain, or outside scope

## What I will apply

## What I will not copy

## One test, diagram, or decision created from this source
```

For papers, replace "tests" with method and evidence. For legal or policy material, add jurisdiction and document status.

## What not to spend time on

- Daily token prices, trading calls, airdrop farming, or influencer threads.
- "Build a token in ten minutes" tutorials with no tests or threat model.
- Reading whole protocol repositories without a question and trace target.
- Copying upgradeability, bridges, cross-chain messaging, ZK identity, or DAO governance into the flagships because they look advanced.
- Treating star counts, total value locked, or brand recognition as engineering evidence.
- Claiming a legal structure, compliance status, proof of reserves, or security guarantee that the project does not establish.
- Adding ERCs that do not serve the Treasury Fund lifecycle.

World-class learning here means unusually strong evidence and judgment: precise models, small verified implementations, good tests, honest limitations, and the ability to connect financial obligations to system behavior.

## Refresh policy

At the start of every source-study week:

1. Confirm the canonical repository or publication URL.
2. Record the current stable version or pinned commit.
3. Check whether the source is archived, deprecated, superseded, or relicensed.
4. Re-read security advisories and the relevant standard status.
5. Update links or scope in this document through a reviewed commit.

Before an internship interview, refresh the SEC, BIS, Federal Reserve, and IMF items, plus every repository shown in your portfolio. Be ready to explain why each source was authoritative enough for the claim you made.

## Sources

[^1]: Microsoft, [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).
[^2]: Scott Chacon and Ben Straub, [Pro Git](https://git-scm.com/book/en/v2), official Git documentation.
[^3]: OpenJS Foundation, [Node.js Learn](https://nodejs.org/en/learn) and [API documentation](https://nodejs.org/api/).
[^4]: Mozilla, [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development).
[^5]: Meta Open Source, [React Learn](https://react.dev/learn).
[^6]: GitHub, [GitHub Actions documentation](https://docs.github.com/en/actions).
[^7]: PostgreSQL Global Development Group, [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html).
[^8]: Stripe, [Idempotent requests](https://docs.stripe.com/api/idempotent_requests).
[^9]: Ethereum Foundation community, [Ethereum developer documentation](https://ethereum.org/developers/docs/).
[^10]: wevm, [viem documentation](https://viem.sh/) and [`wevm/viem`](https://github.com/wevm/viem).
[^11]: Andreas M. Antonopoulos and Gavin Wood, [Mastering Ethereum repository](https://github.com/ethereumbook/ethereumbook), second edition repository.
[^12]: Solidity team, [Solidity documentation](https://docs.soliditylang.org/) and [security considerations](https://docs.soliditylang.org/en/latest/security-considerations.html).
[^13]: Solidity team, [`ethereum/solidity`](https://github.com/ethereum/solidity).
[^14]: OpenZeppelin, [Contracts documentation](https://docs.openzeppelin.com/contracts/5.x/) and [`OpenZeppelin/openzeppelin-contracts`](https://github.com/OpenZeppelin/openzeppelin-contracts).
[^15]: OpenZeppelin, [`OpenZeppelin/ethernaut`](https://github.com/OpenZeppelin/ethernaut).
[^16]: Paradigm and Foundry contributors, [Foundry documentation](https://getfoundry.sh/) including [invariant testing](https://getfoundry.sh/forge/invariant-testing).
[^17]: Foundry contributors, [`foundry-rs/foundry`](https://github.com/foundry-rs/foundry).
[^18]: Fabian Vogelsteller and Vitalik Buterin, [ERC-20: Token Standard](https://eips.ethereum.org/EIPS/eip-20).
[^19]: OpenStax, [Principles of Financial Accounting](https://openstax.org/details/books/principles-financial-accounting), especially [transaction analysis](https://openstax.org/books/principles-financial-accounting/pages/3-4-analyze-business-transactions-using-the-accounting-equation-and-show-the-impact-of-business-transactions-on-financial-statements), [journal entries](https://openstax.org/books/principles-financial-accounting/pages/3-5-use-journal-entries-to-record-transactions-and-post-to-t-accounts), and [reconciliation](https://openstax.org/books/principles-financial-accounting/pages/8-6-define-the-purpose-of-a-bank-reconciliation-and-prepare-a-bank-reconciliation-and-its-associated-journal-entries).
[^20]: U.S. Department of the Treasury, [About Treasury Marketable Securities](https://www.treasurydirect.gov/marketable-securities/) and [Treasury Bills](https://www.treasurydirect.gov/marketable-securities/treasury-bills/).
[^21]: U.S. Securities and Exchange Commission, [Transfer Agents](https://www.sec.gov/about/divisions-offices/division-trading-markets/transfer-agents).
[^22]: Ethereum standards contributors, [EIP-712: Typed Structured Data Hashing and Signing](https://eips.ethereum.org/EIPS/eip-712).
[^23]: SEC staff, [Statement on Tokenized Securities](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities), January 28, 2026.
[^24]: Bank for International Settlements, [The Tokenisation Continuum](https://www.bis.org/publ/bisbull72.pdf), BIS Bulletin No. 72, April 2023.
[^25]: Carapella et al., Federal Reserve Board, [Tokenization: Overview and Financial Stability Implications](https://www.federalreserve.gov/econres/feds/tokenization-overview-and-financial-stability-implications.htm), Finance and Economics Discussion Series 2023-060, revised December 2023.
[^26]: International Monetary Fund, [Tokenization and Financial Market Inefficiencies](https://www.imf.org/en/publications/fintech-notes/issues/2025/01/29/tokenization-and-financial-market-inefficiencies-561256), Fintech Note 2025/001.
[^27]: OECD, [Tokenisation of Assets and Distributed Ledger Technologies in Financial Markets](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/01/tokenisation-of-assets-and-distributed-ledger-technologies-in-financial-markets_be149012/40e7f217-en.pdf), 2025.
[^28]: ERC-3643 Association, [ERC-3643 documentation](https://docs.erc3643.org/erc-3643) and [`ERC-3643/ERC-3643`](https://github.com/ERC-3643/ERC-3643).
[^29]: Circle, [`circlefin/stablecoin-evm`](https://github.com/circlefin/stablecoin-evm).
[^30]: U.S. Securities and Exchange Commission, Investor.gov, [Net Asset Value](https://www.investor.gov/introduction-investing/investing-basics/glossary/net-asset-value) and [Mutual Funds](https://www.investor.gov/introduction-investing/investing-basics/glossary/mutual-funds).
[^31]: Michael Lee, Antoine Martin, and Benjamin Müller, Federal Reserve Bank of New York, [What Is Atomic Settlement?](https://libertystreeteconomics.newyorkfed.org/2022/11/what-is-atomic-settlement/), November 7, 2022.
[^32]: Committee on Payments and Market Infrastructures, BIS, [Tokenisation in the Context of Money and Other Assets](https://www.bis.org/publications/tokenisation-context-money-and-other-assets-concepts-and-implications-central-banks), October 2024.
[^33]: Federal Reserve Bank of New York, [Project Cedar](https://www.newyorkfed.org/aboutthefed/nyic/project-cedar) and [Phase I Technical Appendix](https://www.newyorkfed.org/medialibrary/media/nyic/project-cedar-phase-one-technical-appendix.pdf).
[^34]: Francisco Ilabaca, Akash Koirala, and Tony T. Lee, Federal Reserve Board, [Tokenized Assets on Public Blockchains: How Transparent Is the Blockchain?](https://www.federalreserve.gov/econres/notes/feds-notes/tokenized-assets-on-public-blockchains-how-transparent-is-the-blockchain-20240403.html), April 3, 2024.
[^35]: The Red Guild, [`theredguild/damn-vulnerable-defi`](https://github.com/theredguild/damn-vulnerable-defi).
[^36]: Nicola Atzei, Massimo Bartoletti, and Tiziana Cimoli, [A Survey of Attacks on Ethereum Smart Contracts](https://eprint.iacr.org/2016/1007), 2017.
[^37]: Trail of Bits, [Building Secure Contracts: Development Guidelines](https://secure-contracts.com/development-guidelines/).
[^38]: Trail of Bits and Crytic, [`crytic/slither`](https://github.com/crytic/slither).
[^39]: Christoph Sendner et al., [Vulnerability Scanners for Ethereum Smart Contracts: A Large-Scale Study](https://arxiv.org/abs/2312.16533), 2023.
[^40]: Joey Santoro et al., [ERC-4626: Tokenized Vaults](https://eips.ethereum.org/EIPS/eip-4626).
[^41]: Shayan Eskandari et al., [SoK: Oracles from the Ground Truth to Market Manipulation](https://arxiv.org/abs/2106.00667), 2021.
[^42]: OpenZeppelin, [`OpenZeppelin/role-manager`](https://github.com/OpenZeppelin/role-manager).
[^43]: Martin Lundfall, [ERC-2612: Permit Extension for EIP-20 Signed Approvals](https://eips.ethereum.org/EIPS/eip-2612).
[^44]: Asad Khan et al., [ERC-7540: Asynchronous ERC-4626 Tokenized Vaults](https://eips.ethereum.org/EIPS/eip-7540).
[^45]: Asad Khan et al., [ERC-7575: Multi-Asset ERC-4626 Vaults](https://eips.ethereum.org/EIPS/eip-7575).
[^46]: Centrifuge, [`centrifuge/protocol`](https://github.com/centrifuge/protocol).
[^47]: Chainlink Labs, [Proof of Reserve documentation](https://docs.chain.link/data-feeds/proof-of-reserve) and [data-feed risk mitigations](https://docs.chain.link/data-feeds/selecting-data-feeds).
[^48]: Lisa D. Cook, Federal Reserve Board, [Tokenization and Financial Stability](https://www.federalreserve.gov/newsevents/speech/cook20260508a.htm), May 8, 2026.
[^49]: Circle, [`circlefin/evm-cpn-contracts`](https://github.com/circlefin/evm-cpn-contracts).
[^50]: Morpho Association, [`morpho-org/vault-v2`](https://github.com/morpho-org/vault-v2).
[^51]: Xin Jin, Chao Liu, and Martin Monperrus, [On-Chain Analysis of Smart Contract Dependency Risks on Ethereum](https://arxiv.org/abs/2503.19548), 2025.
[^52]: Trail of Bits and Crytic, [`crytic/echidna`](https://github.com/crytic/echidna).
[^53]: Bank for International Settlements, [The Next-Generation Monetary and Financial System](https://www.bis.org/publications/aer-2025/next-generation-monetary-financial-system), Annual Economic Report 2025.
[^54]: Philip Daian et al., [Flash Boys 2.0](https://arxiv.org/abs/1904.05234), 2019.
[^55]: Sam Werner et al., [SoK: Decentralized Finance (DeFi)](https://arxiv.org/abs/2101.08778), 2021.
[^56]: Shunfan Zhou et al., [An Ever-evolving Game: Evaluation of Real-world Attacks and Defenses in Ethereum Ecosystem](https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-shunfan), USENIX Security 2020.
[^57]: Vincenzo Iuliano and Dario Di Nucci, [Smart Contract Vulnerabilities, Tools, and Benchmarks: An Updated Systematic Literature Review](https://arxiv.org/abs/2412.01719), 2024.
[^58]: Antoine Martin and Benjamin Müller, Federal Reserve Bank of New York, [Zero Settlement Risk Token Systems](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr1120.pdf), Staff Report No. 1120, September 2024.
