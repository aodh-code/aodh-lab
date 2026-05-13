# Privacy Config Template

Copy this file into:

local/config/privacy-config.md

Then fill it in locally.

The local version should not be committed to Git.

## Selected Privacy Mode

Choose one:

- Off
- Basic redaction
- Mask and rehydrate
- Local-only

Selected mode:

## Cloud Model Behaviour

Should prompts be processed before being sent to a cloud model?

Answer:

## Local Model Behaviour

Should local model prompts use privacy processing?

Answer:

## Masking Types

Choose which types should be detected.

- Email addresses
- Phone numbers
- URLs
- API keys or secrets
- Person names
- Organisation names
- Locations

Enabled types:

## Rehydration

Should masked values be restored locally after model response?

Answer:

## Notes

Add any user-specific privacy preferences here.