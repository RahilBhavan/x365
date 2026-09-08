# Research basis

Checked: 2026-09-08. This document records the primary sources and current hiring signals used to design `x/365`. It is educational research, not legal or investment advice.

## What tokenization means here

The program focuses on representing and servicing real-world and financial assets on blockchain infrastructure. The SEC staff defines tokenization as creating a digital representation of a tangible or intangible asset using distributed-ledger technology. Its January 2026 statement distinguishes issuer-sponsored structures from third-party custodial and synthetic structures. Those models can give holders different rights and risks. The syllabus therefore treats legal rights, custody, records, and reconciliation as core system design.

Source: [SEC staff statement on tokenized securities](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)

The same technology can improve settlement and programmable transactions, but tokenization does not change the legal nature of a security. The program therefore teaches students to describe technical prototypes accurately and to consult qualified counsel for real offerings.

Sources: [SEC Commissioner statement](https://www.sec.gov/newsroom/speeches-statements/peirce-statement-tokenized-securities-070925), [BIS on tokenisation for the real world](https://www.bis.org/speeches/20240208-tokenisation-real-world)

## Standards that determine the technical sequence

- ERC-20 provides the interoperable fungible-token interface; ERC-721 and ERC-1155 cover non-fungible and multi-token representations. Learning interfaces and integration behavior comes before inventing custom token logic. Sources: [Ethereum token standards](https://ethereum.org/developers/docs/standards/tokens/), [ERC-20](https://eips.ethereum.org/EIPS/eip-20)
- ERC-4626 standardizes tokenized vault shares for a single ERC-20 asset. Its rounding, preview, and accounting semantics are important security and integration concerns. Source: [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626)
- ERC-7540 adds asynchronous deposit and redemption requests for systems that cannot settle atomically. The standard explicitly includes real-world assets as one use case. Requests move through pending, claimable, and claimed states. Source: [ERC-7540](https://eips.ethereum.org/EIPS/eip-7540)
- ERC-7575 supports multiple asset entry points connected to one share token. Source: [ERC-7575](https://eips.ethereum.org/EIPS/eip-7575)
- ERC-3643's architecture combines permissioned tokens, identity registries, trusted claim issuers, and modular compliance checks. The capstone uses these ideas without claiming legal compliance. Sources: [ERC-3643 overview](https://docs.erc3643.org/erc-3643), [identity registry](https://docs.erc3643.org/erc-3643/smart-contracts-library/onchain-identities/identity-registry), [compliance framework](https://docs.erc3643.org/erc-3643/overview-of-the-protocol/built-in-compliance-framework)
- Role-based permissions and delayed administration are production concerns, not optional polish. Source: [OpenZeppelin access-control documentation](https://docs.openzeppelin.com/contracts/5.x/api/access)

## Security and testing evidence

Foundry supports fuzz and invariant campaigns, including targeted contracts and persistent/replayable failures. The portfolio gates therefore require property-based testing rather than only happy-path unit tests.

Sources: [Foundry invariant testing](https://getfoundry.sh/forge/invariant-testing), [Foundry testing guides](https://www.getfoundry.sh/guides/index.html)

The ERC-7540 specification itself recommends explicit state transitions, access controls, and invariants because asynchronous request flows are more complex and can strand assets. That directly motivates the async-vault project and its state-machine tests.

Source: [ERC-7540 security considerations](https://eips.ethereum.org/EIPS/eip-7540#security-considerations)

## Hiring signals

These are snapshots, not promises that a role will remain open.

- A current Paxos Labs smart-contract role asks for production Solidity, DeFi vault/lending knowledge, Foundry, and unit, fork, fuzz, and invariant tests; it also values CTFs, hackathons, and broader blockchain architecture. Source: [Paxos Labs smart-contract engineer](https://jobs.ashbyhq.com/paxoslabs/c898bc47-a0c7-49c4-9d89-5953b88e16e2)
- An Ondo engineering role combines React, Node, TypeScript, web3 integrations, on/off-chain data, Solidity, testing, security, and deployed EVM work. Source: [Ondo full-stack Web3 engineer](https://jobs.lever.co/ondofinance/7676879a-25ab-4bfe-bdbe-550175606751)
- A Chainlink research internship lists Go, TypeScript, Solidity, Python, Git, Linux, algorithms, distributed systems, and research communication. Source: [Chainlink Labs research internship](https://jobs.ashbyhq.com/chainlink-labs/c71ed144-8eb4-4acf-9bf3-137b1b067ed8/)
- A current Binance early-career program accepts project and open-source experience, and looks for backend foundations, Node.js, modern front ends, database design, product thinking, and clear communication. Source: [Binance Accelerator Program](https://jobs.lever.co/binance/43c20b4a-fbe2-4b1d-9c0b-7cdbe2bb2aac)
- A current smart-contract QA role highlights Solidity, Foundry/Hardhat, oracle attack vectors, automated testing, monitoring, and demonstrable GitHub testing work. Source: [CoinMarketCap smart-contract QA engineer](https://jobs.lever.co/coinmarketcap/98dc4737-c43a-42cc-b542-29f559b351ed)

The common denominator is demonstrable engineering depth, testing, security, systems understanding, and communication. The plan optimizes for those signals rather than certificates.

## Curriculum conclusions

1. Use one primary stack long enough to become credible: EVM, Solidity, Foundry, TypeScript, React, Next.js, and PostgreSQL.
2. Learn standard token behavior before permissioned and financial extensions.
3. Learn accounting, market structure, custody, and asset servicing alongside code.
4. Treat testing, threat modeling, monitoring, documentation, and UX as part of every flagship.
5. Begin with four narrow labs, then produce two deep projects instead of many tutorial clones.
6. Begin open-source work and professional relationships early; applications are a year-long feedback loop.
