import userImg from '@/assets/user.png';
import { Home, MessageCircle, PlaySquare, Search } from 'lucide-react';
import styles from './Navbar.module.scss';

function Navbar() {
	return (
		<>
			<nav className={styles.navbar}>
				<Home style={{ color: 'var(--main-color)' }} size={30} />
				<Search size={30} />
				<MessageCircle size={30} />
				<PlaySquare size={30} />

				<div className={styles.profile}>
					<img src={userImg} alt='userImg' />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
