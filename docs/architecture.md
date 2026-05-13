# Architecture

Aodh Lab is designed as a layered personal AI system.

The project separates the agent system from the runtime, model provider, tools, memory, and private local user data.

This makes the project easier to understand, easier to modify, and easier for other people to clone for their own use.

## Core Layers

```text
Aodh Lab
  = the system being designed

Runtime or agent framework
  = the layer that runs the agent

LLM
  = the reasoning engine

MCP, APIs, scripts, and local tools
  = the agent's tools

Memory
  = what the agent knows over time

Guardrails
  = what the agent is not allowed to do

Human approval
  = the user stays in control
```

## System Layer

The system layer contains the public rules and templates that define how Aodh Lab should behave.

This includes:

- Agent charter
- Safety rules
- Tool permissions
- Memory rules

These files live in:

```text
system/
```

The system layer should be generic and safe to publish.

## Template Layer

The template layer gives users reusable starting points.

Templates live in:

```text
templates/
```

Users can copy these templates into their private local folder and fill them in with their own information.

Example:

```text
templates/profile.template.md
```

can be copied to:

```text
local/memory/profile.md
```

## Local Layer

The local layer contains the private instance of Aodh Lab.

This includes personal memory, selected model configuration, private notes, and local project context.

The local layer lives in:

```text
local/
```

The local folder is ignored by Git.

This allows the public project to stay cloneable without exposing private user data.

## Model Layer

Aodh Lab is model-flexible.

The model is treated as a replaceable reasoning engine.

Possible model routes include:

- Free cloud models
- Paid cloud models
- Free local models
- Hybrid local and cloud setups

Model configuration should live in:

```text
local/config/
```

Public documentation and templates should explain the options, but real API keys or private model choices should not be committed.

## Tool Layer

Tools give the agent the ability to act.

Possible tools may include:

- Reading files
- Writing draft Markdown files
- Searching local notes
- Running approved scripts
- Processing public datasets
- Generating reports or visuals

Tool access should be added gradually.

Aodh Lab should begin with no tool access, then move carefully through permission levels.

## Memory Layer

Memory is split into clear categories.

Examples include:

- Profile memory
- Active projects
- Decision log
- Idea inbox
- Model configuration

The purpose of memory is not to save everything.

The purpose of memory is to preserve useful context that improves future work.

## Approval Layer

Human approval is central to Aodh Lab.

The agent may suggest actions, but the user remains in control.

Approval is required before risky actions such as:

- Deleting files
- Moving files
- Running scripts
- Installing tools
- Accessing folders outside the lab
- Using paid APIs
- Sending messages
- Sharing files externally

## First Agent Concept

The first planned agent is the Idea-to-Action Agent.

Its loop is:

```text
Capture thought
→ Extract the real idea
→ Categorise it
→ Suggest next action
→ Create an artefact
→ Save the decision
```

## Design Goal

Aodh Lab should remain understandable.

A user should be able to inspect the folder structure, read the system files, understand what the agent is allowed to do, and change the behaviour deliberately.
