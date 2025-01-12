"use client"; // Marks this as a Client Component in Next.js

import { useEffect, useState } from "react";
import { TooltipProvider } from "../ui/tooltip"; // Import tooltip context provider
import {
	ThemeProvider as NextThemesProvider,
	ThemeProviderProps,
} from "next-themes";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
	// State to track if the component has mounted on the client side
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// Set isClient to true once the component is mounted on the client
		setIsClient(true);
	}, []);

	// Only render the Providers component on the client side
	if (!isClient) return null;

	return (
		<NextThemesProvider {...props}>
			<TooltipProvider>{children}</TooltipProvider> {/* Add tooltip context */}
		</NextThemesProvider>
	);
};
