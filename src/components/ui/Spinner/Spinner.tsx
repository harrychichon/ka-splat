'use client';

import styles from './Spinner.module.scss';

type SpinnerSize = 'small' | 'large';

type SpinnerProps = {
	size?: SpinnerSize;
};

const Spinner = ({ size }: Readonly<SpinnerProps>) => {
	const pixelSize = size === 'small' ? 24 : 48;

	return (
		<div
			className={styles.spinner}
			style={{
				width: `${pixelSize}px`,
				height: `${pixelSize}px`,
			}}
		/>
	);
};

export default Spinner;
