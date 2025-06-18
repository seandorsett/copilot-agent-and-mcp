# Demo 2: Using GitHub Copilot Agent to add a (medium) new feature

In this demo, we'll use GitHub Copilot Agent to add a new feature to allow different types of users: member and administrators. This will demonstrate how Copilot Agent understands context, suggests solutions, and helps test the changes.

## Prerequisites

- A GitHub account with Copilot enabled and access to Copilot Coding Agent.

## Setup Steps (already done)

- `copilot-setup-steps.yml`
- `.github/copilot-instructions.md`

## Feature Request: Allow different types of users

We'll use this feature request to demonstrate Copilot Agent's capabilities:

1. Go to dotcom Chat and ask Copilot:

```prompt
Csreate an issue for a feature request to allow different types of users: member and administrators. The user type will have to be displayed close to the user name in the header of the application.
```

2. Assign the issue to Copilot.
3. Show the :eyes: emoji reaction to the issue.
4. Show the PR and the content of the body.
5. Open the Actions tab in the repository and find the workflow that was created.
6. Show the Copilot Coding Agent timeline.
7. Explain the setup workflow.
8. Explain the custom instructions.
9. It can take some time (~7 minutes) for Copilot Agent to process the request and create the PR, so be patient. It could be a good time to ask participants if they have any questions.
10. Show the PR and the content of the body.
11. Show the Copilot Coding Agent timeline.
12. Show the result of the PR.
13. Copilot might not give the correct answer the first time, so you can review the PR, add comments and ask Copilot to make changes. This will demonstrate how Copilot Agent can iterate on feedback and improve the solution.
