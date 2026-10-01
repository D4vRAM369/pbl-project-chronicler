#!/usr/bin/env node
// Copia la skill a las carpetas de skills de usuario de cada agente.
// Uso: npx pbl-project-chronicler [--claude] [--codex] [--opencode] [--global] [--uninstall]
// Sin flags: instala en los agentes detectados (los que tienen su carpeta de config).
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const NAME = 'pbl-project-chronicler';
const SRC = path.join(__dirname, '..', 'skills', NAME);
const HOME = os.homedir();
// [carpeta que indica que el agente está instalado, carpeta de skills]
const TARGETS = {
  claude: ['.claude', '.claude/skills'],
  codex: ['.codex', '.codex/skills'],
  opencode: ['.config/opencode', '.config/opencode/skills'],
  global: ['.agents', '.agents/skills'], // estándar compartido (Codex, OpenCode y otros)
};

const args = process.argv.slice(2);
const uninstall = args.includes('--uninstall');
const picked = Object.keys(TARGETS).filter((t) => args.includes(`--${t}`));
const detected = Object.keys(TARGETS).filter(
  (t) => t !== 'global' && fs.existsSync(path.join(HOME, TARGETS[t][0])),
);
const targets = picked.length ? picked : uninstall ? Object.keys(TARGETS) : detected;

if (!targets.length) {
  console.log('No se detectó ningún agente. Usa --global para instalar en ~/.agents/skills.');
  process.exit(1);
}

for (const t of targets) {
  const dest = path.join(HOME, TARGETS[t][1], NAME);
  if (uninstall) {
    if (!fs.existsSync(dest)) continue;
    fs.rmSync(dest, { recursive: true, force: true });
    console.log(`✗ ${t}: eliminado ${dest}`);
  } else {
    fs.cpSync(SRC, dest, { recursive: true, force: true });
    console.log(`✓ ${t}: instalado en ${dest}`);
  }
}
if (!uninstall) console.log('\nReinicia tu agente y di: "activa el chronicler".');
