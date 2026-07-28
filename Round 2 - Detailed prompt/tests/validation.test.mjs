import test from "node:test";
import assert from "node:assert/strict";
import { getSettingsSubmitResult, validateSettings } from "../validation.mjs";

test("requires a name", () => {
  assert.deepEqual(validateSettings({ name: "   ", email: "alex@example.com" }), { name: "Name is required." });
});

test("requires an email", () => {
  assert.deepEqual(validateSettings({ name: "Alex", email: "" }), { email: "Email is required." });
});

test("rejects an invalid email", () => {
  assert.deepEqual(validateSettings({ name: "Alex", email: "not-an-email" }), { email: "Enter a valid email address." });
});

test("does not submit when validation fails", () => {
  assert.equal(getSettingsSubmitResult({ name: "", email: "bad" }).submitted, false);
});

test("submits valid settings without errors", () => {
  assert.deepEqual(getSettingsSubmitResult({ name: "Alex Johnson", email: "alex@example.com" }), { errors: {}, submitted: true });
});
