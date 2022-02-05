import { Models } from 'appwrite';
import { Dream } from './Dream';

export type AppState = {
	isLoading: boolean;
	isError: boolean;
	dreams: Dream[];
	user?: Models.User<Models.Preferences>;
};
