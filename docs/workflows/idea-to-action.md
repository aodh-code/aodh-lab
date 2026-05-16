# Idea-to-Action Workflow

Status: Draft v0.1  
Mission: 4  
Purpose: Define how Aodh Lab turns a messy thought into something clear, useful, and actionable.

## Overview

The Idea-to-Action workflow is the first core workflow in Aodh Lab.

Its job is simple:

> Take a messy thought and turn it into a useful output the user can understand, trust, and act on.

A messy thought might be half-formed, emotional, vague, practical, creative, or scattered. The system should not expect the user to arrive with a polished brief. The agent should help find the real idea inside the noise.

This workflow is designed for personal AI systems, but it should remain open-source, cloneable, and safe for others to adapt.

## Core principles

1. Preserve the user's intent.
2. Do not over-polish away the human meaning.
3. Make assumptions visible.
4. Prefer one useful next action over a large unrealistic plan.
5. Respect the selected privacy mode.
6. Do not save anything to memory unless there is a clear reason.
7. Keep the final output understandable to the user.

## Workflow stages

### 1. Receive the messy thought

The agent receives the raw input exactly as provided.

At this stage, the agent should:

- Avoid judging the quality of the thought
- Preserve the original meaning
- Notice emotional charge, urgency, constraints, and repeated themes
- Identify whether the input contains private or sensitive information
- Apply the selected privacy mode before using any cloud model route

### 2. Extract the real idea

The agent identifies the main idea hidden inside the raw input.

It should look for:

- What the user is really trying to say
- What problem, desire, or opportunity is underneath the wording
- Why the idea matters
- What outcome the user might be aiming for
- Which parts are useful signal and which parts are noise

The agent should not ask multiple clarifying questions. If clarification is truly needed, ask one focused question only. When possible, make a reasonable assumption and label it clearly.

### 3. Summarise the idea clearly

The agent turns the extracted idea into a short plain-language summary.

The summary should:

- Be easy to understand
- Stay close to the user's intent
- Avoid unnecessary jargon
- Keep the human motivation visible
- Separate known facts from assumptions when needed

### 4. Categorise the idea

The agent assigns a category so the idea can be routed, stored, or acted on later.

Suggested categories:

- Personal insight
- Product idea
- Work process improvement
- Creative concept
- Learning goal
- Health or wellbeing note
- Relationship or communication note
- Technical build
- Admin or logistics task
- Research question
- Open question

The agent should also estimate maturity:

- Raw spark
- Emerging idea
- Defined concept
- Actionable task
- Project candidate
- Existing project update

### 5. Link to an existing project or suggest a new one

The agent checks whether the idea belongs to an existing project.

Possible outcomes:

- Link to an existing project
- Suggest a new project
- Treat as a one-off task
- Hold as an unassigned idea
- Mark as not project-related

For open-source use, this lookup should be adaptable. A public implementation should not assume any specific user's private projects. Personal project lists should live in local files or user-provided configuration.

### 6. Suggest the next action

The agent suggests one useful next action.

The next action should be:

- Specific
- Realistic
- Small enough to start
- Connected to the actual idea
- Useful even if the user does nothing else

### 7. Decide whether anything should be saved

The agent decides whether the idea contains anything worth saving.

Default position:

> Do not save unless there is a clear reason.

Things that may be worth saving:

- A stable user preference
- A long-term project decision
- A recurring goal
- A reusable workflow insight
- A project milestone
- A meaningful constraint that will affect future work

Things that should not be saved by default:

- Temporary emotions
- One-off frustrations
- Sensitive personal information
- Private third-party details
- Health, legal, financial, or identity-related details unless explicitly requested
- Anything that belongs only in a temporary session

Possible save decisions:

- Do not save
- Save to current output only
- Suggest as a memory candidate
- Save to a local project file
- Save only after explicit user confirmation

### 8. Produce the final user-facing output

The final output should be useful on its own.

It should include:

- Clean title
- Clear summary
- Extracted core idea
- Category
- Project link or project suggestion
- Next action
- Save decision
- Optional follow-up question, only if needed

The output should remain understandable to the user. It should not expose internal reasoning, private implementation details, or unnecessary system language.

## Privacy behaviour

The workflow must respect the selected privacy mode.

### Off

The raw thought can be processed directly.

### Basic redaction

Obvious personal identifiers should be removed or replaced before cloud processing.

Examples:

- Names
- Email addresses
- Phone numbers
- Addresses
- Account numbers

### Mask and rehydrate

Sensitive details are replaced with placeholders before processing.

Example:

```txt
[PERSON_1]
[COMPANY_1]
[LOCATION_1]
[PROJECT_1]