# Project specifications

The projects use one fictional Treasury Fund. Each project adds a layer that the next project needs. Do not start a flagship early. Finish the relevant learning lab first.

## Evidence levels

The course uses three labels:

- **Exercise**: a small task completed during a lesson.
- **Lab**: a narrow, documented project that answers one technical question.
- **Flagship**: a complete product that combines contracts, applications, operations, testing, and a case study.

Tutorial copies are exercises. Do not pin them as portfolio projects.

## Common project rules

Every lab and flagship must include:

- a plain statement of the question or problem;
- setup and test commands that work in a clean checkout;
- fictional data and no personal identity information;
- automated tests for normal and failure behavior;
- a list of assumptions and known limits;
- a short demonstration;
- a record of what you wrote, what a library supplied, and what AI helped with.

Every flagship must also include:

- product requirements and acceptance scenarios;
- architecture, state, sequence, and trust-boundary diagrams;
- short decision records for hard choices;
- contract, API, indexer, database, and interface tests;
- a threat model, self-review, and outside feedback;
- continuous integration and a repeatable testnet deployment;
- accessible pending, success, empty, and failure states;
- logs, reconciliation, and recovery instructions;
- a two-minute video and technical case study.

## Lab 1: Asset Record Lab

**Schedule:** Weeks 11 through 16

**Question:** How can a normal full-stack application preserve and verify the history of a fictional asset record?

### Build

- a typed Asset Record and Governing Document schema;
- a Node.js API;
- a relational database with constraints and migrations;
- canonical serialization and document hashes;
- signed document approvals through a maintained cryptography library;
- an idempotent approval endpoint;
- a React history and comparison view;
- an append-only audit log;
- tests for malformed data, unauthorized approval, duplicate approval, changed content, and database failure.

### Acceptance checks

1. Reordering JSON fields does not change a canonical document hash.
2. Changing a meaningful field changes the hash.
3. A repeated request with the same idempotency key creates one approval.
4. An invalid signature cannot approve a document.
5. The interface displays each document version and approval status.
6. A clean checkout can create the database, run tests, and start the application.

### What this proves

TypeScript, React, Node.js, SQL, validation, tests, signatures, Git, continuous integration, and full-stack debugging.

## Lab 2: Onchain Ownership Lab

**Schedule:** Weeks 20 through 24

**Question:** What does an ERC-20-compatible blockchain record guarantee, and what remains outside the contract?

### Build

- a learning ERC-20 implementation that you later discard;
- an OpenZeppelin-based Share Token;
- separate mint, burn, and pause roles;
- local and testnet deployment scripts;
- a typed React client;
- transaction status and decoded errors;
- unit, authorization, and integration tests;
- a diagram that separates the Share Token, Fund Share, and Governing Document.

### Acceptance checks

1. Transfers, approvals, and allowances match the behavior the client expects.
2. Unauthorized callers cannot mint, burn, or pause.
3. A paused contract behaves exactly as the documentation states.
4. The client handles the wrong network, rejected signature, reverted transaction, pending transaction, and confirmation.
5. The README never claims that the token alone creates legal ownership.

### What this proves

Ethereum, Solidity, Foundry, ERC-20, permissions, deployments, typed contract clients, and accurate technical communication.

## Lab 3: Settlement Failure Lab

**Schedule:** Weeks 25 through 31

**Question:** How does a tokenization system fail when asset, cash, custody, and ownership records move at different times?

### Build

- TypeScript state machines for Subscriptions, Redemptions, and Delivery versus Payment trades;
- a double-entry ledger;
- simulated Transfer Agent, Custodian, and Cash Provider records;
- deterministic scenario files;
- a reconciliation report;
- an operator screen for mismatches;
- failure injection for late cash, missing assets, partial settlement, stale Net Asset Value, and duplicate callbacks.

### Acceptance checks

1. Every ledger entry balances.
2. A state transition not listed in the model fails.
3. Retrying a callback cannot settle an obligation twice.
4. Reconciliation names the records and amount that disagree.
5. A scenario can fail halfway, restart, and reach the documented result.
6. Each failure has a short postmortem and recovery method.

### What this proves

Financial modeling, state machines, accounting, idempotency, reconciliation, failure recovery, and backend testing.

## Lab 4: Vault Attack Lab

**Schedule:** Weeks 32 through 36

**Question:** How can correct-looking share math lose value, and what can testing prove about the repair?

### Build

- a minimal ERC-4626 vault;
- worked asset-to-share examples;
- a vulnerable initial-deposit or donation scenario;
- an attacker script and transaction trace;
- a defended version using a documented standard approach;
- fuzz tests for rounding boundaries;
- stateful invariants for accounting and claims;
- stale-oracle and invalid-report demonstrations where the model uses external valuation.

### Acceptance checks

1. Tests reproduce the vulnerable behavior before the fix.
2. Regression tests fail if the defense is removed.
3. Deposit, mint, withdraw, redeem, and preview behavior follows the documented rounding direction.
4. The invariant names its assumptions. It does not claim to prove more than it checks.
5. The demonstration explains the attack without inviting real-money use.

### What this proves

ERC-4626, precise accounting, adversarial reasoning, Foundry traces, fuzzing, invariants, and security writing.

## Flagship 1: TreasuryFlow

**Schedule:** Weeks 37 through 43

**Problem:** A fictional Issuer and Transfer Agent need to issue Fund Shares on a public EVM chain while restricting who can hold or transfer them.

### Product boundary

TreasuryFlow models eligibility and transfer policy. It is not a KYC service, broker, custodian, transfer agent, securities offering, or legal compliance product. It stores no personal identity data and accepts no real money.

### Actors

- Issuer
- Investor
- Transfer Agent
- Eligibility Provider
- read-only reviewer

Use separate accounts for separate roles. No account receives every power in the demonstration.

### Required system

- ERC-20-compatible Share Token built with OpenZeppelin;
- signed, expiring, revocable Eligibility Attestations;
- opaque Investor subject identifiers;
- Policy Rules for eligibility, jurisdiction group, lockup, and holding limit;
- issue, redeem, pause, freeze, wallet recovery, and forced transfer operations;
- two-person approval for wallet recovery and forced transfer;
- Governing Document hash and version history;
- policy simulation with explicit reason codes;
- Issuer, Transfer Agent, Investor, and audit interfaces;
- event indexer and supply reconciliation;
- complete authorization and replay tests.

### Required scenarios

1. An eligible Investor transfers to another eligible Investor.
2. Expired or revoked eligibility blocks receipt.
3. A lockup, holding limit, jurisdiction rule, pause, or freeze blocks the correct operation.
4. A signature cannot move to a different chain, contract, Investor, purpose, or nonce.
5. Unauthorized callers cannot change eligibility, policy, supply, freezes, documents, or recovery state.
6. Two Transfer Agent approvals recover a lost-wallet balance and record the reason.
7. The indexer rebuilds from events and reconciles supply and balances.
8. The interface explains each rejection without exposing private eligibility data.

### Contract properties

- Total supply equals issued shares minus redeemed shares.
- Only eligible recipients gain Share Tokens through normal transfer paths.
- Every privileged balance change has an attributed domain event.
- Eligibility nonces and revocations prevent replay.
- The contract applies pause and freeze behavior consistently across exposed paths.
- No single demonstration account can perform both approvals for an exceptional operation.

### Release gate

- all required scenarios pass in continuous integration;
- fuzz and invariant tests cover supply, eligibility, replay, and permissions;
- the threat model lists compromised Issuer, Transfer Agent, and Eligibility Provider keys;
- one outside engineer reproduces the main workflow;
- three user tests produce documented interface changes;
- the README says "educational, unaudited, testnet-only" near the top;
- the demonstration includes one successful flow and two failures.

## Flagship 2: RWA Settlement Engine

**Schedule:** Weeks 44 through 52

**Problem:** The fictional Treasury Fund values assets and settles cash offchain. Investors need Subscription and Redemption requests that remain accurate when valuation, custody, and cash actions do not finish in one blockchain transaction.

### Product boundary

The capstone simulates the Custodian and Cash Provider. A signed Reserve Report is a claim from the simulated Custodian, not independent proof that assets exist. The system is not a real fund or payment system.

### Required system

- TreasuryFlow Share Token or a stable packaged version of its interfaces;
- ERC-4626 share accounting where synchronous behavior applies;
- ERC-7540-style pending, claimable, and claimed requests;
- explicit controller and operator permissions;
- signed Net Asset Value and Reserve Reports;
- report sequence, freshness, revocation, signer rotation, and circuit breakers;
- documented fee and rounding policy;
- durable operator jobs with idempotency and retry handling;
- simulated Custodian and Cash Provider adapters;
- atomic mock Delivery versus Payment and delayed Settlement modes;
- confirmation-aware event indexing and a short reorganization simulation;
- reconciliation, alerts, operator queues, and recovery runbooks;
- Investor and operator interfaces.

### Required scenarios

1. A Subscription moves from pending to claimable and can be claimed once.
2. A Redemption cannot over-fulfill, return to an earlier state, or be claimed twice.
3. Stale, duplicated, revoked, out-of-order, malformed, or wrongly signed reports fail safely.
4. A worker crashes after an external step. Its retry does not repeat the economic action.
5. Late cash leaves the request in the documented state and alerts an operator.
6. Atomic Delivery versus Payment either completes both legs or neither leg.
7. Delayed Settlement exposes the period during which only one obligation has completed.
8. Reconciliation detects an onchain, Custodian, Cash Provider, or Transfer Agent mismatch.
9. A database rebuild and simulated reorganization produce the expected indexed state.
10. A limited pause blocks the intended entry action while preserving the documented claim or recovery path.

### Contract and system properties

- Fulfilled and claimed amounts never exceed the requested amount.
- A claimed request never becomes pending or claimable again.
- A report sequence can affect state at most once.
- Fees stay within their configured caps and use the documented rounding rule.
- Minted and burned shares reconcile with fulfilled Subscriptions and Redemptions.
- Repeating an operator command does not repeat its economic effect.
- Privileged operations follow the published authorization table.
- The system never labels a stale report as current.

### Release gate

Score at least 85 points:

| Area | Points |
| --- | ---: |
| Correct financial model and trust boundaries | 15 |
| Contract behavior and standards use | 15 |
| Security, authorization, fuzzing, and invariants | 20 |
| Accounting and reconciliation | 15 |
| Worker reliability and recovery | 10 |
| Interface and accessibility | 10 |
| Setup, continuous integration, monitoring, and runbooks | 5 |
| Case study and demonstration | 5 |

The release also requires three outside reviews and no known unresolved critical or high-severity finding.

## Repository layout for a flagship

```text
project/
├── README.md
├── SECURITY.md
├── LICENSE
├── docs/
│   ├── requirements.md
│   ├── architecture.md
│   ├── accounting.md
│   ├── authorization.md
│   ├── threat-model.md
│   ├── limitations.md
│   ├── runbooks.md
│   └── adr/
├── contracts/
├── test/
│   ├── unit/
│   ├── integration/
│   ├── fuzz/
│   └── invariant/
├── apps/
│   ├── web/
│   └── operator/
├── packages/
│   ├── api/
│   └── indexer/
├── script/
└── .github/workflows/
```

Do not create every directory on the first day. Add a directory when the project has code or documentation that belongs there.
