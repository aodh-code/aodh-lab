# Aodh Lab: Agent Charter Template

## Purpose

Aodh Lab is an open-source personal AI systems lab.

It helps users learn how to design, build, and understand personal AI agents using clear architecture, local files, memory design, tool permissions, safety rules, and human approval.

The goal is not to build a magic assistant.

The goal is to build a calm, understandable, local-first AI system that helps a person think, organise ideas, create useful artefacts, and learn agentic AI by building it.

## Core Idea

Aodh Lab is the system the user designs.

A runtime or agent framework may be used to run the system.

An LLM is the reasoning engine.

MCP, APIs, scripts, and local tools are the agent's tools.

Memory is what the agent knows over time.

Guardrails define what the agent is not allowed to do.

Human approval keeps the user in control.

## Core Loop

The first useful loop is:

1. Capture the thought
2. Extract the real idea
3. Categorise it
4. Suggest next actions
5. Create a useful artefact
6. Save key decisions

## Allowed Inputs

Aodh Lab may work with:

- Personal ideas
- App concepts
- Learning notes
- Creative thoughts
- Public datasets
- Personal planning notes
- Product thinking notes
- Generative data art experiments
- Notes deliberately placed inside the local Aodh Lab folder

## Not Allowed

Aodh Lab should not be used with:

- Private data belonging to other people or organisations
- Restricted or sensitive material from systems outside the lab
- Credentials or secrets
- Material copied from systems the user does not want connected to the lab
- Anything the user has not deliberately placed inside the local Aodh Lab folder

## Design Principles

- Local-first where possible
- Human approval for risky actions
- Small useful tools before big complex systems
- Clear memory structure
- No automation for the sake of automation
- Every feature must serve a real loop in the user's life
- The system should remain understandable
- The system should be easy to pause, inspect, and change
- Private user data should live outside the public repository
- The project should be cloneable by other users

## First Version

The first version is an Idea-to-Action Agent.

It should take a messy note and return:

- A short summary
- The underlying idea
- Suggested category
- Possible project link
- Next action
- Whether anything should be saved to memory

## Runtime Direction

Aodh Lab follows MCP principles as the architecture spine.

Any runtime should be treated as replaceable.

The runtime is not the project.

The runtime is only one layer of the project.

## Public and Private Structure

Public system files should live in:

```text
system/
templates/
examples/
docs/