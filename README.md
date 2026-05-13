# Aodh Lab

Aodh Lab is an open-source personal AI systems lab.

It is a learning project for designing and building personal AI agents using clear system structure, memory files, tool permissions, safety rules, model choice, privacy options, and human approval.

The goal is not to build a magic assistant.

The goal is to build an understandable AI system that helps a person capture ideas, organise thinking, create useful artefacts, and learn agentic AI by building it step by step.

## Core Model

Aodh Lab separates the system into clear layers:

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

Privacy layer
  = optional masking, redaction, or local-only routing

Human approval
  = the user stays in control
```

## Project Structure

```text
Aodh-Lab/
  docs/
    architecture.md
    model-options.md
    privacy-layer.md
    setup.md
    safety-model.md

  system/
    agent-charter.template.md
    memory-rules.md
    privacy-rules.md
    safety-rules.md
    tool-permissions.md

  templates/
    active-projects.template.md
    decision-log.template.md
    idea-inbox.template.md
    model-config.template.md
    privacy-config.template.md
    profile.template.md
    project-brief.template.md

  examples/
    sample-decision-log.md
    sample-idea-inbox.md
    sample-privacy-input.md
    sample-project-brief.md

  tools/
    privacy/
      pii-masker.js

  local/
    memory/
      profile.md
      active-projects.md
      decision-log.md
      idea-inbox.md
    config/
      model-config.md
      privacy-config.md
```

## Public vs Private Files

Aodh Lab is designed to be cloneable.

The public repository contains:

- Documentation
- System files
- Templates
- Fictional examples
- Safe starter tools

Private local user files should live inside:

```text
local/
```

The `local/` folder is ignored by Git.

This means each user can clone Aodh Lab and create their own private memory, configuration, and project files without exposing personal data.

## Model Choice

Aodh Lab is model-flexible.

Users should be able to choose a model route that fits their budget, privacy needs, technical comfort, and hardware.

Possible routes include:

- Free cloud models
- Paid cloud models
- Free local models
- Hybrid local and cloud setups

Model configuration should live in local config files and should not be committed to the public repository.

See:

```text
docs/model-options.md
```

## Privacy Layer

Aodh Lab includes an optional privacy layer for users who choose cloud model routes.

Supported privacy modes include:

- Off
- Basic redaction
- Mask and rehydrate
- Local-only

The goal is to reduce the amount of sensitive information sent to cloud models while keeping the system understandable.

See:

```text
docs/privacy-layer.md
system/privacy-rules.md
templates/privacy-config.template.md
tools/privacy/pii-masker.js
```

## Agent Concept

The first agent concept is the Idea-to-Action Agent.

Its core loop is:

```text
Capture thought
→ Extract the real idea
→ Categorise it
→ Suggest next action
→ Create an artefact
→ Save the decision
```

## Creator Note

Aodh Lab was created by Brendan Flynn as a public learning and portfolio project.

The project was developed through an iterative learning process with AI-assisted guidance, using Aodh as the working name for the assistant and design partner.

## Status

This project is in early foundation design.

No runtime, MCP server, API, or external agent framework has been connected yet.

## Design Principles

- Local-first where possible
- Human approval for risky actions
- Small useful tools before big complex systems
- Clear memory structure
- Cloneable by default
- Private data stays local
- Model provider should be replaceable
- Runtime should be replaceable
- Privacy mode should be visible and optional
- The system should remain understandable