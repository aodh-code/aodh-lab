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