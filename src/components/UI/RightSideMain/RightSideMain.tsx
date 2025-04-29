import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Chats from './Chats/Chats';
import Profile from './Profile/Profile';

import styles from './RightSideMain.module.scss';

function RightSideMain() {
	return (
		<section className={styles.rightSideMain}>
			<ThemeSwitcher />
			<Profile />
			<Chats />
		</section>
	);
}

export default RightSideMain;
