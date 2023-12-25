import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const currentYear = new Date().getFullYear();

	const imgElement = createElement(
		'img',
		{ src: logo, className: 'App-logo', alt: 'logo', key: 'logo' },
		null,
	);

	const codeElem = createElement('code', { key: 'code' }, 'src/App.js');
	const pElement = createElement('p', { key: 'p' }, [
		`Edit `,
		codeElem,
		` and save to reload`,
	]);

	const aElement = createElement(
		'a',
		{
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer',
			key: 'link',
		},
		null,
	);

	const headerElement = createElement(
		'header',
		{ className: 'App-header', key: 'header' },
		[
			imgElement,
			pElement,
			aElement,
			'Learn React',
			createElement('br', { key: 'br' }),
			currentYear,
		],
	);

	const divElem = createElement('div', { className: 'App' }, headerElement);

	return divElem;
};
