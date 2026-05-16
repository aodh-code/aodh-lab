# Project Routing Workflow

Status: Draft v0.1  
Mission: 6  
Purpose: Define how Aodh Lab connects the Idea-to-Action workflow with the Project Index to produce a clear routing decision.

## Overview

The Project Routing workflow is the bridge between a captured idea and the Project Index.

The Idea-to-Action workflow extracts the useful idea from a messy thought.

The Project Routing workflow decides where that idea belongs.

Its job is simple:

> Take a clarified idea and decide whether it should be linked to an existing project, suggested as a new project, treated as a one-off task, held as an unassigned idea, or ignored as not project-related.

This workflow should keep Aodh Lab practical, calm, and understandable.

It should prevent the system from turning every thought into a project.

## Relationship to other files

This workflow connects:

```text
docs/workflows/idea-to-action.md
docs/project-index.md
templates/project-index.template.md
examples/sample-project-index.md
```

The Project Index defines the structure.

The Project Routing workflow defines the decision process.

## Inputs

The Project Routing workflow receives the output of the Idea-to-Action workflow.

Suggested inputs:

* Raw thought, if available
* Clear idea summary
* Extracted core idea
* Category
* Maturity level
* Suggested next action, if already identified
* Privacy mode
* Available Project Index data
* User instruction, if the user has given one

## Required privacy check

Before checking any private project index, the agent must respect the selected privacy mode.

The agent should check:

1. Is the Project Index public, fictional, or local/private?
2. Does the routing decision require private project information?
3. Is the current model route cloud, local, or hybrid?
4. Should sensitive details be redacted, masked, or kept local only?
5. Has the user allowed the agent to read or update local project files?

Default behaviour:

> Read and reason only with information the user has provided or explicitly allowed. Do not update private project files without approval.

## Routing outcomes

Every idea should be routed to one of five outcomes.

### 1. Existing project

Use this when the idea clearly belongs to a project already listed in the Project Index.

The agent should identify:

* The project name
* Why it fits
* What part of the project it affects
* The next useful action
* Whether the project index should be updated

### 2. New project candidate

Use this when the idea is substantial enough to become a project but does not fit an existing one.

The agent should identify:

* Suggested project name
* Why it deserves project status
* What outcome the project would aim for
* What still needs clarification
* The smallest useful next action

The agent should not automatically create the project.

### 3. One-off task

Use this when the idea can be completed as a small standalone action.

The agent should identify:

* The task
* The reason it does not need a project
* The next action
* Whether any artefact should be created

### 4. Unassigned idea

Use this when the idea may matter later but is not mature enough to route.

The agent should identify:

* The raw idea
* Why it might matter
* What would make it clearer
* Whether it should be reviewed later

### 5. Not a project

Use this when the thought should not become tracked work.

The agent should identify:

* Why it should not become a project
* Whether the user needs acknowledgement, support, or a simple answer
* Whether anything should be saved

## Routing process

The agent should follow this process.

### 1. Confirm the usable input

The agent checks whether the Idea-to-Action output contains enough information to route the idea.

Minimum useful input:

* Clear idea summary
* Category or rough type
* Maturity level
* Any stated constraint or desired outcome

If the idea is too unclear, the agent should avoid forcing a decision.

### 2. Check the Project Index

The agent checks the available Project Index.

For each existing project, compare the idea against:

* Project purpose
* Desired outcome
* Belongs here
* Does not belong here
* Current stage
* Current next action
* Related files or artefacts
* Privacy notes

### 3. Look for strong matches

A strong existing project match usually has at least three of the following:

* The idea supports the project purpose
* The idea fits under “Belongs here”
* The idea moves the desired outcome forward
* The idea affects the current next action
* The idea is clearly connected to related files or artefacts
* The user has previously framed the idea as part of that project

### 4. Look for blockers

The agent should avoid routing to an existing project when:

* The idea appears under “Does not belong here”
* The connection is only superficial
* The project is complete or archived
* The idea is too vague
* The idea would make the project too broad
* The idea is really a small task
* The idea is emotional noise rather than stable intent

### 5. Decide confidence

The agent should assign a confidence level.

Recommended levels:

* High
* Medium
* Low

High confidence means the routing decision is clear.

Medium confidence means the decision is reasonable but should show assumptions.

Low confidence means the agent should avoid saving or updating anything without confirmation.

### 6. Produce a routing decision

The output should include:

* Routing decision
* Confidence
* Existing project or suggested project, if relevant
* Reason
* Assumptions
* Next action
* Save decision
* Whether user confirmation is required
* Privacy notes

### 7. Do not update automatically

The agent should not automatically update the Project Index unless the user has explicitly allowed it.

Default behaviour:

* Recommend the routing decision
* Explain the reason
* Suggest the update
* Ask for confirmation before changing local files

## Matching guidance

Use this guidance when deciding between routing outcomes.

### Existing project vs new project

Choose existing project when the idea strengthens or changes something already being tracked.

Choose new project candidate when the idea has a distinct purpose, desired outcome, and likely multiple steps.

### New project candidate vs one-off task

Choose new project candidate when the idea needs ongoing tracking.

Choose one-off task when the idea can be completed in one action.

### One-off task vs unassigned idea

Choose one-off task when the next action is clear.

Choose unassigned idea when the thought is interesting but not yet actionable.

### Unassigned idea vs not a project

Choose unassigned idea when there is useful signal.

Choose not a project when the thought does not need to become tracked work.

## Routing decision format

Recommended format:

```text
Routing decision:
Confidence:
Project:
Reason:
Assumptions:
Next action:
Save decision:
User confirmation required:
Privacy notes:
```

## Example

Input idea:

```text
I keep thinking that the system should not just capture ideas, it should know whether they belong to something I am already building or whether they are just noise.
```

Routing decision:

```text
Routing decision: Existing project
Confidence: High
Project: Aodh Lab
Reason: The idea describes a core routing behaviour for the Aodh Lab agent system.
Assumptions: This belongs to the agent workflow layer rather than a separate app feature.
Next action: Define a Project Routing workflow that connects Idea-to-Action with the Project Index.
Save decision: Save as a public workflow spec after user approval.
User confirmation required: Yes, before committing files.
Privacy notes: Public-safe. No private user project data is required.
```

## Design principle

The Project Routing workflow should make the system more useful without making it heavier.

A good routing decision should feel like:

```text
This belongs here.
This does not belong here.
This is worth doing next.
This should not become another burden.
```
## Related workflow

Save decisions are defined in:

```text
docs/workflows/save-decision.md
```

The Project Routing workflow decides where an idea belongs.

The Save Decision workflow decides whether the routed idea should be saved.