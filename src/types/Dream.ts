import { Models } from 'appwrite';

export interface Dream extends Models.Document {
	/** Seconds from epoch (e.g., `Date.now()`) */
	timestamp: number;
	/** User-entered string describing the dream for sequencing and hashing */
	description: string;
}
