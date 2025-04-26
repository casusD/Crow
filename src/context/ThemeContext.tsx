import React, { createContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextProps {
	theme: Theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem('app-theme') as Theme;
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.className = storedTheme + '-theme';
		} else {
			document.documentElement.className = 'light-theme';
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.className = newTheme + '-theme';
		localStorage.setItem('app-theme', newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
