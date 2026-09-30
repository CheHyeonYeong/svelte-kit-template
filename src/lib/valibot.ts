import { email, isoDate, maxLength, pipe, string, transform } from 'valibot';
import type { ISODateString } from './types.ts';

export const EMAIL_MAX_LENGTH = 254;

export const EmailSchema = pipe(string(), maxLength(EMAIL_MAX_LENGTH), email());

export const ISODateSchema = pipe(
	string(),
	isoDate(),
	transform((v) => v as ISODateString),
);
