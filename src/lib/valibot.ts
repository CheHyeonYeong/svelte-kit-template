import { email, isoDate, maxLength, pipe, string, transform } from 'valibot';
import type { ISODateString } from './types.ts';

export const EmailSchema = pipe(string(), email(), maxLength(254));

export const ISODateSchema = pipe(
	string(),
	isoDate(),
	transform((v) => v as ISODateString),
);
