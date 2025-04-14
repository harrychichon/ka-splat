export const createArrayGuard = <T>(
	isType: (val: unknown) => val is T
): ((val: unknown) => val is T[]) => {
	return (val: unknown): val is T[] => Array.isArray(val) && val.every(isType);
};
