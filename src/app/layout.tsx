import { IssueReviewModal, LoadingOverlay, NavBar } from '@/components/';
import { Header, Main } from '@/components/layout';
import Footer from '@/components/layout/Footer/Footer';
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
				<Header>
					<NavBar />
				</Header>
				<Main>{children}</Main>

				<Footer>&copy; {new Date().getFullYear()} Ka-Splat!</Footer>
				<IssueReviewModal />
			</body>
		</html>
	);
};

export default RootLayout;
