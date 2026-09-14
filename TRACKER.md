# x/365 tracker

Copy the weekly section for each sprint. Link evidence. Keep career contacts and application details in a private tracker.

## Current status

Day number = days since 2026-09-09, counting that day as Day 1. Update the fields below and the daily row at the end of each working day.

- Current day: 5/365
- Current week: 1/52
- Current phase: Week 1, Day 5 (save work with Git)
- Current project: Week 1, first TypeScript program (`course/week-01/README.md`)
- Start date: 2026-09-09 (Wednesday)
- Planned Day 365: 2027-09-08
- Internship target: Summer 2027 reach target; Summer 2028 full-portfolio target; US citizen
- Weekly hour budget: 18

## This week's contract

- Week number and syllabus topic: Week 1, computers, the terminal, and the first program
- One shippable outcome: A TypeScript program, tokenization map, notes, and weekly build post
- Why it matters: This establishes the programming and domain vocabulary that every later project uses.
- Required acceptance checks: Use the checklist in `course/week-01/README.md`.
- Required source assignment: Week 1 in `docs/READING_AND_SOURCE_CODE_PLAN.md`
- Source note link:
- Repository tag or commit studied, if assigned:
- Test, diagram, or decision produced from the research:
- Optional scope to cut first: Visual branding and extra reading
- Saturday demo time: Day 6, Monday 2026-09-14
- Sunday review time: Day 7, Tuesday 2026-09-15

## Daily evidence

| Day | Planned work | Actual work | Evidence link | X link | Minutes | Blocker/lesson |
| ---: | --- | --- | --- | --- | ---: | --- |
| 1 (Wed 09-09) | Lesson and notes | Read the three sources, drew the map, answered the five questions | `work/week-01/map.md`, `work/week-01/notes.md` | | 45 | ERC-20 cannot tell a theft from a redemption; everything that makes it a share lives offchain |
| 2 (Thu 09-10) | Guided exercise | Ran the six terminal commands with predictions, wrote path definitions, created empty `fund-share.ts` | `work/week-01/notes.md` (Day 2 section) | | 30 | Silence from `mkdir`/`cd`/`touch` means success, not that nothing happened |
| 3 (Fri 09-11) | Independent exercise | Done Sun 09-13. Typed the four-variable program, ran it, changed `sharePrice` with a prediction, wrote purpose comments | `work/week-01/fund-share.ts`, `work/week-01/notes.md` (Day 3) | | 30 | `node` runs `.ts` directly by stripping types; missed Fri and Sat |
| 4 (Sat 09-12) | Test and debug | Done Sun 09-13. Made the four errors in a scratch copy, recorded and explained each message | `work/week-01/notes.md` (Day 4) | | 30 | A string in a `number` variable runs fine under `node`; only `tsc --noEmit` catches it |
| 5 (Sun 09-13) | Review and explain | Ran the six git commands, read each output, defined untracked/staged/commit | commit `2ea3598`, `work/week-01/notes.md` (Day 5) | | 20 | `git add` moves a diff from `git diff` to `git diff --staged`; it does not save or push |
| 6 (Mon 09-14) | Deep build and release | | | | | |
| 7 (Tue 09-15) | Review and career work | | | | | |

## Verification record

| Check | Command or method | Exit/result | Meaningful finding |
| --- | --- | --- | --- |
| Unit tests | | | |
| Integration tests | | | |
| Fuzz/invariant tests | | | |
| Static analysis | `npx tsc --noEmit` on the Day 4 string-in-number variant | TS2322, exit 2 | `node` never checks types; the checker has to be run on purpose |
| UI/API end-to-end | | | |
| Manual failure scenario | | | |

Never record "passed" without the exact command or method and result. Record skipped checks and why.

## Weekly review

### Shipped

-

### Most important thing learned

-

### Assumption that failed

-

### Evidence of quality

- Tests added and behavior covered:
- Security issue found/fixed:
- Documentation/demo:
- External feedback:

### Metrics

- Focused hours:
- Daily posts:
- Useful practitioner replies:
- Conversations:
- Applications:
- DSA sessions:
- Security exercise:
- OSS issue/PR activity:

### Carryover decision

- Required unfinished work:
- Scope removed:
- First action next week:

## Monthly funnel review

| Funnel | Count | Rate | Diagnosis | Next experiment |
| --- | ---: | ---: | --- | --- |
| Eligible roles found | | | | |
| Applications | | | | |
| Recruiter screens | | | | |
| Technical screens | | | | |
| Final rounds | | | | |
| Offers | | | | |
| Practitioner conversations | | | | |
| Inbound project interest | | | | |

## Flagship quality score

Score each 0 (absent), 1 (partial), or 2 (strong evidence).

| Dimension | Score | Evidence / next gap |
| --- | ---: | --- |
| Problem and user are precise | | |
| Domain model and trust boundaries | | |
| Standards used correctly | | |
| Readable architecture and ADRs | | |
| Unit/integration coverage | | |
| Fuzz/invariant/failure testing | | |
| Threat model and self-audit | | |
| Role separation/admin safety | | |
| Accounting/reconciliation | | |
| UX/accessibility/recovery | | |
| Reproducible setup/CI/deployment | | |
| Observability/runbooks | | |
| Demo/case study/limitations | | |
| External review incorporated | | |

Target before release: at least 24/28, with full scores for standards, security testing, threat model, and accounting/reconciliation.

## Day 365 checklist

- [ ] Four labs and two flagships meet their quality gates.
- [ ] 365 honest daily entries/posts or an explicit record of missed days.
- [ ] 52 weekly build logs and 12 monthly reviews.
- [ ] Four long-form technical case studies.
- [ ] Six meaningful OSS contributions merged, or documented evidence of high-quality attempts/reviews.
- [ ] Ten mock interviews completed.
- [ ] Portfolio, resume, GitHub, and X tell the same focused story.
- [ ] Final launch package and direct internship ask published.
- [ ] Next 90-day plan written from actual funnel and skill evidence.
