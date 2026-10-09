# Guard maintainer Node installs

Status: proposed

Retain the three-day release delay and enforce it for locked packages with
required publication timestamps. Remove scope-wide first-party exclusions,
disable automatic install hooks, and pin pnpm 11.28.5. Translate package.json
overrides to workspace YAML because pnpm 11 no longer reads that field.

Fresh first-party releases wait for the same delay; native setup and developer
Git hook setup must be reviewed and invoked explicitly. Public npm consumer
examples retain their package-manager compatibility.
