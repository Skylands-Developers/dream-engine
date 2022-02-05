import { Models } from 'appwrite';
import { Dispatch } from 'react';
import { Action } from './Action';

export interface AuthContextType {
	user?: Models.User<Models.Preferences>;
	isLoading: boolean;
	isError: boolean;
	dispatch: Dispatch<Action<Models.User<Models.Preferences>>>;
}
