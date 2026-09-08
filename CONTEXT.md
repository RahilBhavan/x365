# x/365 tokenization

This glossary defines the financial-asset model used by the x/365 course and its portfolio projects. The projects use a fictional Treasury fund so that the learner can model issuance, ownership, valuation, and settlement without handling real money or personal data.

## Asset and ownership

**Treasury Fund**:
A fictional investment fund that holds short-duration US Treasury assets. The course uses the fund only as an educational case study.
_Avoid_: Treasury token, government-backed token

**Fund Share**:
A proportional claim defined by the Treasury Fund's fictional governing documents. A token can record a Fund Share, but the token alone does not create the legal claim.
_Avoid_: Coin, stock token

**Share Token**:
The onchain representation of Fund Shares in the educational system.
_Avoid_: Fund Share when referring only to the blockchain record

**Governing Document**:
A fictional offchain document that defines the Fund Share and the parties' rights. The project stores only a hash, version, and public test URI.
_Avoid_: Smart contract terms

**Authoritative Record**:
The record that the fictional system treats as controlling when two records disagree. Each project must name its Authoritative Record instead of implying that every record is equally authoritative.
_Avoid_: Source of truth

## Parties

**Issuer**:
The fictional organization that creates the Treasury Fund and issues Fund Shares.
_Avoid_: Token owner, protocol

**Investor**:
A fictional person or organization that requests, holds, transfers, or redeems Fund Shares.
_Avoid_: User when the financial role matters

**Transfer Agent**:
The fictional operator that maintains ownership records and processes issuance, transfer, recovery, and redemption actions.
_Avoid_: Admin

**Eligibility Provider**:
The fictional party that attests whether an Investor meets a defined participation rule. The course stores no personal identity data.
_Avoid_: KYC provider unless an actual KYC service exists

**Custodian**:
The fictional party that records the Treasury Fund's offchain assets.
_Avoid_: Vault when referring to an offchain institution

**Cash Provider**:
The fictional party that records the cash side of a subscription, redemption, or trade.
_Avoid_: Bank unless the simulation models a bank

## Fund operations

**Net Asset Value**:
The fictional value of the Treasury Fund's assets minus its liabilities at a stated valuation time.
_Avoid_: Token price

**Subscription**:
An Investor's request to exchange cash for Fund Shares.
_Avoid_: Deposit when the request includes offchain settlement

**Redemption**:
An Investor's request to exchange Fund Shares for cash.
_Avoid_: Withdrawal when the request includes offchain settlement

**Settlement**:
The completion of the asset and cash obligations created by a Subscription, Redemption, or trade.
_Avoid_: Transaction, payment

**Delivery versus Payment**:
A Settlement method that makes delivery of the asset conditional on payment, and payment conditional on delivery.
_Avoid_: Swap when discussing the settlement guarantee

**Reconciliation**:
A comparison of onchain records with the fictional Transfer Agent, Custodian, and Cash Provider records to find mismatches.
_Avoid_: Sync

## Request lifecycle

**Pending Request**:
A Subscription or Redemption that the system has accepted but not approved for claiming.
_Avoid_: Processing

**Claimable Request**:
A Subscription or Redemption for which the system has fixed the output and permits the Investor to claim it.
_Avoid_: Approved when the claim state matters

**Claimed Request**:
A Subscription or Redemption whose Investor has received the fixed output.
_Avoid_: Complete when Settlement may still be a separate fact

## Safety terms

**Eligibility Attestation**:
A signed, expiring statement about an Investor's eligibility. It contains an opaque subject identifier and no personal identity data.
_Avoid_: Identity, KYC record

**Policy Rule**:
A test that permits or rejects a Share Token operation based on stated fictional participation constraints.
_Avoid_: Law, regulation

**Reserve Report**:
A signed statement from the fictional Custodian about assets recorded at a stated time.
_Avoid_: Proof of reserves when no cryptographic or independent proof exists
