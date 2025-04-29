import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';

import { Moon, Sun } from 'lucide-react';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<>
			<div className={styles.themeSwitcher} onClick={toggleTheme}>
				{/* Переключить тему ({theme === 'light' ? '🌞' : '🌙'}) */}
				<div
					className={styles.darkMode}
					style={
						theme === 'dark'
							? { backgroundColor: 'var(--themeSwitcher-color)' }
							: { backgroundColor: 'transparent' }
					}
				>
					<Moon />
				</div>
				<div
					className={styles.lightMode}
					style={
						theme === 'light'
							? { backgroundColor: 'var(--themeSwitcher-color)' }
							: { backgroundColor: 'transparent' }
					}
				>
					<Sun />
				</div>
			</div>
		</>
	);
};

export default ThemeSwitcher;
