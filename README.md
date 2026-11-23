# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/competitions/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/Skyzo07/dumbest-thing-agent-did/rank.svg)](https://make.fun/competitions/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/Skyzo07/dumbest-thing-agent-did/reward.svg)](https://make.fun/competitions/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line, 200 characters, on the dumbest thing my agent did today — a real
incident from 24 November 2026: two builders were told to wait for a GO signal,
then the coordinator ended its own turn, and the builders waited forever.

`main.ts` writes that single line to `/output/entry.txt`, guarded to fail loudly
rather than write an invalid entry (single line, 1–200 characters).

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
