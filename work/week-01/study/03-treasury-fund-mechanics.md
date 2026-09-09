# Study note: what a tokenized Treasury fund actually is

Date accessed 2026-09-09. Terms from `CONTEXT.md` are capitalized. Tags map to Citations.

## The underlying asset

A Treasury bill is a short-term loan to the US government. The US Department of the Treasury, Bureau of the Fiscal Service issues bills in terms of 4, 6, 8, 13, 17, 26, and 52 weeks, with a $100 minimum purchase [S1]. Treasury sells a bill at a discount or at par and pays face value at maturity. The gap between the purchase price and the face value is the interest [S1].

A fund holds many bills with staggered maturities instead of one. Bills keep maturing, cash keeps arriving, and the manager buys new bills with it. That rolling process produces the return.

Franklin OnChain U.S. Government Money Fund (FOBXX) holds at least 99.5% of total assets in Government securities, cash, and repurchase agreements collateralized fully by those, keeps average portfolio maturity at 60 days or less, and buys only securities maturing in 397 days or less [S2]. BlackRock USD Institutional Digital Liquidity Fund (BUIDL) "invests 100% of its total assets in cash, U.S. Treasury bills, and repurchase agreements" [S3].

## The four layers

| Layer | Record kept by | Where | Breaks if wrong |
| --- | --- | --- | --- |
| Asset (the bills) | Custodian: JPMorgan Chase Bank at FOBXX [S4], BNY Mellon at BUIDL [S3] | Offchain | The Fund may not hold what it claims, so every layer above is valued against nothing |
| Fund (pool and accounts) | Issuer and administrator, audited by PricewaterhouseCoopers LLP at both funds [S3][S4] | Offchain | Net Asset Value is wrong, so every Subscription and Redemption prices wrong |
| Fund Share (the claim) | Transfer Agent: "maintains the official record of share ownership" [S2] | Offchain in law | The Investor's claim is wrong. Proceeds go to the wrong party |
| Share Token | The chain, written by the Transfer Agent's permissioned system [S2] | Onchain | The token moves while the claim does not |

SEC staff: "The format in which a security is issued or the methods by which holders are recorded does not affect application of the federal securities laws" [S5]. The token does not create the claim.

## Who does what, in the real world

| Course role | FOBXX (Franklin Templeton) | BUIDL (BlackRock / Securitize) |
| --- | --- | --- |
| Issuer | Franklin Templeton Trust; Franklin Advisers, Inc. as manager, Western Asset Management Company, LLC as sub-advisor [S2] | BlackRock; offered under Rule 506(c) and Section 3(c)(7) [S3] |
| Transfer Agent | Franklin Templeton Investor Services, LLC [S4] | "Securitize will act as a transfer agent and tokenization platform" [S3] |
| Custodian | JPMorgan Chase Bank, custodian and sub-administrator [S4] | "Bank of New York Mellon will serve as the custodian of the Fund's assets" [S3] |
| Cash Provider | Not one named party. Fed Wires must arrive before 3 p.m. Pacific for same-day trade date [S6] | Securitize Markets as placement agent [S3]; cash rails not named (unverified) |
| Eligibility Provider | The Fund itself, under "its anti-money laundering and know-your-customer policies" [S7] | Securitize Markets; qualified investors, $5 million minimum [S3] |

No real fund uses these labels. The mapping is my reading, not the issuers' wording.

## What the blockchain proves and what it does not

The chain can show:

- that a token contract exists and what each address holds [S8];
- transfer history with timestamps, since "data on all transactions involving the bond tokens are stored on the Ethereum blockchain" [S8];
- that a permission call happened; FOBXX uses "a whitelist of permissioned wallets" in the contract [S2];
- the bytecode, "practically speaking very difficult to understand" without published source [S8].

The chain cannot show:

- that the Fund still holds the bills. Only the Custodian says so, and custody risk covers "insolvency, negligence, fraud, poor administration or inadequate record-keeping" [S9]. A Reserve Report is a statement, not proof.
- that Net Asset Value is honest. Offchain assets "generally involve an off-chain agent, such as a bank, to assess the value" [S10]. The Issuer computes NAV; the auditor checks later [S3][S4].
- that the Governing Document says what the Issuer claims. A hash and URI prove a file did not change, not what rights it grants. The Issuer vouches for that.
- that an offchain cash leg settled. Fed researchers found "traditional payment rails were used to move cash between participants," invisible onchain, with "individual functions manually called by an entity outside the smart contracts" [S8]. The Cash Provider vouches for cash. Delivery versus Payment means "one leg of the transaction settles if and only if the other one does" [S11], which no chain can enforce over a leg it cannot see.

## Authoritative Record

`CONTEXT.md` defines it as the record that controls when two records disagree, and makes each project name it in advance. Name it after a dispute and the party with more leverage picks.

FOBXX names it: all fund and shareholder records are "under the full and complete control of the Fund's transfer agent," which "has the ability to correct errors and unauthorized transactions in, and limit the transferability of, Fund shares" [S2].

Scenario: an Investor's Share Tokens move to another address after a key compromise. The chain shows the new address holding them. The Transfer Agent calls the transfer unauthorized and keeps the original Investor on its record. Dividends and Redemption proceeds follow the Transfer Agent, so the new address holds a record with no claim behind it.

## Net Asset Value

`CONTEXT.md` defines Net Asset Value as assets minus liabilities at a stated valuation time. It is a snapshot, not a live price. FOBXX calculates NAV every day both the New York Stock Exchange and the Federal Reserve Bank of New York are open, and declares dividends "each day when it makes its final net asset value (NAV) calculation" [S6][S7].

So a Subscription or Redemption carries a cutoff. An FOBXX investment earns dividends from the day it arrives only if it arrives in good order before 2 p.m. Pacific or the final NAV calculation, whichever comes first [S7]. A later request prices at a future NAV nobody knows yet. That is why a Pending Request cannot state its output and only a Claimable Request has a fixed one.

BUIDL "seeks to offer a stable value of $1 per token" [S3]. Seeking is an aim, not a guarantee.

## Citations

All URLs accessed 2026-09-09; dates are publication dates.

- [S1] TreasuryDirect, "Treasury Bills," undated. https://www.treasurydirect.gov/marketable-securities/treasury-bills/
- [S2] Franklin Templeton Trust, Form 485BPOS prospectus, 2026-08-01, "Use of Blockchain" and "Principal Investment Strategies." https://www.sec.gov/Archives/edgar/data/0001786958/000165558926000970/c485bpos.htm
- [S3] Securitize investor relations, "BlackRock Launches Its First Tokenized Fund, BUIDL, on the Ethereum Network," 2024-03-20. Issuer press release, not a prospectus. https://investors.securitize.io/news/news-details/2024/BlackRock-Launches-Its-First-Tokenized-Fund-BUIDL-on-the-Ethereum-Network-03-20-2024/default.aspx
- [S4] Same filing as [S2]: service provider list and transfer agent agreement exhibit.
- [S5] SEC Division of Corporation Finance, "Statement on Tokenized Securities," 2026-01-28. https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- [S6] Same filing as [S2]: "Your Account" and "Calculating Share Price."
- [S7] Same filing as [S2]: "Purchase and Sale of Fund Shares" and "Distributions and Taxes."
- [S8] Watsky and others, "Tokenized Assets on Public Blockchains: How Transparent is the Blockchain?", FEDS Notes, Federal Reserve Board, 2024-04-03. https://www.federalreserve.gov/econres/notes/feds-notes/tokenized-assets-on-public-blockchains-how-transparent-is-the-blockchain-20240403.html
- [S9] BIS and CPMI, "Tokenisation in the context of money and other assets," report to the G20, 2024-10-21. https://www.bis.org/cpmi/publ/d225.pdf
- [S10] Carapella and others, "Tokenization: Overview and Financial Stability Implications," FEDS 2023-060, 2023-08-03. https://www.federalreserve.gov/econres/feds/files/2023060pap.pdf
- [S11] Lee, Martin and others, "What Is Atomic Settlement?", Liberty Street Economics, Federal Reserve Bank of New York, 2022-11. https://libertystreeteconomics.newyorkfed.org/2022/11/what-is-atomic-settlement/

Unverified, do not repeat as fact:

- BUIDL's fund jurisdiction. Crypto explainer sites say British Virgin Islands. No issuer document I reached says so; [S3] names only Rule 506(c) and Section 3(c)(7). BUIDL's offering documents sit behind an investor login.
- Which party moves cash for a BUIDL Subscription or Redemption [S3] does not say.
- FOBXX's exact final NAV clock time. The prospectus gives the 2 p.m. and 3 p.m. Pacific cutoffs only [S6][S7].

Not investment advice, and no view on any fund.
