'use client';

import { useOutsideClick } from '@/hooks';
import { useRef } from 'react';
import styles from './SearchBar.module.scss';

type SearchBarProps = {
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	handleSubmit: (e: React.FormEvent) => void;
	clearResults: () => void;
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
