const filterIssues = (query: string, results: any[]): any[] => {
	const isIssueNumber = /^#?\d+$/.test(query);
	const lowerQuery = query.toLowerCase();

	return results.filter((item) => {
		if (item.resource_type !== 'issue') return false;

		if (isIssueNumber && item.issue_number === query.replace('#', '')) {
			return true;
		}

		if (item.name?.toLowerCase().includes(lowerQuery)) return true;
		if (item.volume?.name?.toLowerCase().includes(lowerQuery)) return true;
		if (
			item.character_credits?.some((char: any) =>
				char.name.toLowerCase().includes(lowerQuery)
			)
		)
			return true;
		if (
			item.story_arc_credits?.some((arc: any) =>
				arc.name.toLowerCase().includes(lowerQuery)
			)
		)
			return true;
		if (item.publisher?.name?.toLowerCase().includes(lowerQuery)) return true;

		return false;
	});
};

export default filterIssues;
