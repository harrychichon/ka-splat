'use client';
import { Button, InputText } from '@/components';
import { useRouter } from 'next/navigation';
import { v4 as uuid } from 'uuid';
import styles from './NavBar.module.scss';

type NavBarProps = {
	buttonText: string[];
	searchBar: boolean;
	inputPlaceholder: string;
	logo?: string;
};

const NavBar = ({
	logo,
	buttonText,
	searchBar,
	inputPlaceholder,
}: Readonly<NavBarProps>) => {
	const router = useRouter();

	const buttons = buttonText.map((index) => (
		<Button
			key={uuid()}
			icon={false}
			text={index}
			onClick={() => router.push(`/${index}`)}
		/>
	));

	return (
		<nav className={styles.NavBar}>
			{logo}
			{buttons}
			{searchBar ? (
				<InputText
					placeholder={inputPlaceholder}
					onChange={() => console.log('‼️Add functionality')}
				/>
			) : null}
		</nav>
	);
};

export default NavBar;
