import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';

const ThemeSwitcher: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button onClick={toggleTheme}>
			Переключить тему ({theme === 'light' ? '🌞' : '🌙'})
		</button>
	);
};

export default ThemeSwitcher;
