# Study note: Ethereum token standards

- Source URL: https://ethereum.org/developers/docs/standards/tokens/
- Also read: https://ethereum.org/developers/docs/standards/tokens/erc-20/
- Date accessed: 2026-09-09
- Level: Level A (read the assigned portion, reproduce an example, apply it to the week's artifact)

Note on the live page: the index lists only ERC-20, ERC-721, and ERC-1155. ERC-4626 has its own page at `/developers/docs/standards/tokens/erc-4626/` but is not linked from that index today.

## What an ERC actually is

An ERC is an agreement about function names. Nothing more.

Ethereum runs programs called smart contracts. A contract can expose any functions its author wants. If every author picks different names, a wallet has to be rewritten for every contract it meets. An ERC fixes the names, the inputs, and the outputs so that one wallet works with many contracts.

The source says these standards exist so contracts "remain composable, so when a new project issues a token, it stays compatible with existing decentralized exchanges and applications."

That is a software compatibility promise. It is not a legal instrument. Following ERC-20 does not create a claim on anything, does not make a number represent money, and does not bind an Issuer to any obligation. In this course, the Governing Document defines the Fund Share. The ERC only says how a program that tracks records must be called.

## ERC-20 in plain language

ERC-20 is "a standard interface for fungible (interchangeable) tokens." Fungible means every unit is identical to every other unit.

The state it keeps:

- `totalSupply()`: how many units exist.
- `balanceOf(address)`: how many units an address holds.
- `allowance(address,address)`: how many units one address has permitted a second address to move on its behalf.

The operations:

- `transfer(address,uint256)`: the caller moves its own units.
- `approve(address,uint256)`: the caller permits another address to move some of its units.
- `transferFrom(address,address,uint256)`: the permitted address moves them.

Two events, `Transfer` and `Approval`, announce that these happened. `name()`, `symbol()`, and `decimals()` are labels for display.

That is the whole model: a balance table, a permission table, and moves between them.

What ERC-20 does not define:

- Who may hold a balance. There is no eligibility test in the standard.
- Why a balance changed. A Subscription, a Redemption, an error, and a theft all produce the same `Transfer` event.
- Any offchain fact. Cash received, assets held by a Custodian, or a signed Governing Document are all outside it.
- Any price. The standard has no Net Asset Value and no valuation concept at all.

## The other standards in one line each

- ERC-721: "a standard interface for non-fungible tokens, like a deed for artwork or a song," meaning each unit is distinct rather than interchangeable.
- ERC-1155: one contract holding many token types at once, which the source says "allows for more efficient trades and bundling of transactions."
- ERC-4626: "a standard API for tokenized yield-bearing vaults that represent shares of a single underlying ERC-20 token."

When this course reaches them: ERC-4626 is Weeks 32 through 36, specifically Week 34 for the full standard. ERC-3643, the permissioned security-token architecture, appears in the RWA sections at Week 28 and again in Weeks 37 and 38. ERC-721 and ERC-1155 are marked optional survey reading and are not central to a fungible Treasury Fund.

Do not study these now. Week 1 has no blockchain deliverable. Reading ERC-4626 before ERC-20 and accounting does not work, because the reading plan states that "ERC-4626 is understandable only after ERC-20 and accounting."

## How this maps onto the course glossary

| Standard concept | Course term | What it is NOT |
| --- | --- | --- |
| Token balance | Share Token record | Not the Fund Share itself, not the Treasury Fund's assets |
| `totalSupply` | Count of Share Tokens issued | Not the Net Asset Value, not the fund's size in dollars |
| `Transfer` event | Evidence that a Share Token record moved | Not Settlement, not proof that cash moved |
| `approve` / `allowance` | A spending permission on the chain | Not an Eligibility Attestation, not a Policy Rule |
| The contract's balance table | One record among several | Not automatically the Authoritative Record |
| Address holding a balance | A key that can sign | Not an identified Investor |

## Three questions this source does NOT answer

1. Who is allowed to hold this balance, and what happens when an address should not have it? ERC-20 has no eligibility concept, so the fictional Transfer Agent has to hold the ownership record and process recovery.
2. Do the assets behind these balances exist? The standard never touches the world outside the chain, so the fictional Custodian must report what the Treasury Fund actually holds.
3. What rights does a holder have? A balance is a number. The Governing Document is where the Fund Share and the parties' rights are defined.

## Citations

- Token standards purpose and the ERC-20, ERC-721, ERC-1155 one-liners: https://ethereum.org/developers/docs/standards/tokens/
- ERC-20 definition, methods, and events: https://ethereum.org/developers/docs/standards/tokens/erc-20/
- ERC-4626 definition: https://ethereum.org/developers/docs/standards/tokens/erc-4626/
- Week assignments, standards sequence, and source levels: /Users/rbhavan/projects/Tokenization/docs/READING_AND_SOURCE_CODE_PLAN.md
- Course terms used above: /Users/rbhavan/projects/Tokenization/CONTEXT.md
