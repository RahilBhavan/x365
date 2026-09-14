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

Read: TypeScript Handbook intro and the first half of Everyday Types
(string, number, boolean, type annotations on variables), 20 min. Stopped at
arrays and `any`.

What each variable is for (write this before you add code comments):

- `fundName`: names the fund the share is a claim on. The legal claim from
  Day 1 attaches to this fund's assets, not to the token.
- `shareSymbol`: the short ticker that ledgers and the token contract use
  to refer to the share. A label, not a definition of rights.
- `sharePrice`: the fictional NAV per share in dollars. Someone offchain sets
  this; the token never knows it.
- `isTransferable`: whether a holder may move shares to another address
  without the Transfer Agent approving it. `false` matches the Day 1 model,
  where the Transfer Agent record is authoritative.

I changed `sharePrice` from `100` to `101`. I predicted the output would be
`Price per share: 101` on line 3 with the other three lines unchanged. It
was exactly that.

Comments I removed: the first draft had `// the fund name` above `fundName`,
which just restated the identifier. Kept only comments that say why the
value exists or who sets it.

Thing I did not expect: `node` runs a `.ts` file directly (Node 22 strips
the type annotations before running). No compile step, no `tsc`. That
matters on Day 4.

---

## Day 4: errors

One block per error. Do not skip the prediction. Each error was made in a
scratch copy so the file in `main` was never broken.

### Error 1: removed a closing quotation mark

- Predicted: the program refuses to start; the error points at the line
  with the open quote.
- Useful part of the message:
  `SyntaxError [ERR_INVALID_TYPESCRIPT_SYNTAX]: Unterminated string constant`,
  with `^^^^^` under `"XTF;` on line 4.
- What the message means: the parser saw an opening `"` and reached the end
  of the line without a closing one, so it does not know where the string
  ends. Nothing ran; this failed while reading the file, before any
  `console.log`.
- Fix: put the `"` back after `XTF`.

### Error 2: misspelled `console`

- Predicted: same kind of failure as error 1, nothing runs.
- Useful part of the message: `ReferenceError: consle is not defined` at
  `e.ts:10:1`.
- What the message means: the file parsed fine, because `consle` is a
  legal name. The failure happened when line 10 executed and JavaScript
  looked up a variable called `consle` and found nothing. My prediction was
  half wrong: this is a runtime error, not a parse error. Line 10 is the
  first `console.log`, so still no output appeared.
- Fix: spell it `console`.

### Error 3: assigned a string to a `number`

- Predicted: TypeScript rejects it and the program does not run.
- Useful part of the message: there was none. `node` printed all four lines
  and `Price per share: 100` looked identical to before.
- What the message means: `node` strips the types and runs the JavaScript
  underneath; it never checks them. `"100"` is a perfectly good string to
  print. To see the error I had to run the type checker:
  `npx tsc --noEmit fund-share.ts` gave
  `error TS2322: Type 'string' is not assignable to type 'number'.`
  Lesson: the annotation is a promise the checker enforces, not a guard the
  runtime enforces. If nobody runs the checker, the promise is decoration.
- Fix: change `"100"` back to `100`.

### Error 4: referred to a variable that does not exist

- Predicted: `ReferenceError`, like error 2, since a typo in a variable name
  is the same mistake as a typo in `console`.
- Useful part of the message: `ReferenceError: shareTicker is not defined`
  at `e.ts:11:24`. The first line `Fund: x365 Short Treasury Fund` printed
  before the error.
- What the message means: line 10 ran and printed; line 11 asked for
  `shareTicker`, which was never declared. Errors stop the program at the
  line that fails, and everything before it has already happened. The
  `:24` is the column, pointing at the bad name.
- Fix: use `shareSymbol`, the name that was declared.

Pattern across the four: one parse error (nothing runs), two runtime errors
(runs up to the bad line), one type error (runs fine, only `tsc` complains).
Three different tools catch three different kinds of mistake.

---

## Day 5: Git

Read: Pro Git 1.1 to 1.3 and 2.1 to 2.2, 15 min. The three-state picture
(working directory, staging area, repository) is the whole thing.

What I saw, command by command:

- `git status`: two files listed under "Changes not staged for commit",
  both marked `modified`. No untracked files, because `fund-share.ts` was
  already committed as an empty file on Day 2.
- `git diff`: every line of `fund-share.ts` shown with a `+`, since the old
  version was empty. Then the notes changes.
- `git add work/week-01`: silent, like `mkdir` on Day 2.
- `git status` again: the same two files, now `M` in the first column
  instead of the second. Same edits, different bucket.
- `git diff` again: empty. `git diff --staged`: the same 82 insertions and
  21 deletions I saw before the add. The diff did not disappear, it moved.
- `git commit -m "Add first fund share program"` and `git log --oneline -5`:
  see the tracker row for the hash.

- untracked file: a file in the folder that Git has never been told about.
  It shows up in `git status` but is not in any snapshot. Delete it and Git
  cannot get it back. `fund-share.ts` was this for a moment on Day 2, before
  the Day 2 commit.
- staged change: an edit I have marked as "goes in the next commit". The
  file is still on disk exactly as I edited it; staging only changes which
  list Git puts it on. `git diff` shows unstaged edits, `git diff --staged`
  shows staged ones, and one edit is in exactly one of the two.
- commit: a saved snapshot of everything that was staged, with a message,
  an author, a time, and a pointer to the previous commit. It gets a hash.
  After this, the edit is recoverable even if I delete the file.

What `git add` does not do: it does not save anything permanently and it
does not send anything anywhere. It only copies the current version of the
file into the staging list. If I edit the file again after `git add`, the
new edit is unstaged and the old version is what would be committed. And
`git commit` still only writes to my disk; `git push` is what moves it to
GitHub.

---

## Day 6: improving the program

What I tried before asking for a hint (20 minutes minimum):

The hint I used, and what I still had to work out myself:

---

## Day 7: checkpoint

Answer `../../course/week-01/checkpoint.md` without notes first, then check
your work and record what you got wrong here.

Wrong or shaky answers:
