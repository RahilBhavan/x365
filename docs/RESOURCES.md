# Primary-source learning path

Use primary specifications and maintained documentation as the spine. Courses and videos can help unblock a concept, but they should not replace reading the interface, security notes, and source code you are implementing.

## Weeks 1 through 16: programming and full-stack development

- [MDN: Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js learning materials](https://nodejs.org/en/learn)
- [Pro Git](https://git-scm.com/book/en/v2)
- [React learning guide](https://react.dev/learn)
- [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html)

Use one main source for each topic. Do the exercises before adding another course or video series.

## Weeks 17 through 36: Ethereum and Solidity

- [Ethereum developer documentation](https://ethereum.org/developers/docs/)
- [Ethereum token standards](https://ethereum.org/developers/docs/standards/tokens/)
- [Solidity documentation](https://docs.soliditylang.org/)
- [Solidity security considerations](https://docs.soliditylang.org/en/latest/security-considerations.html)
- [Foundry documentation](https://getfoundry.sh/)
- [Foundry invariant testing](https://getfoundry.sh/forge/invariant-testing)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/5.x/)
- [OpenZeppelin access control](https://docs.openzeppelin.com/contracts/5.x/access-control)

## Standards sequence

Read the abstract, motivation, full specification, rationale, and security considerations. Do not read only a summary.

1. [ERC-20](https://eips.ethereum.org/EIPS/eip-20)
2. [ERC-721](https://eips.ethereum.org/EIPS/eip-721)
3. [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155)
4. [EIP-712 typed structured data](https://eips.ethereum.org/EIPS/eip-712)
5. [ERC-2612 permit](https://eips.ethereum.org/EIPS/eip-2612)
6. [ERC-4626 tokenized vaults](https://eips.ethereum.org/EIPS/eip-4626)
7. [ERC-7540 asynchronous vaults](https://eips.ethereum.org/EIPS/eip-7540)
8. [ERC-7575 multi-asset vaults](https://eips.ethereum.org/EIPS/eip-7575)
9. [ERC-3643 documentation](https://docs.erc3643.org/erc-3643)

For every standard, produce four things: a one-page model, a minimal implementation or integration, adversarial tests, and a "when not to use it" note.

## Tokenization, money, and market structure

- [SEC staff statement on tokenized securities (January 2026)](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)
- [BIS: tokenisation for the real world](https://www.bis.org/speeches/20240208-tokenisation-real-world)
- [BIS Annual Economic Report 2025, next-generation monetary and financial system](https://www.bis.org/publications/aer-2025/next-generation-monetary-financial-system)
- [Federal Reserve Bank of New York: what is atomic settlement?](https://libertystreeteconomics.newyorkfed.org/2022/11/what-is-atomic-settlement/)

Treat regulatory statements as dated and jurisdiction-specific. Re-check them when writing a related post. Never turn a reading note into legal advice.

## Oracles and interoperability

- [Chainlink documentation](https://docs.chain.link/)
- [Chainlink CCIP documentation](https://docs.chain.link/ccip)
- [Chainlink Proof of Reserve documentation](https://docs.chain.link/data-feeds/proof-of-reserve)

Study the trust and failure model before copying an integration. A mock adapter in a portfolio project must be labeled as a simulation.

## Source-code reading targets

Select the exact current tagged release when the week begins and record the commit/tag you studied:

- OpenZeppelin ERC-20, access control, and ERC-4626 implementations;
- Solmate/Solady token and vault implementations for contrast, not automatic adoption;
- one production vault protocol such as Morpho or Yearn;
- one RWA protocol or standard implementation such as Centrifuge or ERC-3643 T-REX;
- one indexer/event-consumer implementation;
- one published audit relevant to each flagship.

For each target, trace one user flow, one privileged flow, one failure flow, and the associated tests. Do not claim you "audited" a protocol after a source walkthrough.

## Reading-note template

```markdown
# Source and version

URL / commit / publication date:

## Problem it solves

## Actors and trust assumptions

## State and invariants

## Happy path

## Failure and recovery paths

## Security considerations

## What surprised me

## What I will apply and what I will not copy

## Questions to verify
```
