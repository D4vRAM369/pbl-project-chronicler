
<div align="center">

<img src="assets/banner.png" alt="PBL Project Chronicler — Every session becomes a lesson" width="100%">

# 📚 PBL Project Chronicler

**Build while you learn, learn while you build.**

A skill for **Claude Code**, **Codex**, and **OpenCode** that turns every development session into learning documentation: a glossary, reproducible step-by-step guides, real errors, and their solutions.

[![npm](https://img.shields.io/npm/v/pbl-project-chronicler)](https://www.npmjs.com/package/pbl-project-chronicler)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Claude Code](https://img.shields.io/badge/Claude%20Code-plugin-d97757)
![Codex](https://img.shields.io/badge/Codex-plugin-111111)
![OpenCode](https://img.shields.io/badge/OpenCode-skill-4b5563)

[ES](README.md) · **EN**

</div>

---

## What does it do?

Tell your agent **"activate the chronicler"** and, while you code, it writes a `docs/` folder for you — designed so that *you six months from now*, or even someone who has never programmed before, can reproduce what you did and understand **why**.

It is also **a pretty powerful addition to any vibe coding session: helping you learn from every step while documenting all that potential knowledge** so you can study and analyze it whenever you want.

```text
docs/
├── README.md                    ← Project overview
├── 00_GLOSARIO.md               ← Every technical term, with an analogy
├── 01_SETUP.md                  ← Environment setup from scratch
├── 02_ARQUITECTURA.md           ← Decisions and the reasoning behind them
├── 03_PASO_A_PASO.md            ← The core: the real process
├── 04_CONCEPTOS.md              ← What you learned
├── 05_ERRORES_Y_SOLUCIONES.md   ← Real errors = educational gold
├── 06_SIGUIENTE_NIVEL.md        ← Future improvements
├── 07_COMANDOS_Y_MANUAL.md      ← Command cheat sheet
└── informes/                    ← One report per completed task
```

## Installation

### Option 1 — npm (detects your agents)

```bash
npx pbl-project-chronicler              # installs into every detected agent
npx pbl-project-chronicler --claude     # ~/.claude/skills
npx pbl-project-chronicler --codex      # ~/.codex/skills
npx pbl-project-chronicler --opencode   # ~/.config/opencode/skills
npx pbl-project-chronicler --global     # ~/.agents/skills (shared standard)
npx pbl-project-chronicler --uninstall  # removes it from all agents
```

| Agent | Where it looks for skills |
|---|---|
| Claude Code | `~/.claude/skills` |
| Codex | `~/.codex/skills`, `~/.agents/skills` |
| OpenCode | `~/.config/opencode/skills`, `~/.claude/skills`, `~/.agents/skills` |

### Option 2 — Claude Code Plugin

```bash
claude plugin marketplace add D4vRAM369/pbl-project-chronicler
claude plugin install pbl-project-chronicler@pbl-project-chronicler
```

Or from inside Claude Code:

```text
/plugin marketplace add D4vRAM369/pbl-project-chronicler
```

### Option 3 — Codex Plugin

```bash
codex plugin marketplace add https://github.com/D4vRAM369/pbl-project-chronicler.git
codex plugin add pbl-project-chronicler
```

### Option 4 — Manual Installation

```bash
git clone https://github.com/D4vRAM369/pbl-project-chronicler.git
cp -r pbl-project-chronicler/skills/pbl-project-chronicler ~/.claude/skills/
```

## Usage

| You say | What happens |
|---|---|
| "activate the chronicler" | Creates `docs/` and starts documenting |
| "document this" | Documents the current code or decision |
| "add to the glossary: X" | Adds the term with an analogy and example |
| "document the error" | Records the root cause and solution |
| "create a task report" | Creates `docs/informes/YYYY-MM-DD-slug.md` |
| "close the session" | Creates a session summary and updates everything |

> 💡 When activated, it asks whether `docs/` should be committed to the repository or added to `.gitignore` as local learning documentation.

## Principles

1. **Never just the "what"** — always explain the "why".
2. **Errors are premium content.**
3. **Reproducible by a stranger.**
4. **The imperfect path is the most educational one** — history should not be rewritten.

## Repository Structure

```text
.claude-plugin/        ← Claude Code manifest + marketplace
.codex-plugin/         ← Codex manifest
.agents/plugins/       ← Codex marketplace
skills/pbl-project-chronicler/
├── SKILL.md           ← the skill
└── references/        ← templates and examples
bin/install.js         ← npx installer
```

## License

[MIT](LICENSE)
