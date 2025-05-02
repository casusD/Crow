import crow from '@/assets/CROW.svg';
import userImg from '@/assets/user.png';
import { Bell, ChevronDown, Plus, PlusCircleIcon } from 'lucide-react';
import styles from './Stories.module.scss';

const usersStories: string[] = [
	userImg,
	userImg,
	userImg,
	userImg,
	userImg,
	userImg,
	userImg,
	userImg,
];

function Stories() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.crow}>
					<img src={crow} alt='crow' />
					<ChevronDown style={{ color: 'var(--main-color)' }} />
				</div>
				<div className={styles.addStory}>
					<PlusCircleIcon size={30} />
					<Bell size={30} />
				</div>
			</header>

			<article className={styles.stories}>
				<button type='button' className={styles.btnStories}>
					<Plus />
				</button>

				{usersStories.map((user, i) => {
					return <img key={i} src={user} alt='User stories' />;
				})}
			</article>
		</>
	);
}

export default Stories;
