# CLAUDE.md

## Project
Frontend AI Capstone

## Goal
Build a modern AI-powered frontend application.

## Tech Stack
- React
- Vite
- JavaScript
- HTML
- CSS

## Coding Guidelines
- Write clean and readable code.
- Use reusable components.
- Follow consistent naming conventions.
- Add comments where necessary.

## Project Rules

1. All settings-form validation must be handled through the dedicated validation module instead of duplicating validation logic across UI files.

2. Every form input must have a clear accessible label, and validation errors must be presented in a way that users can understand without relying only on colour.

3. Validation must cover required fields, invalid input, and valid input. Changes to validation behaviour must be covered by tests in the `tests/` directory.

4. Keep presentation, UI behaviour, and validation logic separated into their respective files rather than putting all implementation inside `index.html`.

5. Before considering a settings-form change complete, run the validation tests and verify the expected behaviour manually in the browser.