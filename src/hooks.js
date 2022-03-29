import { useEffect, useRef } from 'react';

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

/**
 * Sets the page's subtitle
 * @param {string} title
 * @param {boolean} prevailOnUnmount
 */
export const useDocumentTitle = (title, prevailOnUnmount = false) => {
	const defaultTitle = useRef(document.title);

	useEffect(() => {
		document.title = `${title} | Olimp Agency`;
	}, [title]);

	useEffect(
		() => () => {
			if (!prevailOnUnmount) {
				document.title = defaultTitle.current;
			}
		},
		[]
	);
};
