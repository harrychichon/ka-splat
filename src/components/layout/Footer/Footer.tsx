import styles from './Footer.module.scss';

type FooterProps = {
	children?: React.ReactNode;
};

const Footer = ({ children }: Readonly<FooterProps>) => {
	return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
