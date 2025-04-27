'use client';

import { useUIStore } from '@/stores';
import styles from './LoadingOverlay.module.scss';

type LoadingOverlayProps = {
	children?: React.ReactNode;
};

const LoadingOverlay = ({ children }: Readonly<LoadingOverlayProps>) => {
	const loading = useUIStore((s) => s.loading);

	if (!loading) return null;

	return (
		<div className={styles.overlay}>
			<div className={styles.spinner}></div>
			{children}
		</div>
	);
};

export default LoadingOverlay;
