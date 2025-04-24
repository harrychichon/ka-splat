'use client';

import { searchQuery } from '@/api';
import { useSearchStore } from '@/stores';
import { Issue } from '@/types';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get('query') ?? '';
	const [input, setInput] = useState(() => query);

	const [isLoading, setIsLoading] = useState(false);
	const [liveResults, setLiveResults] = useState<Issue[]>([]);

	const setActiveIssues = useSearchStore((s) => s.setActiveIssues);

	const currentInputRef = useRef('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (input.trim() === '' || input === currentInputRef.current) return;

			currentInputRef.current = input;

			searchQuery<Issue>(input).then((results) => {
				const trimmed = results.slice(0, 10); // still limit to 10 for now
				setLiveResults(trimmed);
			});
		}, 300);
		setIsLoading(true);
		return () => clearTimeout(timeout);
	}, [input]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`?query=${input}`);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSelect = (issue: Issue) => {
		setActiveIssues([issue]);
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
									alt={issue.name || 'Issue thumbnail'}
									width={40}
									height={60}
									style={{ borderRadius: '4px', objectFit: 'cover' }}
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
