type ToggleIcon = {
	iconType: 'Toggle';
	srcActive: string;
	srcInactive: string;
	altActive: string;
	altInactive: string;
};

type StaticIcon = {
	iconType: 'Static';
	srcActive: string;
	altActive: string;
};

type IconMapEntry = ToggleIcon | StaticIcon;

export type IconType = 'Own' | 'Fave' | 'Flip';

export const iconMap: Record<IconType, IconMapEntry> = {
	Own: {
		iconType: 'Toggle',
		srcActive: '/icons/read-checked.png',
		srcInactive: '/icons/read-unchecked.png',
		altActive: 'Owned',
		altInactive: 'Not Owned',
	},
	Fave: {
		iconType: 'Toggle',
		srcActive: '/icons/fave-checked.png',
		srcInactive: '/icons/fave-unchecked.png',
		altActive: 'Favourited',
		altInactive: 'Not Favourited',
	},
	Flip: {
		iconType: 'Static',
		srcActive: '/icons/flip.png',
		altActive: 'Flip',
	},
};
