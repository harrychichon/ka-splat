import { fetchQuery } from '@/api';
import { Issue } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';

const detectSearchType = (query: string): SearchCategory => {};

const SearchBar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get('q') ?? '';
	const [input, setInput] = useState(query);
	const [searchResults, setSearchResults] = useState([{}]);

	useEffect(() => {
		setInput(query);
	}, [query]);

	const handleSearch = async (newQuery: string) => {
		router.replace(`?q=${newQuery}`);

		const results = await fetchQuery<Issue>(newQuery);
		setSearchResults(results); // local state or context or whatever
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSearch(input);
			}}>
			<input
				className={styles.SearchBar}
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBar;
