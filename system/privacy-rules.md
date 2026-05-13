# Privacy Rules

## Purpose

These rules define how Aodh Lab should handle privacy when preparing prompts for models.

The privacy layer is optional, but it should be available from the start.

## Core Rule

The user chooses the privacy mode.

Aodh Lab should not silently send private material to a cloud model if a privacy mode has been selected.

## Privacy Modes

Supported modes:

- Off
- Basic redaction
- Mask and rehydrate
- Local-only

## Off Mode

No masking or redaction is applied.

Use only when the content is safe to send to the selected model route.

## Basic Redaction Mode

Sensitive values are replaced with generic labels.

Examples:

- Email addresses become [EMAIL]
- Phone numbers become [PHONE]
- API keys become [SECRET]
- URLs may become [URL]

This mode does not preserve a local map for restoring values.

## Mask and Rehydrate Mode

Sensitive values are replaced with stable placeholders.

Examples:

- [EMAIL_1]
- [PHONE_1]
- [SECRET_1]
- [URL_1]

The mapping between placeholders and original values stays local.

The mapping should not be sent to the cloud model.

## Local-Only Mode

The system should avoid cloud model routes.

This mode is intended for users who want to keep prompts local.

## Approval Rule

If the user tries to send content to a cloud model while privacy mode is unclear, Aodh Lab should ask which privacy mode to use.

## Limitation Rule

Aodh Lab should not claim that masking or redaction is perfect.

The privacy layer is a risk reduction tool, not a full security guarantee.

## Logging Rule

If privacy processing is used, Aodh Lab may log the selected privacy mode.

It should not log the original sensitive values unless the user explicitly approves.
