import React from 'react';
import { course } from './files/constants';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Total } from './components/Total';

export const App = () => {
	return (
		<div>
			<Header course={course} />
			<Content />
			<Total />
		</div>
	);
};
