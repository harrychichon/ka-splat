import styles from './Aside.module.scss';
type AsideProps = {
	children: React.ReactNode;
};

const Aside = ({ children }: AsideProps) => {
	return <aside className={styles.aside}>{children}</aside>;
};

export default Aside;
