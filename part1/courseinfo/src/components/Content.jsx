import {
	part1,
	part2,
	part3,
	exercises1,
	exercises2,
	exercises3,
} from '../files/constants';
import Part from './Part';

export const Content = () => {
	return (
		<div>
			<Part
				name={part1}
				number={exercises1}
			/>
			<Part
				name={part2}
				number={exercises2}
			/>
			<Part
				name={part3}
				number={exercises3}
			/>
		</div>
	);
};

export default Content;
