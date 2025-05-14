import { SearchBar } from '@/components/search';
import { navLinks } from '@/constants';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<SearchBar placeholder='Search...' />
			<ul className={styles.navList}>
				{navLinks.map(({ href, label }) => (
					<li
						key={href}
						className={styles.navItem}>
						<Link
							href={href}
							className={styles.buttonLink}>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
