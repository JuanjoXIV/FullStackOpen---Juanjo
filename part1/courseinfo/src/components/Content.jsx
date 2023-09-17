import Part from './Part';

export const Content = ({ contents }) => {
	console.log(contents);
	return (
		<div>
			{Array.from(contents).map((obj) => {
				return (
					<Part
						name={obj.name}
						number={obj.exercises}
					/>
				);
			})}
		</div>
	);
};

export default Content;
