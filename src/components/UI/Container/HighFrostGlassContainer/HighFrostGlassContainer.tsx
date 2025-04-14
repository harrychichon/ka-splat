import React from 'react';
import styles from './HighFrostGlassContainer.module.scss';

type FrostedGlassContainerProps = {
	content?: React.ReactNode;
};

const HighFrostGlassContainer = ({
	content,
}: Readonly<FrostedGlassContainerProps>) => {
	return <div className={styles.HighFrostGlassContainer}>{content}</div>;
};

export default HighFrostGlassContainer;
