# Local Files and Private Data

Aodh Lab is designed to be cloneable, open source, and safe to adapt.

The public repository contains the system structure, workflows, templates, examples, and tools. Personal data should not be committed to the public repo.

Private user files belong in the `local/` folder.

The `local/` folder is ignored by Git so each user can create their own private working version of Aodh Lab without exposing personal information.

## Purpose of `local/`

The `local/` folder is for private, user-specific files that make Aodh Lab useful in a real personal system.

These files may include:

- Personal profile notes
- Active project indexes
- Idea inboxes
- Decision logs
- Private reflections
- Local model preferences
- Local runtime configuration
- Any other information that should not be shared publicly

The public repo should explain these files, but it should not contain real private versions of them.

## Why `local/` is ignored by Git

Aodh Lab separates the shareable system from the private instance.

This keeps the project:

- Safe to publish
- Easy for others to clone
- Easier to maintain as an open-source project
- Flexible for different users, models, and privacy needs

The public repo should contain templates and fictional examples only.

The private `local/` folder should contain the real user-specific version.

## Example local files a user may create

A user may choose to create files such as:

```text
local/
  README.md
  profile.md
  idea-inbox.md
  project-index.md
  decision-log.md
  active-projects.md
  model-preferences.md
  private-notes.md
```

These files are optional. Aodh Lab should not break if one or more of them are missing.

## Public templates to copy from

Users should create private files by copying public templates.

For example:

```zsh
mkdir -p local

cp templates/profile.template.md local/profile.md
cp templates/idea-inbox.template.md local/idea-inbox.md
cp templates/project-index.template.md local/project-index.md
cp templates/save-decision-output.template.md local/decision-log.md
cp templates/local-files-readme.template.md local/README.md
```

After copying, users can edit the files inside `local/` with their own private information.

## Relationship to Project Index

The Project Index workflow can use a private file such as:

```text
local/project-index.md
```

The public repo should only include:

```text
templates/project-index.template.md
examples/sample-project-index.md
docs/project-index.md
```

The private `local/project-index.md` file is where a user can track their real projects.

## Relationship to Save Decision

The Save Decision workflow decides whether information should be saved, not saved, or clarified before saving.

When information is saved, the destination should usually be a private local file, such as:

```text
local/decision-log.md
local/project-index.md
local/idea-inbox.md
local/profile.md
```

The workflow should avoid saving personal or sensitive information directly into public documentation.

## Relationship to privacy modes

The local file structure works alongside the Aodh Lab privacy layer.

Privacy modes may affect how local files are used:

| Privacy mode | Local file behaviour |
|---|---|
| Off | Local files may be used directly by the system. |
| Basic redaction | Local files may be scanned and obvious personal data can be redacted before model use. |
| Mask and rehydrate | Sensitive values can be masked before cloud model use and restored locally after processing. |
| Local-only | Local files should only be processed by local tools or local models. |

The exact handling depends on the user’s chosen model route and privacy setting.

## What should never be placed in public files

Do not place the following in public files:

- Real personal profiles
- Real addresses
- Private health information
- Private family details
- Private work notes
- Customer data
- Company-confidential information
- API keys
- Tokens
- Passwords
- Real decision logs
- Real project indexes containing private plans
- Any file copied from `local/`

Public files should remain safe, generic, and cloneable.

## How cloneable users can adapt Aodh Lab safely

A new user should be able to clone the repo and then create their own local instance.

Recommended flow:

```zsh
git clone https://github.com/aodh-code/aodh-lab.git
cd aodh-lab
mkdir -p local
cp templates/local-files-readme.template.md local/README.md
```

From there, the user can copy any templates they need into `local/`.

They can then customise those files without changing the public system.

## Expected behaviour when local files are missing

Aodh Lab should treat local files as optional.

If a local file is missing, the system should:

1. Continue safely
2. Explain which local file was not found
3. Offer to create the file from a public template
4. Avoid inventing private user data
5. Avoid writing personal data into public files by mistake

For example, if `local/project-index.md` is missing, Aodh Lab should not fail. It should say that no private Project Index exists yet and suggest creating one from `templates/project-index.template.md`.

## Design principle

Public files describe the system.

Local files personalise the system.

This separation allows Aodh Lab to remain open source while still supporting deeply personal AI workflows.