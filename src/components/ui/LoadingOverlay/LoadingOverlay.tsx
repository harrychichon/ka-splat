'use client';

import { useUIStore } from '@/stores';
import Spinner from '../Spinner/Spinner';
import styles from './LoadingOverlay.module.scss';

type LoadingOverlayProps = {
	children?: React.ReactNode;
};

const LoadingOverlay = ({ children }: Readonly<LoadingOverlayProps>) => {
	const loading = useUIStore((s) => s.loading);

	if (!loading) return null;

	return (
		<div className={styles.overlay}>
			<Spinner />
			<h2 className='loadingText'>LOADING...</h2>
			{children}
		</div>
	);
};

export default LoadingOverlay;
