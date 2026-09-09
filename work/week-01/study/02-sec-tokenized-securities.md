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

Two terms first, since no legal background is assumed. A **security** is a financial instrument listed in the definition of that word in US federal law, such as a share in a fund. A **claim** is the right to demand something from a named party. The statement defines a tokenized security as a security "formatted as or represented by a crypto asset, where the record of ownership is maintained in whole or in part on or through one or more crypto networks" ("Introduction").

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

This is a staff statement, not a rule, regulation, or law. The staff say it "is not a rule, regulation, guidance, or statement of the U.S. Securities and Exchange Commission" and that it "has no legal force or effect." This note is not legal advice, and it makes no prediction about enforcement. The Treasury Fund, Fund Share, Share Token, Issuer, and Transfer Agent in this course are fictional and establish no legal rights. The statement is dated January 28, 2026, so a future reader should check whether newer staff statements, Commission rules, or legislation have replaced it.

## Citations

- Tokenized-security definition and the issuer versus third-party split: URL above, "Introduction".
- Format neutrality and issuer-integrated ledger records: same URL, "Issuer-Sponsored Tokenized Securities".
- Indirect interest via a security entitlement and third-party bankruptcy exposure: same URL, "Third Party-Sponsored Tokenized Securities" and "First Model: Custodial Tokenized Securities".
- Linked securities and security-based swaps: same URL, "Second Model: Synthetic Tokenized Securities".
- Staff-level status and no legal force: same URL, footnote to the byline.
