import React, { JSX } from 'react';

type ComicBookWindowProps = {
	width: number;
	height: number;
	viewBox: [number, number, number, number];
	fill?: string;
	pathFill?: string;
	children?: React.ReactNode;
	htmlElementWrapper: keyof JSX.IntrinsicElements;
};

const ComicBookWindow = ({
	width,
	height,
	viewBox,
	fill = 'none',
	pathFill = 'none',
	children,
	htmlElementWrapper,
	...props
}: ComicBookWindowProps) => {
	const Wrapper = htmlElementWrapper;
	return (
		<Wrapper {...props}>
			<svg
				width={width}
				height={height}
				viewBox={viewBox.join(' ')}
				fill={fill}
				xmlns='http://www.w3.org/2000/svg'
				{...props}>
				{children}
				<path
					d='M0 0L670 71L648 389.5L0 461V0Z'
					fill={pathFill}
				/>
			</svg>
		</Wrapper>
	);
};
export default ComicBookWindow;
