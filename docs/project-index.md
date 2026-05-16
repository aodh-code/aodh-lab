# Project Index

Status: Draft v0.1  
Mission: 5  
Purpose: Define how Aodh Lab decides whether an idea belongs to an existing project, a new project, a one-off task, an unassigned idea, or should not become a project.

## Overview

The Project Index is the routing layer for Aodh Lab.

Its job is simple:

> Help the system decide where a captured thought belongs.

When the Idea-to-Action workflow receives a messy thought, it should not automatically turn every idea into a project. Some thoughts are project updates. Some are small tasks. Some are worth holding. Some are emotional noise. Some should be ignored or treated as temporary.

The Project Index gives the agent a structured way to make that decision.

## What the Project Index is

The Project Index is a lightweight map of active and potential projects.

It helps the agent understand:

1. What projects already exist
2. What each project is trying to achieve
3. What type of ideas belong inside each project
4. What stage each project is in
5. Whether a new thought should update a project, create a new one, become a task, stay unassigned, or be ignored

## What the Project Index is not

The Project Index is not a full project management system.

It should not replace tools like GitHub Issues, Linear, Jira, Notion, Trello, Planner, or a task manager.

It should not contain sensitive private information in the public repository.

It should not become a dumping ground for every passing thought.

The goal is routing, not bureaucracy.

## Public and private behaviour

Aodh Lab is designed to be cloneable.

The public repository should include:

* Documentation explaining how the Project Index works
* A reusable template
* A fictional example

The public repository should not include a real user’s private project index.

A real project index should be created locally by the user from the template, for example:

```text
local/project-index.md
```

The `local/` folder is ignored by Git and should remain private.

## Relationship to the Idea-to-Action workflow

The Idea-to-Action workflow extracts the idea.

The Project Index helps route it.

Together, they form a simple loop:

```text
Messy thought
  -> Idea-to-Action workflow
  -> Clear idea
  -> Project Index lookup
  -> Routing decision
  -> Next action
```

The Project Index should be checked during the stage where the agent decides whether the idea belongs to:

* An existing project
* A new project
* A one-off task
* An unassigned idea
* Something that should not become a project

## Routing outcomes

Every captured idea should be routed into one of the following outcomes.

### 1. Existing project

Use this when the idea clearly belongs to a project already listed in the Project Index.

Examples:

* A new feature idea for an app already being built
* A design change for an existing workflow
* A decision that affects an active project
* A research note linked to an existing goal

The agent should identify the project and suggest how the idea should be added.

### 2. New project candidate

Use this when the idea is too substantial to be a one-off task and does not fit an existing project.

A new project candidate should have:

* A clear purpose
* A meaningful outcome
* More than one likely step
* Enough value to justify tracking separately

The agent should not automatically create a new project. It should suggest one and explain why.

### 3. One-off task

Use this when the idea is useful but does not need a project wrapper.

Examples:

* Send a message
* Check a setting
* Research one thing
* Update a document
* Make a small decision

The agent should suggest the next action and avoid overcomplicating the idea.

### 4. Unassigned idea

Use this when the idea may be useful later but is not mature enough to route yet.

Examples:

* A vague product thought
* A creative spark
* A possible future direction
* A question that needs more reflection

The agent should hold the idea lightly and avoid forcing structure too early.

### 5. Not a project

Use this when the thought should not become a project.

Examples:

* Temporary frustration
* Emotional venting
* A passing observation
* Something outside the user’s control
* A sensitive issue that should not be stored
* A thought that only needs acknowledgement

The agent should respond helpfully without turning the input into work.

## Suggested project fields

Each project in the Project Index should use a consistent structure.

Recommended fields:

* Project name
* Status
* Category
* Purpose
* Desired outcome
* Current stage
* Belongs here
* Does not belong here
* Current next action
* Related files or artefacts
* Privacy notes
* Last reviewed

## Suggested project statuses

Use simple statuses that are easy to understand.

Recommended statuses:

* Active
* Paused
* Exploring
* Backlog
* Complete
* Archived

## Suggested project categories

Project categories should be broad enough to stay useful.

Recommended categories:

* Product build
* Learning project
* Work system
* Personal system
* Creative project
* Research track
* Admin or logistics
* Health or wellbeing
* Family or home
* Open question

## Routing rules

The agent should use the following rules when routing an idea.

### Rule 1: Prefer existing projects when the fit is clear

If the idea clearly belongs to an existing project, route it there.

Do not create duplicate projects for the same underlying goal.

### Rule 2: Do not force vague ideas into projects

If an idea is not mature enough, mark it as unassigned.

A weak idea can become useful later.

### Rule 3: Keep one-off tasks small

If the idea can be completed in one clear action, treat it as a one-off task.

Do not create a project just because the idea sounds useful.

### Rule 4: Make assumptions visible

If the agent is unsure, it should say so.

Example:

> Assumption: This seems related to the existing app project because it describes a feature improvement.

### Rule 5: Respect privacy mode

The Project Index may contain personal plans, private project names, or sensitive context.

If the user is using a cloud model route, the selected privacy mode should be applied before sharing private project index content with the model.

### Rule 6: Do not save automatically

The agent should not update a local project index automatically unless the user has explicitly allowed that behaviour.

Default behaviour:

* Suggest the routing decision
* Explain the reason
* Ask for confirmation before saving, if saving is relevant

## Example routing decision format

When an idea is processed, the agent can produce a routing decision like this:

```text
Routing decision: Existing project
Project: Aodh Lab
Reason: The idea defines a new structural layer for the agent system.
Suggested update: Add this as Mission 5, Project Index.
Next action: Create the public documentation, template, and fictional example files.
Save decision: Save to project files after user approval.
```

## Local project index

Users who clone Aodh Lab can create their own private project index from the public template.

Suggested local path:

```text
local/project-index.md
```

This file should not be committed.

It may include private project names, personal goals, sensitive constraints, or work-in-progress decisions.

## Design principle

The Project Index should help the agent route ideas without making the system feel heavy.

A good Project Index should feel like a map, not a cage.
