import { Main } from '@/components/';

const SearchLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <Main>{children}</Main>;
};

export default SearchLayout;
