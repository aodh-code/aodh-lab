# Sample Save Decision Output

This is a fictional example.

It shows how Aodh Lab might decide whether something should be saved.

---

## Input summary

Raw thought, if available:

```text
That project routing piece is done now. It is pushed to GitHub and the working tree is clean.
```

Clear idea summary:

```text
A project milestone has been completed and confirmed.
```

Project routing decision, if available:

```text
Existing project: Aodh Lab
```

Privacy mode:

```text
Basic redaction
```

---

## Candidate information

What might be saved:

```text
The Aodh Lab project routing workflow is complete and pushed to GitHub.
```

Type of information:

```text
Project milestone
```

Estimated future value:

```text
High
```

Sensitivity level:

```text
Low
```

---

## Save decision

Save decision:

```text
Suggest as memory candidate
```

Suggested destination:

```text
Long-term assistant memory and project history
```

User confirmation required:

```text
No, if the user has already asked the assistant to track project progress.
```

---

## Reason

Why this save decision was chosen:

```text
This is a stable project milestone. Saving it prevents repeated context rebuilding and helps the assistant continue the project accurately in future sessions.
```

Why other save options were not chosen:

```text
Do not save was not chosen because the milestone has future value.

Save to current output only was not chosen because the information is useful beyond the current response.

Save to local project file may also be useful, but the milestone is public-safe and already connected to the public repo.

Save to public repo file is not needed because the workflow files have already been committed.
```

---

## Suggested saved text

If saving is recommended, write the exact suggested text below.

```text
Aodh Lab Mission 6 is complete. It added the Project Routing workflow, connecting Idea-to-Action with the Project Index and producing structured routing decisions.
```

---

## Privacy notes

```text
This is public-safe project progress. It does not include private user data.
```

---

## User-facing response

```text
This should be saved as a project milestone.

It is low sensitivity, stable, and useful for future continuity. It does not need to go into a private local file unless you want a separate local project history later.
```