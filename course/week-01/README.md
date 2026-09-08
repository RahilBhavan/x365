# Week 1: Run your first TypeScript program

This week, you will build a command-line program that prints a fictional Fund Share record. You will also learn enough terminal and Git vocabulary to save your work correctly.

Do not install a framework. Node.js can run the TypeScript exercises in this environment.

## Week 1 result

By Sunday, your repository must contain:

- `work/week-01/fund-share.ts`;
- `work/week-01/notes.md`;
- a completed Week 1 source note using the [research curriculum template](../../docs/READING_AND_SOURCE_CODE_PLAN.md#the-source-note-format);
- at least three meaningful Git commits;
- a one-page tokenization map;
- one public Day 1 post and one weekly build post;
- a completed weekly review in `TRACKER.md`.

## Day 1: Understand the project

### Read

Read these sections:

1. [Ethereum token standards](https://ethereum.org/developers/docs/standards/tokens/)
2. The introduction and taxonomy in the [SEC staff statement on tokenized securities](https://www.sec.gov/newsroom/speeches-statements/corp-fin-statement-tokenized-securities-012826-statement-tokenized-securities)
3. [The x/365 glossary](../../CONTEXT.md)

Stop after 45 minutes. You do not need to understand every legal or technical term.

### Draw

Draw a map with these boxes:

- Treasury Fund
- Fund Share
- Share Token
- Issuer
- Investor
- Transfer Agent
- Custodian
- Cash Provider
- Governing Document
- blockchain record

Connect the boxes with labeled arrows. Mark the token as a representation of the Fund Share. Do not mark the token as the Treasury asset itself.

Use paper, a drawing tool, or Mermaid. Save a readable image or Markdown diagram in `work/week-01/`.

### Write

Create `work/week-01/notes.md`. Answer these questions in your own words:

1. What is the underlying asset?
2. What does the Investor own in the fictional model?
3. What does the Share Token record?
4. Which facts remain offchain?
5. What could go wrong if two records disagree?

### Publish

Use this structure for the first X post:

```text
Day 1/365 of learning tokenization in public.

I started by separating three things that are easy to confuse:
1. the Treasury assets,
2. the Fund Share and its defined rights,
3. the token that records the share onchain.

[Add one sentence about what surprised you.]

My map and 52-week syllabus: [link]
```

Rewrite the bracketed sentence yourself. Attach the map.

### Day 1 checklist

- [ ] I read the three sources.
- [ ] I created the map.
- [ ] I answered the five questions without copying source text.
- [ ] I can explain why a token is not automatically the underlying asset.
- [ ] I published or drafted the Day 1 post.

## Day 2: Use the terminal

Read the Node.js introduction to [running command-line programs](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line). Then learn these commands by running them, not by memorizing a list:

```sh
pwd
ls
mkdir -p work/week-01
cd work/week-01
touch fund-share.ts
ls
cd ../..
```

Before each command, predict what it will do. After each command, compare the result with your prediction.

Write definitions for current directory, parent directory, relative path, absolute path, file, and folder in `notes.md`.

## Day 3: Write the first program

Read the [TypeScript Handbook introduction](https://www.typescriptlang.org/docs/handbook/intro.html) and the opening sections of [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). Stop when the examples no longer connect to the program below; later weeks will return to the rest.

Open `work/week-01/fund-share.ts`. Type this program yourself:

```ts
const fundName: string = "x365 Short Treasury Fund";
const shareSymbol: string = "XTF";
const sharePrice: number = 100;
const isTransferable: boolean = false;

console.log("Fund:", fundName);
console.log("Symbol:", shareSymbol);
console.log("Price per share:", sharePrice);
console.log("Transfers enabled:", isTransferable);
```

Run it:

```sh
node work/week-01/fund-share.ts
```

You should see four labeled lines. Change one value, predict the new output, and run the program again.

Add a comment above each variable that explains its purpose. Then remove any comment that only repeats the code.

## Day 4: Make and fix errors

Create each error one at a time:

1. Remove a closing quotation mark.
2. Misspell `console`.
3. Assign a string to `sharePrice` while keeping its `number` type.
4. Refer to a variable name that does not exist.

For each error:

1. Predict what will happen.
2. Run the program.
3. Copy the useful part of the error into `notes.md`.
4. Explain what the message means.
5. Fix the error and run the program again.

Finish with a working file. Do not commit intentionally broken code to `main`.

## Day 5: Save work with Git

Read the short opening sections of [Pro Git chapter 1](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) and [chapter 2](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). You only need the vocabulary used by the commands below.

Run:

```sh
git status
git diff
git add work/week-01
git diff --staged
git commit -m "Add first fund share program"
git log --oneline -5
```

Read the output after every command. In `notes.md`, explain the difference between an untracked file, a staged change, and a commit.

## Day 6: Improve the program

Without copying a finished solution, change the program so that it prints one sentence like this:

```text
10 XTF shares at $100 each have a fictional value of $1000.
```

Requirements:

- create a `numberOfShares` variable;
- calculate the total instead of typing `1000`;
- create a function that formats the sentence;
- call the function twice with different share counts;
- use names that explain the values;
- commit the working result.

If you do not know how to write a function, read the function section of the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/functions.html), try for 20 minutes, then ask AI for one hint.

## Day 7: Prove and explain

Complete these tasks:

1. Run the program from the repository root.
2. Ask someone to read the output without explaining it first.
3. Explain every line of the program aloud.
4. Change one input and predict the output before running it.
5. Check `git status` and commit the final notes.
6. Complete the weekly review in `TRACKER.md`.
7. Finish the Week 1 source note. Link it in the tracker and name the program, explanation, or diagram it changed.
8. Publish a short build post with the program output and one error you learned to fix.

Answer the [Week 1 checkpoint](checkpoint.md) without notes. Then check your work.

## Do not move to Week 2 until

- [ ] `node work/week-01/fund-share.ts` exits successfully.
- [ ] You can explain variables, values, types, functions, paths, errors, staging, and commits in plain language.
- [ ] The total value is calculated, not hard-coded.
- [ ] `git status` shows no accidental files or secrets.
- [ ] The map and notes exist.
- [ ] The Week 1 source note names the evidence produced from the reading.
- [ ] The tracker contains evidence links or local paths.
