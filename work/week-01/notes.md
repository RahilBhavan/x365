# Week 1 notes

Write every answer in your own words. If a sentence could be pasted from a
source, rewrite it. The study pack in `study/` is reference material, not an
answer key.

---

## Day 1: understand the project

Sources read (add the URL and how long you spent on each):

- https://ethereum.org/developers/docs/standards/tokens/ and the ERC-20 page, 15 min
- https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities (intro and taxonomy), 10 min
- `CONTEXT.md` glossary plus `study/03-treasury-fund-mechanics.md`, 20 min

### 1. What is the underlying asset?

Short-term loans to the US government: Treasury bills. You buy one for less
than its face value and get the face value back in a few weeks or months.
The gap is the interest. The Treasury Fund holds a pile of these with
different maturity dates, and as each one pays out the manager buys another.
That rolling pile of bills, plus some cash, is the real asset. Everything
else in the model is a claim on it or a record of a claim on it.

### 2. What does the Investor own in the fictional model?

A Fund Share: a proportional claim on the Treasury Fund's assets minus its
liabilities. If the fund holds $1,000,000 of bills and there are 10,000
shares, one share is a claim on $100 worth. The Investor does not own any
particular bill, and does not own "the token". The Investor owns the claim
that the Governing Document defines, and the Transfer Agent's record is what
says who holds it.

### 3. What does the Share Token record?

A number next to an address on a chain: this address holds N Share Tokens.
It also records that the number changed, with a timestamp. That is all an
ERC-20 balance is. It does not say who controls the address, why the number
changed, whether the bills still exist, or what rights the holder has. It
is a representation of the Fund Share, the way a receipt represents a
purchase.

### 4. Which facts remain offchain?

- Whether the Custodian actually holds the bills. The chain cannot check a
  bank vault.
- The Net Asset Value. Someone offchain prices the bills and subtracts
  liabilities at a stated time.
- What the Governing Document says. Onchain there is only a hash; the rights
  live in the file.
- Whether cash moved. A Subscription or Redemption has a dollar leg that runs
  on bank rails the chain never sees.
- Who the Investor is and whether they are allowed to hold shares. An
  address is a key, not a person.
- Which record wins in a dispute. That is a decision the Issuer writes down,
  not something a contract can settle.

### 5. What could go wrong if two records disagree?

Say an Investor's key is stolen and the tokens move to a thief's address.
The chain now says the thief holds 100 tokens. The Transfer Agent still
lists the original Investor. If nobody has named the Authoritative Record
in advance, two people both believe they are owed the next dividend and
the Redemption proceeds, and whoever has more leverage wins the argument
after the fact. If the Transfer Agent record is named as controlling, the
thief holds a number with no claim behind it and the Investor gets their
record repaired. The reverse failure is just as bad: if the chain is named
as controlling, then a bug or a stolen key becomes a real transfer of
ownership. Either way, silent disagreement means the fund pays the wrong
party or pays twice. Reconciliation exists to catch that before money moves.

### The sentence I have to be able to say out loud

Why a token is not automatically the underlying asset:

The token is a record that says "this address holds N shares." The shares
are a claim defined in a document, and the asset behind that claim is a
pile of Treasury bills sitting with a Custodian. Copying the record onto a
blockchain changes where the record lives, not what it is a record of. The
SEC staff said the same thing in plain terms: putting a security in token
form does not change the security.

### What surprised me

(One sentence. This is also the bracketed line in the Day 1 post.)

What surprised me is that ERC-20 has no idea what a share is: a theft, a
redemption, and a legitimate purchase all produce the identical Transfer
event, so everything that makes it a fund share has to live somewhere the
chain cannot see.

---

## Day 2: the terminal

Predict before you run each command, then compare.

| Command | What I predicted | What happened |
| --- | --- | --- |
| `pwd` | Prints the folder I am in as a full path from `/` | `/Users/rbhavan/projects/Tokenization` |
| `ls` | Lists what is in that folder | `CONTEXT.md course docs README.md TRACKER.md work` |
| `mkdir -p work/week-01` | Nothing visible: the folder already exists and `-p` means "do not complain if it does" | No output, no error, folder unchanged |
| `cd work/week-01` | Moves me two levels down; `pwd` would now end in `week-01` | No output. `pwd` printed `/Users/rbhavan/projects/Tokenization/work/week-01` |
| `touch fund-share.ts` | Creates an empty file with that name in the current folder | No output. `ls` now shows `fund-share.ts` next to `map.md`, `notes.md`, `study`; it is 0 bytes |
| `cd ../..` | Each `..` goes up one folder, so two of them put me back at the repo root | No output. `pwd` printed `/Users/rbhavan/projects/Tokenization` again |

Two things I did not predict: commands that succeed at changing something
(`mkdir`, `cd`, `touch`) print nothing at all, so silence means success. And
`touch` on a file that already exists does not empty it; it only updates the
modified time.

Definitions in my own words:

- current directory: the folder the terminal is "standing in" right now.
  Every command that takes a path starts looking from here unless the path
  begins with `/`. `pwd` prints it.
- parent directory: the folder one level up, the one that contains the
  current directory. Spelled `..` in a path.
- relative path: directions from where I am standing, like `work/week-01`
  or `../..`. The same relative path points at different places depending
  on the current directory.
- absolute path: directions from the root of the disk, always starting with
  `/`, like `/Users/rbhavan/projects/Tokenization`. It means the same thing
  no matter where I am standing.
- file: a named thing that holds content (text, code, an image). `fund-share.ts`
  is a file, currently empty.
- folder: a named container for files and other folders. Also called a
  directory; the terminal uses that word. `work` is a folder that contains
  the folder `week-01`.

---

## Day 3: the first program

What each variable is for (write this before you add code comments):

- `fundName`:
- `shareSymbol`:
- `sharePrice`:
- `isTransferable`:

I changed `___` to `___`. I predicted the output would be `___`. It was `___`.

---

## Day 4: errors

One block per error. Do not skip the prediction.

### Error 1: removed a closing quotation mark

- Predicted:
- Useful part of the message:
- What the message means:
- Fix:

### Error 2: misspelled `console`

- Predicted:
- Useful part of the message:
- What the message means:
- Fix:

### Error 3: assigned a string to a `number`

- Predicted:
- Useful part of the message:
- What the message means:
- Fix:

### Error 4: referred to a variable that does not exist

- Predicted:
- Useful part of the message:
- What the message means:
- Fix:

---

## Day 5: Git

- untracked file:
- staged change:
- commit:

What `git add` does not do:

---

## Day 6: improving the program

What I tried before asking for a hint (20 minutes minimum):

The hint I used, and what I still had to work out myself:

---

## Day 7: checkpoint

Answer `../../course/week-01/checkpoint.md` without notes first, then check
your work and record what you got wrong here.

Wrong or shaky answers:
