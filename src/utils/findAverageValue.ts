export const findAverage = <T>(
	arr: T[],
	getValue: (item: T) => number | null | undefined
) => {
	let total = 0;
	let count = 0;

	arr.forEach((item) => {
		const val = getValue(item);
		if (typeof val === 'number') {
			total += val;
			count++;
		}
	});

	return count > 0 ? total / count : 0;
};
