import styles from './Main.module.scss';

type MainProps = {
	children?: React.ReactNode;
};

const Main = ({ children }: Readonly<MainProps>) => {
	return <main className={styles.main}>{children}</main>;
};

export default Main;
