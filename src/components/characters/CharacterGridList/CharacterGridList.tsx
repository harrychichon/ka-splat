import { CardGridList } from '@/components';
import { Character } from '@/types';
import CharacterCard from '../CharacterCard/CharacterCard';

type CharacterGridProps = {
	characters: Character[];
	isGrid: boolean;
	title?: string;
};

const CharacterGridList = ({
	characters,
	isGrid,
	title,
}: Readonly<CharacterGridProps>) => {
	return (
		<CardGridList
			items={characters}
			isGrid={isGrid}
			title={title}
			renderItem={(character) => (
				<CharacterCard
					key={character.id}
					character={character}
				/>
			)}
			emptyMessage='No characters to display.'
		/>
	);
};

export default CharacterGridList;
