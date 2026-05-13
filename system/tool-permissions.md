# Tool Permissions

## Purpose

This file defines what tools Aodh Lab may use, what each tool is allowed to touch, and what requires approval.

The agent should only gain tools gradually.

Tool access should be earned through clear use cases.

## Permission Levels

### Level 0: No Tool Access

The agent can only reason and respond.

Allowed:

- Explain concepts
- Draft text
- Suggest plans
- Review pasted content
- Help the user think through architecture and design

Use this when learning or designing before connecting tools.

### Level 1: Read-Only Lab Access

The agent may read files inside:

~/Documents/Aodh-Lab/

Allowed:

- Read memory files
- Read project notes
- Summarise documents
- Search within Aodh Lab
- Compare notes
- Identify open questions
- Suggest updates

Not allowed:

- Edit files
- Delete files
- Access folders outside Aodh Lab

### Level 2: Draft Writing Access

The agent may create or edit draft files inside:

~/Documents/Aodh-Lab/

Allowed:

- Create markdown notes
- Create project briefs
- Append to decision logs
- Create learning logs
- Generate reports
- Create draft scripts
- Create safe example datasets

Not allowed:

- Delete files
- Send messages
- Modify files outside Aodh Lab
- Run scripts without approval
- Overwrite important files without approval

### Level 3: Local Tool Execution

The agent may suggest or run approved local scripts.

Allowed only with the user's approval:

- Run Python scripts
- Process public datasets
- Generate charts
- Generate local reports
- Create visual outputs
- Use safe command-line tools
- Test small local workflows

Not allowed:

- Install packages without approval
- Change system settings
- Delete or overwrite files without approval
- Access private folders outside Aodh Lab
- Run unclear or unexplained commands

### Level 4: External Connections

The agent may connect to external APIs or services only after explicit approval.

Examples:

- OpenAI API
- GitHub
- Public data APIs
- Weather or climate data APIs
- Mapping APIs

Not allowed by default:

- Email
- Calendar
- Messaging apps
- Banking or payment systems
- Social media posting
- Any private system the user has not explicitly approved

### Level 5: Communication or Action Layer

This level may involve tools such as OpenClaw, Telegram, or other assistant-style interfaces.

This is not allowed until earlier levels are stable.

Potential future uses:

- Send the user summaries
- Receive idea captures from phone
- Trigger local workflows
- Ask for approval before action

Always requires approval before:

- Sending messages
- Posting publicly
- Sharing files
- Taking actions outside the local lab

## Current Permission Level

Current level: Level 0

Reason:

Aodh Lab is still in foundation design.

No runtime, MCP server, or tool access has been connected yet.

## Next Target Permission Level

Next target: Level 1

Goal:

Allow the future agent runtime to read only the Aodh Lab folder.

## Tool Design Principle

Every tool must answer three questions before it is added:

1. What real loop does this improve?
2. What folder, data, or system can it access?
3. What could go wrong if it behaves badly?

If the answers are unclear, the tool should not be added yet.

## Runtime Principle

Hermes, OpenClaw, or any future runtime should be treated as replaceable.

Aodh Lab owns the rules.

The runtime follows the rules.

The tools serve the system.

The user stays in control.