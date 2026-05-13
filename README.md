# Aodh Lab

Aodh Lab is an open-source personal AI systems lab.

It is a learning project for designing and building personal AI agents using clear system structure, memory files, tool permissions, safety rules, model choice, and human approval.

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

Human approval
  = the user stays in control