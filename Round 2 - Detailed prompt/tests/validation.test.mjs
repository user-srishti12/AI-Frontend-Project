import test from "node:test";
import assert from "node:assert/strict";
import { getSettingsSubmitResult, validateSettings } from "../validation.mjs";

test("requires a name", () => assert.deepEqual(validateSettings({ name: " ", email: "alex@example.com" }), { name: "Name is required." }));
test("requires an email", () => assert.deepEqual(validateSettings({ name: "Alex", email: "" }), { email: "Email is required." }));
test("rejects an invalid email", () => assert.deepEqual(validateSettings({ name: "Alex", email: "invalid" }), { email: "Enter a valid email address." }));
test("blocks invalid submission", () => assert.equal(getSettingsSubmitResult({ name: "", email: "invalid" }).submitted, false));
test("accepts valid submission", () => assert.deepEqual(getSettingsSubmitResult({ name: "Alex Johnson", email: "alex@example.com" }), { errors: {}, submitted: true }));
