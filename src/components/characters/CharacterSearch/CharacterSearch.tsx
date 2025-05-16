import { useCharactersStore } from '@/stores';
import { Character } from '@/types';

import {
	LiveSearchResults,
	SearchBar,
	useLiveSearch,
	useSearchParamsParsed,
} from '@/components/search';
import styles from './CharacterSearch.module.scss';

const CharacterSearch = () => {
	const { toggleFavouriteCharacter } = useCharactersStore();
	const { searchTerm, limit } = useSearchParamsParsed();
	const { input, setInput, results, clearResults, clearInput } = useLiveSearch(
		searchTerm,
		limit,
		'character'
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSelect = (character: Character) => {
		console.log('✅ character selected', character);
		toggleFavouriteCharacter(character);

		// Defer clearing state so click event resolves
		requestAnimationFrame(() => {
			clearResults();
			clearInput();
		});
		console.log('✅ handleSelect called with', character.name);
	};
	return (
		<section className={styles.container}>
			<SearchBar
				placeholder='Search character...'
				onChange={handleChange}
				value={input}
				clearResults={clearResults}
			/>
			{input.length > 0 && (
				<LiveSearchResults
					items={results}
					onSelect={handleSelect}
				/>
			)}
		</section>
	);
};

export default CharacterSearch;
