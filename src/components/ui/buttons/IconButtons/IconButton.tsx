import { iconMap } from '@/constants';
import Image from 'next/image';
import styles from './IconButton.module.scss';

type IconButtonProps = {
	active?: boolean;
	onClick: () => void;
	width: number;
	height: number;
	type: 'Own' | 'Fave' | 'Flip';
	className?: string;
};

const IconButton = ({
	type,
	active = true,
	onClick,
	width,
	height,
	className,
}: Readonly<IconButtonProps>) => {
	const config = iconMap[type];

	const src =
		config.iconType === 'Toggle' && !active
			? config.srcInactive
			: config.srcActive;

	const alt =
		config.iconType === 'Toggle' && !active
			? config.altInactive
			: config.altActive;

	return (
		<div>
			<button
				type='button'
				className={`${styles.iconButton} ${styles[type.toLowerCase()]} ${
					className ?? ''
				}`}
				onClick={onClick}
				title={alt}>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
				/>
			</button>
		</div>
	);
};

export default IconButton;
