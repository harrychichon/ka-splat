'use client';

import { useRef } from 'react';
import styles from './SearchBar.module.scss';
import useOutsideClick from './useOutsideClick';

type SearchBarProps = {
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	clearResults: () => void;
	handleSubmit?: (e: React.FormEvent) => void;
};

const SearchBar = ({
	placeholder,
	onChange,
	value,
	handleSubmit,
	clearResults,
}: SearchBarProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useOutsideClick(wrapperRef, clearResults);

	return (
		<div
			ref={wrapperRef}
			className={styles.searchWrapper}>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.searchBar}
					type='search'
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
