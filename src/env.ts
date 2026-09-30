import { dev } from '$app/env';
import { defineEnvVars } from '@sveltejs/kit/env';
import { endsWith, minBytes, nonEmpty, optional, pipe, string, undefined_ } from 'valibot';

const DatabaseURLSchema = pipe(string(), endsWith('.db'));
const NonEmptyStringSchema = pipe(string(), nonEmpty());
const JWTSecretSchema = pipe(string(), minBytes(32)); // HS256 key size

export const variables = defineEnvVars({
	DATABASE_URL: { schema: DatabaseURLSchema },
	DATABASE_AUDIT_URL: { schema: !dev ? DatabaseURLSchema : undefined_() },
	SENTRY_DSN: { public: true, schema: optional(NonEmptyStringSchema) },
	SITE_NAME: { public: true, schema: NonEmptyStringSchema },

	// In production, dynamic values can be updated without rebuilding.
	JWT_SECRET_NEW: { static: false, schema: JWTSecretSchema },
	JWT_SECRET_OLD: { static: false, schema: optional(JWTSecretSchema) },
});
