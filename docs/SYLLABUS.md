# The 365-day syllabus

This syllabus starts with no assumed programming knowledge. Each week takes 18 hours and ends with something that runs, a test that proves behavior, or an explanation that another person can inspect.

Use the seven-day loop in [Course strategy](STRATEGY.md). Complete 52 weeks for Days 1 through 364. Use Day 365 for the final launch and assessment.

## Phase 1: Learn to program (Weeks 1 through 6)

### Week 1: Computers, the terminal, and the first program

Learn files, folders, paths, commands, programs, source code, runtime errors, Git commits, and basic Markdown. Write and run small TypeScript programs with Node.js.

Ship a command-line program that prints a fictional Fund Share record. Explain every line without notes.

### Week 2: Values, types, variables, and functions

Learn strings, numbers, booleans, `null`, `undefined`, objects, type annotations, parameters, return values, scope, and pure functions.

Ship tested functions that calculate basis points, validate a ticker, and format a Fund Share record.

### Week 3: Decisions and repetition

Learn comparisons, boolean logic, `if` statements, loops, early returns, input validation, and decomposition.

Ship an eligibility-rule simulator that accepts fictional facts and returns explicit reason codes.

### Week 4: Arrays, objects, and data transformation

Learn arrays, records, iteration methods, immutable updates, sorting, filtering, aggregation, and JSON.

Ship a program that reads fictional subscriptions from JSON and produces totals and validation errors.

### Week 5: Modules, errors, debugging, and tests

Learn imports, exports, package scripts, exceptions, result types, stack traces, breakpoints, assertions, test structure, and edge cases.

Ship a tested library for money amounts and basis-point fees. Include tests for zero, negative input, large values, and rounding.

### Week 6: Asynchronous programs and HTTP

Learn promises, `async` and `await`, HTTP requests, status codes, APIs, timeouts, retries, and unsafe external data.

Ship a command-line client for a public test API. Validate every response before using it and handle failure without crashing.

**Phase gate:** write a small TypeScript program from a blank file, split it into modules, test it, debug a failure, and explain the result.

## Phase 2: Build browser applications (Weeks 7 through 10)

### Week 7: HTML, CSS, and accessibility

Learn semantic HTML, forms, labels, keyboard navigation, responsive layout, the box model, color contrast, and browser developer tools.

Ship a responsive fictional Fund Share information page that works with a keyboard and screen-reader labels.

### Week 8: Browser JavaScript and state

Learn the document object model, events, form validation, local state, rendering, loading states, error states, and browser storage.

Ship a subscription calculator that displays validation and rounding behavior clearly.

### Week 9: React and TypeScript

Learn components, props, state, derived values, effects, forms, lists, composition, and component tests.

Rebuild the subscription calculator in React. Test the calculations separately from the interface.

### Week 10: Git collaboration and continuous integration

Learn branches, pull requests, merge conflicts, code review, issues, semantic commits, formatting, linting, and automated checks.

Ship the React application through a reviewed pull request. Configure continuous integration to run tests and formatting checks.

**Phase gate:** another person can clone the browser application, run it, use it without a mouse, and understand its errors.

## Phase 3: Build backend systems (Weeks 11 through 16)

### Week 11: Node.js APIs

Learn routes, request and response bodies, status codes, schema validation, middleware, configuration, logs, and API tests.

Ship an API that creates and reads fictional asset records. Reject malformed data with useful errors.

### Week 12: SQL and relational data

Learn tables, rows, keys, constraints, relationships, joins, indexes, transactions, migrations, and parameterized queries.

Store asset records and document versions in PostgreSQL or SQLite. Draw the data model and test its constraints.

### Week 13: Reliable workflows

Learn state machines, idempotency, retries, duplicate requests, database transactions, job processing, and audit logs.

Ship a fictional document-approval workflow. Prove that retrying the same request does not create a second approval.

### Week 14: Data structures and algorithms

Learn arrays, linked lists, stacks, queues, maps, sets, recursion, searching, sorting, Big O notation, and test-case design.

Solve ten beginner problems. Explain the approach, complexity, edge cases, and tests aloud.

### Week 15: Hashes, signatures, and canonical data

Learn bytes, encoding, hashing, Merkle trees, public-key signatures, nonces, replay attacks, and canonical serialization. Use maintained libraries. Do not write cryptography.

Ship a program that canonicalizes a fictional Governing Document record, hashes it, signs the hash, and detects changes or replayed messages.

### Week 16: Lab 1, Asset Record Lab

Combine the API, database, browser interface, document hashing, approval workflow, audit log, and tests.

Release the Asset Record Lab with setup instructions, a data model, a threat note, continuous integration, and a two-minute demonstration.

**Phase gate:** build and explain a small full-stack system. Show how it handles invalid data, duplicate work, failed requests, and document changes.

## Phase 4: Learn Ethereum and Solidity (Weeks 17 through 24)

### Week 17: Ethereum's model

Learn accounts, keys, wallets, nodes, blocks, transactions, gas, confirmations, finality, consensus, and the difference between Ethereum and a database.

Inspect one public transaction. Annotate its sender, recipient, value, input, receipt, logs, gas, and confirmations.

### Week 18: RPC, wallets, and transaction lifecycle

Learn RPC methods, providers, chain IDs, addresses, ABIs, calldata, logs, receipts, signing, testnets, faucets, and secret handling.

Use a local chain to send a transaction and query its receipt from TypeScript. Display pending, confirmed, failed, and wrong-network states.

### Week 19: The EVM

Learn bytecode, the stack, memory, storage, calldata, calls, reverts, events, storage slots, and `delegatecall` at a conceptual level.

Trace a small contract call and explain each state change. Decode its calldata and event log.

### Week 20: Solidity fundamentals

Learn Solidity types, functions, visibility, state mutability, structs, mappings, arrays, events, custom errors, interfaces, and NatSpec.

Ship a minimal onchain document registry. Use fictional hashes and explicit authorization.

### Week 21: Contract boundaries and permissions

Learn contract composition, checks-effects-interactions, pull patterns, roles, least privilege, pauses, emergency powers, and dangerous external calls.

Add separate document-publisher and pause roles. Write a permission table before writing the checks.

### Week 22: Foundry and contract tests

Learn Anvil, Forge, Cast, fixtures, cheat codes, traces, unit tests, revert expectations, coverage, scripts, and continuous integration.

Rebuild the document registry test suite in Foundry. Deploy the contract to a local chain with a reproducible script.

### Week 23: ERC-20 and integration behavior

Read ERC-20. Learn balances, total supply, transfers, allowances, approvals, decimals, events, and integration assumptions.

Implement ERC-20 once for learning. Then replace it with OpenZeppelin and write differential tests for the behavior you rely on.

### Week 24: Lab 2, Onchain Ownership Lab

Build a testnet Share Token demonstration with role-separated minting, burning, pausing, and a typed React client. Label it as an onchain record, not the legal Fund Share.

Release the lab with verified contracts, unit tests, authorization tests, a transaction trace, and a limitations page.

**Phase gate:** explain a transaction and its EVM effects, write a small Solidity contract, test every permission boundary, and connect it to a typed client.

## Phase 5: Learn tokenization and financial operations (Weeks 25 through 31)

### Week 25: Accounting foundations

Learn assets, liabilities, equity, double-entry bookkeeping, debits, credits, cash flows, conservation rules, accrued interest, and reconciliation.

Build a double-entry ledger for fictional subscriptions and redemptions. Prove that every journal entry balances.

### Week 26: Securities and fund structure

Learn issuers, investors, Fund Shares, governing documents, primary and secondary markets, transfer agents, custodians, beneficial ownership, and counterparty risk.

Draw the parties and records for the Treasury Fund. Name the Authoritative Record and the correction process for disagreements.

### Week 27: Tokenization structures and rights

Study issuer-sponsored, custodial, wrapped, and synthetic structures. Learn why identical token interfaces can represent different rights.

Compare four structures for the Treasury Fund. State the holder's claim, dependencies, bankruptcy exposure, and authoritative ownership record for each.

### Week 28: Eligibility and policy

Learn attestations, expiration, revocation, trusted issuers, wallet recovery, jurisdiction rules, holding limits, lockups, privacy, and the difference between policy code and legal compliance.

Build a TypeScript Policy Rule engine with decision tables and no personal identity data.

### Week 29: Fund accounting and net asset value

Learn shares, Net Asset Value, price per share, subscriptions, redemptions, fees, basis points, valuation time, cutoffs, rounding, and stale valuation data.

Build a calculator with worked accounting examples. Test boundary values and every rounding rule.

### Week 30: Settlement and delivery versus payment

Learn trade date, settlement date, cash and asset legs, atomic settlement, delayed settlement, failed trades, partial settlement, and reversals.

Draw state machines for a Subscription, a Redemption, and a secondary Delivery versus Payment trade.

### Week 31: Lab 3, Settlement Failure Lab

Build a TypeScript simulator for delayed cash, duplicate callbacks, stale Net Asset Value, missing custody records, partial settlement, and reconciliation mismatches.

Release the simulator with deterministic scenarios, state-transition tests, and a postmortem for each failure.

**Phase gate:** explain who owes what to whom, which records prove each obligation, and how the system detects and repairs disagreement.

## Phase 6: Learn smart-contract security and vaults (Weeks 32 through 36)

### Week 32: Smart-contract attacks

Learn reentrancy, broken authorization, signature replay, frontrunning, denial of service, oracle manipulation, rounding loss, unsafe callbacks, and bad token behavior.

Reproduce five small vulnerabilities locally. Write a failing exploit test and a regression test for every fix.

### Week 33: Fuzzing, invariants, and analysis

Learn fuzz tests, stateful invariant tests, handlers, assumptions, bounds, fork tests, differential tests, static analysis, and the limits of coverage.

Write invariants for supply conservation, permissions, and monotonic request states. Run them in Foundry and preserve the failing seeds.

### Week 34: ERC-4626 vaults

Read ERC-4626. Learn assets, shares, deposits, minting, withdrawals, redemption, preview functions, limits, fees, and required rounding directions.

Build a reference vault with worked examples and conformance tests.

### Week 35: Vault and oracle failures

Learn donation and inflation attacks, virtual shares and assets, decimal offsets, insolvency, stale oracles, signer compromise, freshness bounds, circuit breakers, and reserve-report limitations.

Attack the reference vault. Add the chosen defense and prove its behavior with fuzz and invariant tests.

### Week 36: Lab 4, Vault Attack Lab

Package the vulnerable and repaired vaults into an interactive demonstration. Show the attack, loss condition, defense, remaining assumptions, and test evidence.

Release the lab with a threat model, Foundry traces, a short video, and no claim that the repaired vault is production-safe.

**Phase gate:** derive ERC-4626 rounding behavior, demonstrate a real failure, write a meaningful invariant, and explain what the test does not prove.

## Phase 7: Build TreasuryFlow (Weeks 37 through 43)

### Week 37: Define the product before the contracts

Choose the Issuer and Transfer Agent workflows. Finalize the glossary, requirements, Authoritative Record, role table, trust boundaries, data policy, and acceptance scenarios.

Ship the product requirements and diagrams. Do not write feature contracts until the review questions have answers.

### Week 38: Eligibility Attestations

Build the Eligibility Provider, signed attestation format, expiry, revocation, nonce, chain binding, contract binding, and opaque subject identifiers.

Test wrong signer, wrong Investor, wrong chain, wrong contract, expiry, revocation, and replay.

### Week 39: Policy Rules and Share Token

Build modular Policy Rules for eligibility, lockup, holding limit, and jurisdiction group. Connect the rules to an OpenZeppelin-based Share Token.

Test every allowed and rejected transition. Return specific reason codes for simulation and support.

### Week 40: Issuance and exceptional operations

Add issue, redeem, pause, freeze, wallet recovery, forced transfer, and Governing Document versioning. Separate roles and require two approvals for the most dangerous actions.

Publish the authorization matrix and prove that forbidden callers cannot reach each operation.

### Week 41: API, indexer, and reconciliation

Build an event indexer, issuer API, audit view, supply reconciliation, replay process, and duplicate-event handling.

Prove that the database can rebuild from events and that indexed balances reconcile with the chain.

### Week 42: Investor and operator interfaces

Build the investor transfer view, Issuer console, Transfer Agent queue, policy simulation, recovery flow, and useful error states.

Test the complete workflow with at least three people who did not build it. Fix the five most serious failures.

### Week 43: Secure and release TreasuryFlow

Run unit, integration, fuzz, invariant, authorization, API, and end-to-end tests. Complete static analysis, the threat model, limitations, runbook, deployment, demonstration, and case study.

Release TreasuryFlow only after an outside reviewer can clone it and reproduce the main scenario.

**Phase gate:** present TreasuryFlow for ten minutes and answer questions about rights, roles, privacy, replay protection, recovery, reconciliation, and remaining risk.

## Phase 8: Build the RWA Settlement Engine (Weeks 44 through 52)

### Week 44: Define the asynchronous fund lifecycle

Write the Subscription and Redemption lifecycle, Net Asset Value schedule, cutoffs, fee rules, pending-state economics, fulfillment policy, cancellation decision, Settlement records, and failure policy.

Ship worked examples and a state machine before implementing the vault.

### Week 45: Asynchronous vault requests

Read ERC-7540. Build pending, claimable, and claimed Subscription and Redemption requests. Define controller and operator permissions.

Prove that requests cannot skip states, over-fulfill, return to an earlier state, or be claimed twice.

### Week 46: Net Asset Value, fees, and Reserve Reports

Build signed Net Asset Value and Reserve Report inputs with sequence numbers, freshness limits, signer rotation, invalidation, fee caps, and circuit breakers.

Test stale, duplicated, revoked, malformed, out-of-range, and incorrectly signed reports.

### Week 47: Reliable operator workflows

Build the offchain worker, durable jobs, idempotency keys, retries, simulated Custodian and Cash Provider adapters, audit logs, and reconciliation.

Crash the worker between steps. Prove that a retry does not mint, burn, pay, or settle twice.

### Week 48: Settlement modes

Add an atomic mock Delivery versus Payment path and a delayed Settlement path. Model late cash, missing assets, partial completion, and operator intervention.

Write a decision note that explains when atomic Settlement is possible and when it is not.

### Week 49: Indexing, monitoring, and recovery

Add confirmation tracking, duplicate-log handling, a short reorganization simulation, health checks, supply reconciliation, stale-report alerts, and recovery runbooks.

Demonstrate recovery from a database rebuild, duplicate event, worker crash, and simulated reorganization.

### Week 50: Full security review

Review the threat model, permission matrix, accounting examples, dependencies, and upgrade policy. Run static analysis, fuzz tests, stateful invariants, integration tests, and failure injection.

Fix every critical and high-severity finding. Record lower-severity findings and design limits instead of hiding them.

### Week 51: Outside review and interview conversion

Ask an engineer, a product-minded reviewer, and a finance or tokenization practitioner to review the release candidate. Incorporate their best criticism.

Extract one useful open-source contribution. Prepare a project brief, resume bullets, a two-minute demonstration, and eight interview stories.

### Week 52: Release and apply

Finalize reproducible setup, continuous integration, contract verification, seed data, API documentation, architecture tour, threat model, runbooks, demonstration, and case study.

Release the RWA Settlement Engine. Send it personally to reviewers and suitable hiring contacts. Apply to ten carefully selected roles or start ten relevant conversations.

**Phase gate:** three outside reviewers can understand the design, reproduce its main flows, and identify no unresolved critical or high-severity issue.

## Day 365: Defend the work

Publish the final portfolio index and year review. Link both flagships, all four labs, the best technical posts, open-source work, and test evidence.

Complete two mock interviews:

1. a general software interview with coding, debugging, and system design;
2. a crypto interview covering Ethereum, Solidity, security, tokenization rights, fund accounting, and Settlement.

End the public post with the exact internship roles, locations, and dates you seek. Do not write a vague request to "work in Web3."
