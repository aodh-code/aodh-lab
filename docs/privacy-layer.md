# Privacy Layer

Aodh Lab includes an optional privacy layer for users who want to reduce the amount of sensitive information sent to cloud model providers.

This is especially useful when using cloud routes such as OpenRouter, OpenAI, Anthropic, Google, or other hosted model providers.

The privacy layer is optional.

It should not make the system heavy or difficult to use.

## Purpose

The privacy layer helps users choose how cautious they want to be before prompts are sent to a model.

It supports different levels of protection depending on the model route and the user's needs.

## Privacy Modes

### Off

No masking or redaction is applied.

Best for:

- Public data
- Fictional examples
- Harmless experiments
- Local-only testing where privacy is not a concern

### Basic Redaction

Sensitive values are removed and replaced with generic labels.

Example:

```text
Original:
Contact Sarah at sarah@example.com

Redacted:
Contact [PERSON] at [EMAIL]
```

Best for:

- Simple cloud model use
- Quick protection
- Cases where the exact value does not need to be restored

### Mask and Rehydrate

Sensitive values are replaced with stable placeholders.

A local map stores the original values.

Example:

```text
Original:
Contact Sarah at sarah@example.com

Masked:
Contact [PERSON_1] at [EMAIL_1]

Local map:
[PERSON_1] = Sarah
[EMAIL_1] = sarah@example.com
```

The cloud model sees only the masked version.

The local system may later restore the real values if needed.

Best for:

- Cloud model workflows
- Drafting and summarisation
- Preserving useful structure while hiding sensitive values

### Local-Only Mode

No cloud model is used.

The user chooses a local model route instead.

Best for:

- Private notes
- Sensitive personal material
- Users who prefer not to send prompts to external providers

## Important Limitation

The privacy layer reduces risk, but it is not a perfect security system.

Basic pattern matching may miss some sensitive information.

Advanced detection may require named entity recognition, local classifiers, or specialist data loss prevention tools.

Aodh Lab should present this as a helpful privacy option, not as a guarantee.

## Recommended Default

For public examples and harmless testing:

```text
Privacy mode: Off
```

For cloud model use with personal notes:

```text
Privacy mode: Mask and rehydrate
```

For sensitive private material:

```text
Privacy mode: Local-only
```

## Design Principle

The user should always know which privacy mode is active.

Aodh Lab should make privacy choices visible, understandable, and easy to change.
