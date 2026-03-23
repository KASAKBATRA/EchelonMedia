import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/index.css';

export const metadata: Metadata = {
	title: 'Echelon Media',
	description: 'Creative digital agency focused on branding, content, and growth.',
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
