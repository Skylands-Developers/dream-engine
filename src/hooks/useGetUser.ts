import { Models } from 'appwrite';
import { Dispatch, useEffect, useReducer } from 'react';
import { API } from '../api/api';
import { Action } from '../types/Action';
import { AppState } from '../types/AppState';
import { FetchState } from '../types/FetchState';
import { reducer } from '../utils/reducer';

export const useGetUser = (): [AppState, Dispatch<Action<Models.User<Models.Preferences>>>] => {
	const r = reducer<Models.User<Models.Preferences>>('user');
	const [state, dispatch] = useReducer(r, {
		isLoading: false,
		isError: true,
		dreams: [],
	});

	useEffect(() => {
		let didCancel = false;
		const fetch = async () => {
			dispatch({ type: FetchState.INIT });
			try {
				const account = await API.getAccount();
				if (!didCancel) {
					dispatch({ type: FetchState.SUCCESS, payload: account });
				}
			} catch (e) {
				if (!didCancel) {
					dispatch({ type: FetchState.FAILURE });
				}
			}
		};
		fetch();
		return () => {
			didCancel = true;
		};
	}, []);

	return [state, dispatch];
};
