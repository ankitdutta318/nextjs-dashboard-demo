import Layout from "@/layout";
import Head from "next/head";
import Dashboard from "./dashboard";

function Home() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Dashboard />
		</>
	);
}

Home.Layout = Layout;

export default Home;
