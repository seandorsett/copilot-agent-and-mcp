# Demo 1: Using GitHub Copilot Agent to add a (basic) new feature

> [!NOTE] 
> This is a demo so it means that the trainer has to run the demo itself

In this demo, we'll use GitHub Copilot Agent to add a new feature that allows users to remove books from their favorites list. This will demonstrate how Copilot Agent understands context, suggests solutions, and helps test the changes.

## Prerequisites

- A GitHub account with Copilot enabled and access to Copilot Coding Agent.

## Environment configuration

- Create a new repository from [ps-copilot-sandbox/copilot-agent-and-mcp](https://github.com/ps-copilot-sandbox/copilot-agent-and-mcp) which is a template repository
- Clone the repository on your laptop
- Use the instructions in the [`README.md` file](/README.md) to setup your development environment and to start the application
- Quickly explain and demo the application to the audience
- Open the repository on GitHub.com
  - All the following instructions have to be done on this new repository and on GitHub.com

## Setup Steps

These items are already configured. You have to go through them and explain the content:

- [`copilot-setup-steps.yml`](/.github/workflows/copilot-setup-steps.yml) 
- [`.github/copilot-instructions.md`](/.github/copilot-instructions.md)

## Feature Request: Remove book from favorites

We'll use this feature request to demonstrate Copilot Agent's capabilities:

1. Go to dotcom Chat and ask Copilot

```prompt
Create an issue for a feature request to allow users to remove books from their favorites list.
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
