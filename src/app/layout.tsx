import { IssueReviewModal, LoadingOverlay, NavBar } from '@/components/';
import { geistMono, geistSans } from '@/styles/fonts';
import type { Metadata } from 'next';
import './globals.scss';
import styles from './layout.module.scss';

export const metadata: Metadata = {
	title: 'Ka-Splat!',
	description: 'Keep track of your comic books!',
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${styles.layout}`}>
				<LoadingOverlay />

				<header className={styles.header}>
					<NavBar />
				</header>

				<main className={styles.main}>{children}</main>

				<footer className={styles.footer}>
					&copy; {new Date().getFullYear()} Ka-Splat!
				</footer>

				<IssueReviewModal />
			</body>
		</html>
	);
};

export default RootLayout;
