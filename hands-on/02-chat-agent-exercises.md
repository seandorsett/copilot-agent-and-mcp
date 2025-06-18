# GitHub Copilot Chat Agent Mode with MCP Exercises

## Exercise 4: Implementing Book Search

### Task

Add a search functionality to the book list that allows users to search by title or author in real-time.

### Steps

1. Open VS Code and use Copilot Chat in Agent Mode.

2. Create a prompt like this:
   ```
   I want to add a search feature to the book list that filters books by title or author.
   The search should work in real-time as the user types.

   Help me create a SearchInput component that:
   - Has a clean, modern design
   - Shows a search icon
   - Has a clear button
   - Updates in real-time

   Help me implement the filter logic to:
   - Search in both title and author fields
   - Be case-insensitive
   - Handle special characters
   - Update the list in real-time

   Help me integrate the search state with Redux:
   - Add search term to the store
   - Update the book list selector
   - Persist search state during navigation

   Help me write tests for:
   - The SearchInput component
   - The filter logic
   ```

### Learning Objectives

- Using Copilot Chat in Agent Mode effectively

## Exercise 5: Adding Book Categories

### Task

Use the GitHub MCP server to create a detailed issue for adding book categories, then implement the feature using Copilot Chat in Agent Mode.

### Steps

1. Open VS Code

2. Configure the GitHub MCP server to allow Copilot to create issues by following the setup instructions [here](https://github.com/github/github-mcp-server?tab=readme-ov-file#usage-with-vs-code).

3. Use Copilot Chat in Agent Mode.

4. Create a prompt like this:
   ```
   I want to add a book categories feature

   I want to track my changes in a GitHub Issue: can you help me write a detailed description for implementing book categories in our application?
     - Technical requirements
     - UI/UX considerations
     - Testing requirements
     - Acceptance criteria

   Don't forget to add tests.
   ```

### Learning Objectives

- Using GitHub MCP server for issue creation
- Using Copilot Chat in Agent Mode effectively