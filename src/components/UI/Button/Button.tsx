import styles from './Button.module.scss';

type ButtonProps = {
	icon: boolean;
	text: string;
	onClick: () => void;
};

const Button = ({ icon, text, onClick }: Readonly<ButtonProps>) => {
	return (
		<button
			className={styles.Button}
			type='button'
			onClick={onClick}>
			{icon}
			{text}
		</button>
	);
};

export default Button;
