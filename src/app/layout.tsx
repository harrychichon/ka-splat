import {
	Footer,
	Header,
	IssueReviewModal,
	LoadingOverlay,
	NavBar,
} from '@/components/';
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
			<body>
				<LoadingOverlay />
				<Header>
					<NavBar />
				</Header>
				{children}
				<Footer>&copy; {new Date().getFullYear()} Ka-Splat!</Footer>
				<IssueReviewModal />
			</body>
		</html>
	);
};

export default RootLayout;
