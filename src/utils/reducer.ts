import { Action } from '../types/Action';
import { AppState } from '../types/AppState';
import { FetchState } from '../types/FetchState';

export const reducer =
	<T>(key: keyof AppState) =>
	(state: AppState, action: Action<T>): AppState => {
		switch (action.type) {
			case FetchState.INIT:
				return { ...state, isLoading: true, isError: false };
			case FetchState.SUCCESS:
				return {
					...state,
					isLoading: false,
					isError: false,
					[key]: action.payload,
				};
			case FetchState.FAILURE:
				return { ...state, isLoading: false, isError: true };
			default:
				throw new Error();
		}
	};
