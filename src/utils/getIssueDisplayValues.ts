import { Issue } from '@/types';

export const getIssueDisplayValues = (issue: Issue) => {
	const title = issue.volume?.name ?? 'Unknown volume';
	const subTitle = `#${issue.issue_number} ${issue.name ?? ''}`;
	const imageSrc = issue.image?.medium_url ?? '/fallback.jpg';
	const imageAlt = issue.name ?? 'Issue image';
	const review = issue.review ?? null;

	const description =
		issue.description?.replace(/<[^>]+>/g, '').trim() ??
		'No description available';

	return {
		title,
		subTitle,
		imageSrc,
		imageAlt,
		review,
		description,
	};
};
