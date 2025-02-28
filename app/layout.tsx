import "./globals.css";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="w-full bg-neutral-800 h-48"></header>
				<Sidebar></Sidebar>
				{children}
			</body>
		</html>
	);
}
