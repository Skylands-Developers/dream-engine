import { Appwrite, Models } from 'appwrite';
import { Dream } from '../types/Dream';
import { Config } from './config';

type API = {
	sdk: Appwrite | undefined;
	provider: () => Appwrite;
	createAccount: (userId: string, email: string, password: string, name?: string | undefined) => Promise<Models.User<Models.Preferences>>;
	getAccount: () => Promise<Models.User<Models.Preferences>>;
	createSession: (email: string, password: string) => Promise<Models.Session>;
	deleteCurrentSession: () => Promise<{}>;
	createDocument: (collectionId: string, documentId: string, data: object, read?: string[], write?: string[]) => Promise<Dream>;
	updateDocument: (collectionId: string, documentId: string, data: object, read?: string[], write?: string[]) => Promise<Dream>;
	listDocuments: (collectionId: string, queries?: string[], limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderAttributes?: string[], orderTypes?: string[]) => Promise<Models.DocumentList<Dream>>;
	deleteDocument: (collectionId: string, documentId: string) => Promise<{}>;
};

export const API: API = {
	sdk: undefined,
	provider: () => {
		if (API.sdk) {
			return API.sdk;
		}
		const appwrite = new Appwrite();
		appwrite.setEndpoint(Config.endpoint).setProject(Config.project);
		API.sdk = appwrite;
		return appwrite;
	},
	createAccount: (userId: string, email: string, password: string, name?: string) => {
		return API.provider().account.create(userId, email, password, name);
	},
	getAccount: () => {
		return API.provider().account.get();
	},
	createSession: (email: string, password: string): Promise<Models.Session> => {
		return API.provider().account.createSession(email, password);
	},
	deleteCurrentSession: (): Promise<{}> => {
		return API.provider().account.deleteSession('current');
	},
	createDocument: (collectionId: string, documentId: string, data: object, read?: string[], write?: string[]): Promise<Dream> => {
		return API.provider().database.createDocument<Dream>(collectionId, documentId, data, read, write);
	},
	updateDocument: (collectionId: string, documentId: string, data: object, read?: string[], write?: string[]): Promise<Dream> => {
		return API.provider().database.updateDocument<Dream>(collectionId, documentId, data, read, write);
	},
	deleteDocument: (collectionId: string, documentId: string): Promise<{}> => {
		return API.provider().database.deleteDocument(collectionId, documentId);
	},
	listDocuments: (collectionId: string): Promise<Models.DocumentList<Dream>> => {
		return API.provider().database.listDocuments<Dream>(collectionId);
	},
};
