"use client"; // Marks this as a Client Component in Next.js

import { TooltipProvider } from "@/components/ui/tooltip"; // Import tooltip context provider
import {
	ThemeProvider as NextThemesProvider,
	ThemeProviderProps,
} from "next-themes";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
	return (
		<NextThemesProvider {...props}>
			{" "}
			<TooltipProvider>{children}</TooltipProvider> {/* Add tooltip context */}
		</NextThemesProvider>
	);
};
