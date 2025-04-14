import styles from './InputText.module.scss';

type InputTextProps = {
	placeholder: string;
	onChange: () => void;
};

const InputText = ({ placeholder, onChange }: Readonly<InputTextProps>) => {
	return (
		<input
			className={styles.SearchBar}
			type='text'
			onChange={onChange}
			placeholder={placeholder}></input>
	);
};

export default InputText;
