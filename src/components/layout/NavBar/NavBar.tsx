import { navLinks } from '@/constants';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<ul className={styles.navList}>
				{navLinks.map(({ href, label }) => (
					<li
						key={href}
						className='li'>
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
