'use client';

import Link from 'next/link';
import styles from './Pagination.module.scss'; // your own styles here

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	buildHref: (page: number) => string;
};

const Pagination = ({
	currentPage,
	totalPages,
	buildHref,
}: PaginationProps) => {
	const getPageNumbers = () => {
		const pages: (number | string)[] = [];

		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			pages.push(1);
			if (currentPage > 4) pages.push('…');

			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);

			for (let i = start; i <= end; i++) pages.push(i);

			if (currentPage < totalPages - 3) pages.push('…');
			pages.push(totalPages);
		}

		return pages;
	};

	const pages = getPageNumbers();

	return (
		<nav className={styles.pagination}>
			<ul>
				{currentPage > 1 && (
					<li>
						<Link href={buildHref(currentPage - 1)}>&laquo;</Link>
					</li>
				)}

				{pages.map((p, i) => (
					<li key={i}>
						{p === '…' ? (
							<span className={styles.ellipsis}>…</span>
						) : (
							<Link
								href={buildHref(p as number)}
								className={p === currentPage ? styles.active : ''}>
								{p}
							</Link>
						)}
					</li>
				))}

				{currentPage < totalPages && (
					<li>
						<Link href={buildHref(currentPage + 1)}>&raquo;</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Pagination;
