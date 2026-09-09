# Study note: SEC staff statement on tokenized securities

- URL reached: https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities
- Exact title: Statement on Tokenized Securities
- Issuing divisions: Division of Corporation Finance, Division of Investment Management, and Division of Trading and Markets (SEC staff)
- Statement date: January 28, 2026
- Date accessed: September 9, 2026
- Level: A
- Scope of this note: introduction and taxonomy only

## The one sentence that matters

Putting a security into token form does not change what the security is or which rules apply to it: the staff write that "the format in which a security is issued or the methods by which holders are recorded (e.g., onchain vs. offchain) does not affect application of the federal securities laws" ("Issuer-Sponsored Tokenized Securities").

One term first. A **claim** is the right to demand something from a named party. The statement defines a tokenized security as a security "formatted as or represented by a crypto asset, where the record of ownership is maintained in whole or in part on or through one or more crypto networks" ("Introduction").

## What a security is

The sentence above only bites if the thing being tokenized is a security, so it is worth knowing what that word covers.

### The law defines it by list, not by principle

Section 2(a)(1) of the Securities Act of 1933 does not give a one-line test. It gives an enumerated list, opening with "unless the context otherwise requires" and then naming:

> any note, stock, treasury stock, security future, security-based swap, bond, debenture, evidence of indebtedness, certificate of interest or participation in any profit-sharing agreement, collateral-trust certificate, preorganization certificate or subscription, transferable share, investment contract, voting-trust certificate, certificate of deposit for a security, fractional undivided interest in oil, gas, or other mineral rights, any put, call, straddle, option, or privilege on any security ... or, in general, any interest or instrument commonly known as a "security"

Read that list once and notice its shape. It is not a definition of what a security *does*. It is a catalogue of instruments Congress decided to cover, closing with a catch-all for anything "commonly known as" one. So there are two routes in: an instrument is named on the list, or it is an **investment contract**.

### The investment contract route

The list does not define "investment contract". The Supreme Court did, in *SEC v. W.J. Howey Co.*, 328 U.S. 293 (1946). An investment contract exists when there is:

1. an investment of money;
2. in a common enterprise;
3. with a reasonable expectation of profits;
4. to be derived from the efforts of others.

All four have to hold. The fourth element is the one that does most of the work: if the return depends on somebody else managing the thing, the arrangement tends to land inside the definition regardless of what the paperwork calls it. That is why the test is applied to the economic reality of an arrangement rather than to its label, which is the same instinct behind the statement's format neutrality.

### Where the course's Fund Share would sit

The fictional Fund Share is a proportional claim on a pooled fund of Treasury securities, managed by the Issuer, held for a return the Investor does not generate. Both routes point the same direction. On the named-list route it resembles a "transferable share" or a "certificate of interest or participation in any profit-sharing agreement". On the Howey route all four elements read as present.

Hold that loosely. The course fund is fictional, this note is not legal advice, and nothing here classifies any real instrument. The point for your engineering is narrower and firm: the Fund Share is the regulated thing, and the Share Token is a record of it. Choosing a different token standard does not move that line.

### Currency check, and why it matters here

The SEC framework most often quoted for the Howey elements, the April 3, 2019 "Framework for 'Investment Contract' Analysis of Digital Assets", was **withdrawn**. It is superseded by a Commission interpretation dated March 17, 2026, "Application of the Federal Securities Laws to Certain Types of Crypto Assets and Certain Transactions Involving Crypto Assets" (Release 33-11412; press release 2026-30). Anything citing the 2019 framework as current is out of date.

Two things follow. First, the 2026 interpretation names categories of crypto assets treated as not securities in themselves: digital commodities, digital collectibles, digital tools, and payment stablecoins. A token recording a share in a managed fund is not any of those, so nothing in it moves the Fund Share out of the definition. Second, note the seniority difference. The tokenized-securities statement you are reading is staff-level with no legal force. The March 2026 interpretation is a Commission interpretation. When two documents disagree, that difference decides which one carries weight, in the same way your system has to name an Authoritative Record before a dispute rather than after one.

## The taxonomy

The statement splits tokenized securities by who created the token: the issuer of the underlying security, or an unaffiliated third party. The third-party branch then splits into a custodial model and a synthetic model.

| Category | Who creates the token | Who the holder has a claim against | New risk the wrapper introduces |
| --- | --- | --- | --- |
| Issuer-sponsored | The issuer of the underlying security | The issuer of the underlying security, same as an untokenized holder. The issuer builds distributed ledger technology into its own ownership records, so a token transfer can update the official securityholder file | No new intermediary is inserted. The risk moves to the records themselves: which record controls, and whether the onchain record and the issuer's official file stay in agreement |
| Third party-sponsored, custodial | An unaffiliated third party that holds the underlying security in custody | The third party, not the issuer. The token represents "the holder's indirect interest in the underlying security via the security entitlement" ("First Model: Custodial Tokenized Securities"). A **security entitlement** is the package of rights a customer has against the intermediary holding a security for them | Exposure to the third party. The staff write that holders "may be exposed to risks with respect to the third party, such as bankruptcy, to which a holder of the underlying security would not necessarily be exposed" |
| Third party-sponsored, synthetic (linked security) | An unaffiliated third party | The third party alone. A linked security "is a security issued by the third party itself that provides synthetic exposure to a referenced security, but it is not an obligation of the issuer of the referenced security" ("Second Model: Synthetic Tokenized Securities"), and it confers no rights from that issuer | The holder never owns or holds an interest in the referenced security. Payment depends entirely on the third party performing, and issuer rights such as voting do not pass through |
| Third party-sponsored, synthetic (security-based swap) | An unaffiliated third party | The third-party counterparty | Same dependence on the counterparty, with no equity or voting rights in the referenced security |

## Where the course's fictional model sits in that taxonomy

In CONTEXT.md the Issuer creates the Treasury Fund, the Governing Document defines the Fund Share, and the Share Token records that Fund Share onchain. One party stands behind both the claim and the token, and the token is the issuer's own record of an interest the issuer already defined. That is the issuer-sponsored category. It is not custodial or synthetic, because no third party holds Fund Shares and issues its own receipt against them. The model still needs a named Transfer Agent and a named Authoritative Record, because the issuer-sponsored category is exactly where the onchain record and the official ownership file can disagree.

## Consequence for the architecture

Every project must name one Authoritative Record and write down the rule for reconciling the Share Token record against the Transfer Agent record when the two disagree. The taxonomy makes ownership a records question, so minting tokens without naming the controlling record does not model ownership.

## Limitation of this source

This is a staff statement, not a rule, regulation, or law. The staff say it "is not a rule, regulation, guidance, or statement of the U.S. Securities and Exchange Commission" and that it "has no legal force or effect." This note is not legal advice, and it makes no prediction about enforcement. The Treasury Fund, Fund Share, Share Token, Issuer, and Transfer Agent in this course are fictional and establish no legal rights. The statement is dated January 28, 2026, so a future reader should check whether newer staff statements, Commission rules, or legislation have replaced it. One such document already exists: the Commission issued its interpretation on crypto assets on March 17, 2026, seven weeks after this staff statement. Read the later Commission document before relying on the earlier staff one.

## Citations

- Tokenized-security definition and the issuer versus third-party split: URL above, "Introduction".
- Format neutrality and issuer-integrated ledger records: same URL, "Issuer-Sponsored Tokenized Securities".
- Indirect interest via a security entitlement and third-party bankruptcy exposure: same URL, "Third Party-Sponsored Tokenized Securities" and "First Model: Custodial Tokenized Securities".
- Linked securities and security-based swaps: same URL, "Second Model: Synthetic Tokenized Securities".
- Statutory definition of "security": Securities Act of 1933 section 2(a)(1), codified at 15 U.S.C. 77b(a)(1), <https://www.law.cornell.edu/uscode/text/15/77b>, accessed 2026-09-09.
- Four Howey elements: *SEC v. W.J. Howey Co.*, 328 U.S. 293 (1946), as stated in the SEC framework at <https://www.sec.gov/corpfin/framework-investment-contract-analysis-digital-assets>, accessed 2026-09-09. That page is marked withdrawn.
- Withdrawal and successor: SEC, "Application of the Federal Securities Laws to Certain Types of Crypto Assets and Certain Transactions Involving Crypto Assets", Release 33-11412, March 17, 2026, <https://www.sec.gov/files/rules/interp/2026/33-11412.pdf>; press release 2026-30, <https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets>, both accessed 2026-09-09.
- Non-security categories (digital commodities, digital collectibles, digital tools, payment stablecoins): press release 2026-30, URL above. Taken from the press release summary; the interpretation PDF did not extract cleanly, so confirm the wording in the release itself before quoting it publicly.
- Staff-level status and no legal force: same URL, footnote to the byline.
