# Save Decision Workflow

Status: Draft v0.1  
Mission: 7  
Purpose: Define how Aodh Lab decides whether something should be saved, where it should be saved, and when user confirmation is required.

## Overview

The Save Decision workflow protects Aodh Lab from becoming a dumping ground.

Its job is simple:

> Decide whether a useful idea, decision, preference, project update, or insight should be saved, and choose the safest useful location.

Not every useful thought should become memory.

Some things only belong in the current response. Some belong in a private local file. Some belong in a project note. Some may be suitable as long-term memory. Some should not be saved at all.

This workflow exists to make saving intentional.

## Relationship to other workflows

This workflow connects to:

```text
docs/workflows/idea-to-action.md
docs/workflows/project-routing.md
docs/project-index.md
```

The Idea-to-Action workflow extracts the useful idea.

The Project Routing workflow decides where the idea belongs.

The Save Decision workflow decides whether anything should be saved.

## Core principle

Saving is not neutral.

When the agent saves something, it changes the future behaviour of the system.

For that reason, Aodh Lab should treat saving as a deliberate act that requires judgement, privacy awareness, and often user confirmation.

## Inputs

The Save Decision workflow may receive:

* Raw thought, if available
* Clear idea summary
* Extracted core idea
* Project routing decision
* Suggested next action
* User instruction
* Privacy mode
* Sensitivity level
* Candidate save location
* Existing project index data
* Existing memory rules

## Save outcomes

Every save decision should result in one of the following outcomes.

### 1. Do not save

Use this when the information is not useful beyond the current interaction.

Examples:

* Temporary frustration
* Passing observations
* One-off questions
* Sensitive details with no long-term value
* Information that may become misleading later
* Third-party private details

### 2. Save to current output only

Use this when the information is useful now but does not need to persist.

Examples:

* A temporary summary
* A draft response
* A one-time plan
* A short checklist for the current task

### 3. Suggest as memory candidate

Use this when the information may improve future responses across conversations.

Examples:

* Stable user preference
* Long-term working style
* Recurring constraint
* Durable project preference
* Repeated communication preference

The agent should not silently save memory unless the user has clearly asked for it or the system rules allow it.

### 4. Save to local project file

Use this when the information belongs to a private project file.

Examples:

* Project milestone
* Project decision
* Private project context
* Project-specific next action
* Local project index update

Suggested locations may include:

```text
local/project-index.md
local/idea-inbox.md
local/decision-log.md
local/projects/example-project.md
```

These files should remain private and should not be committed.

### 5. Save to public repo file

Use this when the user is intentionally building or changing the public Aodh Lab repository.

Examples:

* Public workflow documentation
* Public templates
* Fictional examples
* General system rules
* Open-source architecture decisions

Public repo saves should avoid private user information.

### 6. Save after explicit confirmation

Use this when saving may be useful but requires user approval.

Examples:

* Updating a local project index
* Adding a long-term memory
* Writing private context to a local file
* Changing a public project file
* Saving anything that could affect future decisions

This should be the default when there is uncertainty.

## Sensitivity levels

The agent should estimate sensitivity before choosing a save destination.

Recommended levels:

* Low
* Medium
* High

### Low sensitivity

Information that is general, public-safe, fictional, or not personally identifying.

Examples:

* Public workflow rule
* Generic template
* Fictional example
* General project structure

### Medium sensitivity

Information that may be personal or project-specific but is not highly sensitive.

Examples:

* Private project names
* Personal goals
* Work-in-progress plans
* Local preferences
* Non-sensitive family or home context

### High sensitivity

Information that should be handled very carefully.

Examples:

* Health details
* Legal or financial details
* Identity-related information
* Private third-party information
* Account details
* Sensitive work information
* Precise addresses or personal identifiers

High sensitivity information should generally not be saved unless the user explicitly asks for it and the destination is appropriate.

## Decision process

The agent should follow this process.

### 1. Identify the candidate information

The agent identifies what might be saved.

It should separate:

* The useful idea
* The user preference
* The project decision
* The next action
* The emotional context
* Any sensitive details

### 2. Decide whether the information has future value

The agent asks:

* Will this help future responses?
* Is it stable enough to reuse later?
* Is it tied to a project or workflow?
* Would forgetting it create repeated work?
* Could saving it create risk or confusion?

### 3. Check whether the information belongs somewhere specific

The agent checks whether the information belongs in:

* The current output only
* The Project Index
* A local project file
* A local idea inbox
* A local decision log
* A public repo file
* Long-term assistant memory

### 4. Apply the privacy mode

The agent respects the active privacy mode.

If the user is using a cloud model route, sensitive details should be redacted, masked, kept local, or excluded based on the privacy configuration.

### 5. Choose the least risky useful destination

The agent should prefer the safest location that still preserves value.

General preference order:

1. Do not save
2. Save to current output only
3. Save to local private file
4. Suggest as memory candidate
5. Save to public repo file only when the content is public-safe and user-approved

### 6. Decide whether confirmation is required

Confirmation is required when:

* Saving to long-term memory
* Writing to local private files
* Updating project index files
* Committing public repo changes
* Saving sensitive or semi-sensitive information
* The agent is unsure

Confirmation may not be required when:

* The user explicitly says to remember or save something
* The content is public-safe and the user has asked to create a repo file
* The save action only applies to the current response

### 7. Produce a save decision

The output should include:

* Save decision
* Sensitivity level
* Suggested destination
* Reason
* User confirmation required
* Exact suggested saved text, if relevant
* Privacy notes

## Save decision format

Recommended format:

```text
Save decision:
Sensitivity level:
Suggested destination:
Reason:
User confirmation required:
Suggested saved text:
Privacy notes:
```

## Examples

### Example 1: Project milestone

Input:

```text
Mission 6 is complete and pushed to GitHub.
```

Save decision:

```text
Save decision: Suggest as memory candidate
Sensitivity level: Low
Suggested destination: Long-term assistant memory and project history
Reason: This is a stable project milestone that affects future Aodh Lab work.
User confirmation required: No, if the user has asked the assistant to track ongoing project progress.
Suggested saved text: Aodh Lab Mission 6 is complete. It connected Idea-to-Action with Project Index routing.
Privacy notes: Public-safe project progress only.
```

### Example 2: Temporary frustration

Input:

```text
I am annoyed with this today and I feel like scrapping the whole thing.
```

Save decision:

```text
Save decision: Do not save
Sensitivity level: Medium
Suggested destination: None
Reason: This appears to be temporary emotional context rather than a stable project decision.
User confirmation required: No
Suggested saved text: Not applicable
Privacy notes: Respond supportively, but do not persist the frustration.
```

### Example 3: Local project update

Input:

```text
This garden idea should go under my private home project.
```

Save decision:

```text
Save decision: Save after explicit confirmation
Sensitivity level: Medium
Suggested destination: local/project-index.md
Reason: This is project-specific and private, so it belongs in a local file rather than the public repo.
User confirmation required: Yes
Suggested saved text: Add the garden idea under the relevant private project entry.
Privacy notes: Keep local. Do not commit.
```

## Design principle

A good save decision should reduce future effort without creating future risk.

Aodh Lab should save less by default, but save well when it matters.