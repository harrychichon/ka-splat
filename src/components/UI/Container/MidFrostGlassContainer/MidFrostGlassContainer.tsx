import React from 'react';
import styles from './MidFrostGlassContainer.module.scss';

type MidFrostGlassContainerProps = {
	content?: React.ReactNode;
};

const MidFrostGlassContainer = ({
	content,
}: Readonly<MidFrostGlassContainerProps>) => {
	return <div className={styles.MidFrostGlassContainer}>{content}</div>;
};

export default MidFrostGlassContainer;
