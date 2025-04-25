'use client';

import { searchQuery } from '@/api';
import useSearchParamsParsed from '@/hooks/useSearchParamsParsed';
import { Issue } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
	const router = useRouter();
	const { query, limit } = useSearchParamsParsed();

	const [input, setInput] = useState(() => query);
	const [liveResults, setLiveResults] = useState<Issue[]>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!input) {
				setLiveResults([]);
				return;
			}

			searchQuery<Issue>(input, {
				resources: ['issue'],
				limit: limit,
			})
				.then(setLiveResults)
				.catch(console.error);
		}, 300);

		return () => clearTimeout(timeout);
	}, [input, limit]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push(`?query=${input}`);
		setLiveResults([]);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSelect = (issue: Issue) => {
		router.push(`/issue/${issue.id}`);
		setInput('');
		setLiveResults([]);
	};

	const renderLiveResults = () => {
		if (input.length > 0 && liveResults.length > 0) {
			return (
				<ul className={styles.Dropdown}>
					{liveResults.map((issue) => (
						<li
							key={issue.id}
							onClick={() => handleSelect(issue)}>
							{issue.image?.thumb_url && (
								<Image
									src={issue.image.thumb_url}
									alt={issue.name + ' alt'}
									width={50}
									height={75}
								/>
							)}
							<span>{issue.volume?.name}</span>
							<span>{issue.name}</span>
							<span>#{issue.issue_number}</span>
						</li>
					))}
				</ul>
			);
		}
		return null;
	};

	return (
		<div className={styles.SearchWrapper}>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.SearchBar}
					value={input}
					onChange={handleChange}
				/>
			</form>
			{renderLiveResults()}
		</div>
	);
};

export default SearchBar;
