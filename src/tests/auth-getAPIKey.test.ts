import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";

const testValidHeader: IncomingHttpHeaders = {
	"authorization": "ApiKey sk-ant-1234567890"
};

const testNoAuthHeader: IncomingHttpHeaders = {
	"accept": "application/json"
};

const testInvalidAPIKeyHeader: IncomingHttpHeaders = {
	"authorization": "ApiKey"
};

test('test valid header', () => {
	expect(getAPIKey(testValidHeader)).toBe("sk-ant-1234567890")
});

test('test no auth header', () => {
	expect(getAPIKey(testNoAuthHeader)).toBeNull()
});

test('test invalid API Key', () => {
	expect(getAPIKey(testInvalidAPIKeyHeader)).toBeNull()
});
