"use client";
import {Inter} from "next/font/google";
import "./globals.css";
import {AuthContextProvider} from "@/context/AuthContext";
// import GlobalState, {GiftProvider} from "./context/GiftContext";
// import GiftContext from "./context/GiftContext";
import {useState, createContext} from "react";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
	const [choosedGift, setchoosedGift] = useState("default");
	return (
		<html lang="en">
			<head>
				<title>Promise Card</title>
				<meta name="description" content="A digital promise card" />
			</head>
			<body className={inter.className}>
				{/* <GlobalState> */}
				<AuthContextProvider>{children}</AuthContextProvider>
				{/* </GlobalState> */}
			</body>
		</html>
	);
}
