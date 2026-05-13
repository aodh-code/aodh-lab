# Sample Decision Log

This is fictional example data.

The purpose of this file is to show how Aodh Lab records important project decisions.

## 2026-05-13

### Decision

Aodh Lab will separate public system files from private local user files.

### Reason

The project should be open source and cloneable by other users without exposing private data.

### Implication

Public files live in docs, system, templates, and examples.

Private user files live in local, which is ignored by Git.

---

## 2026-05-13

### Decision

Aodh Lab will support multiple model routes.

### Reason

Users should be able to choose a model setup that fits their budget, privacy needs, technical comfort, and hardware.

### Implication

The project should avoid hardcoding one model provider into the core design.