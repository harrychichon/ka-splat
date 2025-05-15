'use client';

import { useState } from 'react';

const useCardFlip = () => {
	const [flipped, setFlipped] = useState(false);
	const toggleFlip = () => setFlipped((prev) => !prev);
	return { flipped, toggleFlip };
};

export default useCardFlip;
