# Maintainer dependency security

Use pnpm 11.28.5 and Node.js 22+. Preserve the existing three-day release delay
for all registry packages, require timestamps, and recheck frozen installs.
Automatic installation hooks are disabled; run local Husky setup explicitly
with `pnpm run setup:git-hooks`. npm consumer examples remain supported.

Run `pnpm run setup:example-types` before checking example types; Nuxt and
Svelte generated declarations are explicit instead of install hooks.
