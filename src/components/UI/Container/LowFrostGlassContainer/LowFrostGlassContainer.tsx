import React from 'react';
import styles from './LowFrostGlassContainer.module.scss';

type GlossyGlassContainerProps = {
	content?: React.ReactNode;
};

const LowFrostGlassContainer = ({
	content,
}: Readonly<GlossyGlassContainerProps>) => {
	return <div className={styles.LowFrostGlassContainer}>{content}</div>;
};

export default LowFrostGlassContainer;
