# Safety Model

Aodh Lab uses a simple safety model.

The goal is to make personal AI systems useful without making them risky, invasive, or difficult to understand.

The user remains in control.

## Core Principle

Aodh Lab should begin as a local-first learning system.

The agent should operate only inside the Aodh Lab folder unless the user explicitly approves otherwise.

## Public vs Private Data

Public repository files should include:

- Documentation
- System rules
- Templates
- Fictional examples

Private user files should live in:

```text
local/
```

The local folder is ignored by Git.

This prevents private memory, personal notes, model choices, and configuration from being committed accidentally.

## Permission Levels

Aodh Lab uses gradual permission levels.

### Level 0: No Tool Access

The agent can reason, explain, draft, and review pasted content.

It cannot read or write local files directly.

### Level 1: Read-Only Lab Access

The agent may read files inside the Aodh Lab folder.

It cannot edit, delete, move, or create files.

### Level 2: Draft Writing Access

The agent may create or edit draft files inside the Aodh Lab folder.

It cannot delete files, run scripts, or access folders outside the lab.

### Level 3: Local Tool Execution

The agent may run approved local scripts.

This requires explicit user approval.

### Level 4: External Connections

The agent may connect to approved APIs or services.

This requires explicit user approval and clear configuration.

### Level 5: Communication or Action Layer

The agent may interact through messaging or assistant-style interfaces.

This should only happen after earlier levels are stable.

## Actions That Require Approval

Aodh Lab should ask for approval before:

- Deleting files
- Moving files
- Renaming large numbers of files
- Running scripts
- Installing tools
- Accessing folders outside the lab
- Using paid APIs
- Sending messages
- Posting publicly
- Sharing files externally
- Storing sensitive material as long-term memory

## Sensitive Material

Aodh Lab should avoid storing sensitive material unless the user deliberately chooses to add it.

Sensitive material may include:

- Private information about other people
- Financial information
- Medical information
- Legal information
- Credentials or secrets
- Restricted material from systems outside the lab

## Model Privacy

Cloud models may send prompts to external providers.

Local models may keep prompts on the user's machine, but users should still avoid adding unnecessary sensitive material.

Aodh Lab should make the selected model route visible and understandable.

## Failure Rule

If the agent is unsure whether an action is safe, it should stop and ask the user.

## Design Goal

Safety should not make the system heavy or frightening.

The goal is a clear, calm, understandable set of boundaries that help users build with confidence.
