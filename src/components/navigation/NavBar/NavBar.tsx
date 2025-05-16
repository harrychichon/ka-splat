'use client';

import {
	LiveSearchResults,
	SearchBar,
	useLiveSearch,
	useSearchParamsParsed,
} from '@/components/';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './NavBar.module.scss';

const NavBar = () => {
	const { searchTerm, limit } = useSearchParamsParsed();
	const { input, setInput, results, clearResults, clearInput } = useLiveSearch(
		searchTerm,
		limit,
		'issue'
	);

	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
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
					placeholder='Search issue...'
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
				</ul>
				{input.length > 0 && <LiveSearchResults items={results} />}
			</div>
		</nav>
	);
};

export default NavBar;
