# Workflow Comparison: Round 1 vs Round 2

## Overview

The two branches implement the same settings-form feature using different prompting approaches. Round 1 was produced from a single vague prompt and accepted with minimal iteration. Round 2 used a more precise prompt with file references, constraints, expected behaviour, and a verification step. The branch diff shows a clear structural difference between the approaches.

## Correctness

Round 1 keeps the implementation largely inside `index.html`, while Round 2 separates responsibilities into `settings.css`, `settings.js`, and `validation.mjs`. Round 2 also adds `package.json` and `tests/validation.test.mjs`, making the validation behaviour easier to verify independently. The diff contains 30 insertions and 224 deletions, showing that Round 2 is not simply a copy of Round 1 but a substantially reorganised implementation.

## Accessibility

The settings form should provide clear labels for every input, readable validation messages, and usable keyboard interaction. These requirements are easier to review when the structure and behaviour are separated into dedicated files. A precise prompt also makes accessibility expectations explicit instead of leaving them to the AI's interpretation.

## Edge Cases

Validation should handle empty required fields, invalid input, and valid input correctly. Round 2's dedicated `validation.mjs` and `validation.test.mjs` make these cases more explicit and testable. This reduces the chance that a visually correct form fails for unexpected input.

## Review Effort

Round 1 is initially simpler because it is contained in one HTML file, but reviewing correctness and validation behaviour requires inspecting the whole file. Round 2 introduces more files, but the separation makes individual responsibilities easier to locate and test. The automated validation test also reduces manual review effort.

## AI Mistake Caught

One important issue discovered during the workflow was that the AI-generated Round 2 setup did not initially provide a clean, directly comparable structure with Round 1. The branch diff exposed that Round 1's `index.html` was removed while Round 2 used a different file structure. This demonstrated why checking the actual Git diff and running the implementation is necessary instead of assuming the generated output is correct.

## Conclusion

The Round 2 workflow required more upfront specification but produced a more structured and verifiable implementation. The main lesson is that precise prompts, explicit constraints, and a test-and-verify step reduce ambiguity and make AI-generated code easier to review.