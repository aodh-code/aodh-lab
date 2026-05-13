# Setup

This guide explains how to set up Aodh Lab as a local personal AI systems lab.

Aodh Lab is designed to be cloneable.

The public repository contains system files, documentation, templates, and fictional examples.

Each user creates their own private local instance inside the local folder.

## Requirements

Recommended starting tools:

- A Mac, Windows, or Linux machine
- Git
- VS Code or another Markdown editor
- Terminal access
- Optional local model runtime such as Ollama or LM Studio
- Optional cloud model provider such as OpenRouter, OpenAI, Anthropic, or Google

## Clone the Repository

Clone the repository into a folder of your choice.

Example:

```bash
git clone <repository-url> Aodh-Lab
cd Aodh-Lab
```

## Create Local Private Folders

Create the private local folders:

```bash
mkdir -p local/memory
mkdir -p local/config
mkdir -p local/projects
```

The local folder is ignored by Git.

This is where private user memory, model choices, and personal notes should live.

## Copy Templates into Local Files

Copy the public templates into local private files:

```bash
cp templates/profile.template.md local/memory/profile.md
cp templates/active-projects.template.md local/memory/active-projects.md
cp templates/decision-log.template.md local/memory/decision-log.md
cp templates/idea-inbox.template.md local/memory/idea-inbox.md
cp templates/model-config.template.md local/config/model-config.md
```

Then edit the local files with your own information.

Do not commit files inside local.

## Choose a Model Route

Aodh Lab is model-flexible.

Possible routes include:

- Free cloud route
- Paid cloud route
- Free local route
- Hybrid route

See:

```text
docs/model-options.md
```

for more guidance.

## Environment Variables

Copy the example environment file if needed:

```bash
cp .env.example .env
```

Then fill in only the values you actually use.

Do not commit real API keys.

## First Local Use

The first version of Aodh Lab is the Idea-to-Action Agent.

Before connecting a runtime or model, read:

```text
system/agent-charter.template.md
system/memory-rules.md
system/safety-rules.md
system/tool-permissions.md
```

The recommended early workflow is:

1. Capture a raw idea in local/memory/idea-inbox.md
2. Process it into a summary
3. Decide whether it belongs in a project
4. Create an artefact if useful
5. Record important decisions in local/memory/decision-log.md

## Current Status

Aodh Lab is in early foundation design.

No runtime, MCP server, API, or external tool is required to understand the system.

Runtime and model integrations should be added gradually.
