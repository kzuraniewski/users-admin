import { useEffect } from 'react';

/**
 * Logs values every time one of them changes
 * @param {any[]} values
 */
export const useDebug = ([...values]) => {
	// TODO: Log only changed values

	useEffect(() => {
		console.log(...values);
	}, [values]);
};
