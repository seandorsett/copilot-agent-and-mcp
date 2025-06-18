# Demo 6: Using GitHub Copilot Chat in Agent Mode to add a (medium) new feature

In this demo, we'll use GitHub Copilot Chat in Agent Mode with MCP to add more information about a book (date, summary, and author). We will be using an MCP server to collect information from multiple sources to update the book details in the database. This will demonstrate how GitHub Copilot Chat in Agent Mode understands context, suggests solutions, and helps test the changes and interact with the MCP server.

## Prerequisites

- A GitHub account with Copilot enabled and access to the Agent Mode.
- An IDE with GitHub Copilot Chat enabled and configured to use Agent Mode.
- An GitHub account and an IDE with access to the MCP server.

## Setup Steps (already done)

- `.github/copilot-instructions.md`
- MCP server serving the book details:
  - `GET /books?titles` to retrieve basic books information by titles.
  - `GET /books/?isbn={isbnList}` to retrieve books details by ISBNs.
- MCP server created and running.

## Feature Request: Add and display more information about a book

We'll use this feature request to demonstrate Copilot Agent's capabilities with MCP:

1. Go to your IDE and start the `Book database` MCP server. You can use a different VSCode window to run the server.
2. Explain how the MCP server is set up:
  - `new McpServer`
  - `function formatBook`
  - `server.tool`
2. Go to your demo IDE workspace and check that the MCP server is running and accessible.
3. Open the GitHub Copilot Chat in Agent Mode, add the entire codebase (`#codebase`) in the context as we are working on a small application and then ask Copilot:

```prompt
can you update #file:books.json (without any script) to add the date and a description by using the information provided by the book-database MCP server?
```

```prompt
Can you display more information about a book (date, summary, and author)? We can maybe use a new component to display the book details outside the list.
```

4. Let's Copilot work on it and explain what is happening in the chat pannel.
5. Explore the code changes that Copilot has made.
6. If needed ask Copilot to make changes or improvements to the code.
