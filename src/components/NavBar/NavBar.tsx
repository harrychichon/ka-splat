'use client';

import { LiveSearchResults, SearchBar } from '@/components/search';
import { navLinks } from '@/constants';
import { useLiveSearch, useSearchParamsParsed } from '@/hooks';
import { Issue } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './NavBar.module.scss';

const NavBar = () => {
	const { searchTerm, limit } = useSearchParamsParsed();
	const { input, setInput, results, clearResults, clearInput } = useLiveSearch(
		searchTerm,
		limit
	);

	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSelect = (issue: Issue) => {
		router.push(`/issue/${issue.id}`);
		setInput('');
		clearResults();
		clearInput();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(`search/?searchTerm=${input}&limit=${limit}&offset=0`);
		clearResults();
		clearInput();
	};
	return (
		<nav className={styles.navBar}>
			<div className={styles.actionsWrapper}>
				<SearchBar
					placeholder='Search...'
					onChange={handleChange}
					value={input}
					handleSubmit={handleSubmit}
					clearResults={clearResults}
				/>

				<ul className={styles.navList}>
					{navLinks.map(({ href, label }) => (
						<li
							key={href}
							className={styles.navItem}>
							<Link
								href={href}
								className={styles.buttonLink}>
								{label}
							</Link>
						</li>
					))}
					{input.length > 0 && (
						<LiveSearchResults
							issues={results}
							onSelect={handleSelect}
						/>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
