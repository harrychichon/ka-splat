import { IssueReviewModal, LoadingOverlay, NavBar } from '@/components/';
import { geistMono, geistSans } from '@/styles/fonts';
import type { Metadata } from 'next';
import './globals.scss';

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
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<LoadingOverlay />
				<NavBar />
				<IssueReviewModal />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
