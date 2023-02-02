import "@/styles/globals.css";
import type { AppProps } from "next/app";

type ComponentWithLayout = AppProps & {
	Component: AppProps["Component"] & {
		Layout?: React.ComponentType;
	};
};

const EmptyLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function App({ Component, pageProps }: ComponentWithLayout) {
	const Layout = Component.Layout ? Component.Layout : EmptyLayout;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
