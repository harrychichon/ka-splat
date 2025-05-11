'use client';

import { InlineSpinner, LiveSearchResults } from '@/components';
import { useLiveSearch, useOutsideClick, useSearchParamsParsed } from '@/hooks';
import { useUIStore } from '@/stores';
import { Issue } from '@/types';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import styles from './SearchBar.module.scss';

type SearchBarProps = {
	placeholder?: string;
};

const SearchBar = ({ placeholder }: SearchBarProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const router = useRouter();
	const { searchTerm, limit } = useSearchParamsParsed();
	const { input, setInput, results, clearResults } = useLiveSearch(
		searchTerm,
		limit
	);

	const loading = useUIStore((s) => s.loading);
	const error = useUIStore((s) => s.error);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(`?searchTerm=${input}&limit=${limit}&offset=0`);
		clearResults();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSelect = (issue: Issue) => {
		router.push(`/issue/${issue.id}`);
		setInput('');
		clearResults();
	};

	useOutsideClick(wrapperRef, clearResults);

	return (
		<div
			ref={wrapperRef}
			className={styles.searchWrapper}>
			<form onSubmit={handleSubmit}>
				{loading && <InlineSpinner />}
				{error && <p>{error}</p>}
				<input
					className={styles.searchBar}
					type='search'
					placeholder={placeholder}
					value={input}
					onChange={handleChange}
				/>
			</form>
			{input.length > 0 && (
				<LiveSearchResults
					issues={results}
					onSelect={handleSelect}
				/>
			)}
		</div>
	);
};

export default SearchBar;
