# Local Aodh Lab Files

This folder contains your private Aodh Lab files.

The `local/` folder is ignored by Git and should not be committed to the public repository.

Use this folder for personal files such as:

```text
profile.md
idea-inbox.md
project-index.md
decision-log.md
active-projects.md
model-preferences.md
private-notes.md
```

## Suggested starting structure

```text
local/
  README.md
  profile.md
  idea-inbox.md
  project-index.md
  decision-log.md
```

## How to create private files from templates

From the repo root:

```zsh
mkdir -p local

cp templates/profile.template.md local/profile.md
cp templates/idea-inbox.template.md local/idea-inbox.md
cp templates/project-index.template.md local/project-index.md
cp templates/save-decision-output.template.md local/decision-log.md
```

Only copy the templates you need.

## What belongs here

Use this folder for:

- Personal context
- Private project notes
- Local decision logs
- Local idea capture
- Private model preferences
- Private workflow outputs

## What does not belong in public files

Do not copy private local content into:

```text
docs/
system/
templates/
examples/
tools/
README.md
```

Public files should remain generic, safe, and cloneable.

## Missing file behaviour

Aodh Lab should treat local files as optional.

If a file is missing, the system should explain what is missing and suggest creating it from the matching public template.