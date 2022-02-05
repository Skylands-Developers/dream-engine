import { useEffect, useReducer, Dispatch } from 'react';
import { API } from '../api/api';
import { Config } from '../api/config';
import { Action } from '../types/Action';
import { AppState } from '../types/AppState';
import { Dream } from '../types/Dream';
import { FetchState } from '../types/FetchState';
import { reducer } from '../utils/reducer';

export function useGetDreams(stale: any) {
	const r = reducer<Dream[]>('dreams');
	const [state, dispatch]: [AppState, Dispatch<Action<Dream[]>>] = useReducer(r, {
		isLoading: false,
		isError: false,
		dreams: [],
		user: undefined,
	});

	useEffect(() => {
		let didCancel = false;
		const fetch = async () => {
			dispatch({ type: FetchState.INIT });
			try {
				const data = await API.listDocuments(Config.collectionID);
				if (!didCancel) {
					dispatch({ type: FetchState.SUCCESS, payload: data.documents });
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
	}, [stale]);

	return [state];
}
