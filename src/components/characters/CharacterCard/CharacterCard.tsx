import { IconButton } from '@/components/ui';
import { useCharactersStore } from '@/stores';
import { Character } from '@/types';
import styles from './CharacterCard.module.scss';

type CharacterCardProps = {
	character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
	const { toggleFavouriteCharacter, isFavourite } = useCharactersStore();
	const isFave = isFavourite(character.id);

	return (
		<div
			className={styles.card}
			style={{ backgroundImage: `url(${character.image?.thumb_url})` }}>
			<div className={styles.overlay}>
				<div className={styles.text}>
					<h3>{character.name.toUpperCase()}</h3>
					{character.deck && <p>{character.deck}</p>}
				</div>
				<IconButton
					type='Fave'
					className='center fave'
					active={isFave}
					onClick={() => toggleFavouriteCharacter(character)}
					width={48}
					height={48}
				/>
			</div>
		</div>
	);
};

export default CharacterCard;
