import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Kanban task management web app",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={plus_Jakarta_Sans.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
