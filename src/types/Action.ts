import { FetchState } from './FetchState';

export type Action<T = any> = {
	type: FetchState;
	payload?: T;
};
