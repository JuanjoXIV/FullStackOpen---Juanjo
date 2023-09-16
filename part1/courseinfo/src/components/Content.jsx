import {
	part1,
	part2,
	part3,
	exercises1,
	exercises2,
	exercises3,
} from '../files/constants';

export const Content = () => {
	return (
		<div>
			<p>
				{part1} {exercises1}
			</p>
			<p>
				{part2} {exercises2}
			</p>
			<p>
				{part3} {exercises3}
			</p>
		</div>
	);
};

export default Content;
