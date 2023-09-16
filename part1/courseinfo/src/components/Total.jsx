import { exercises1, exercises2, exercises3 } from '../files/constants';

export const Total = () => {
	return (
		<div>
			<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
		</div>
	);
};

export default Total;
