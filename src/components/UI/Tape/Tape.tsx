import imageIcon from '@/assets/imageIcon.svg';
import userImg from '@/assets/user.png';
import videoIcon from '@/assets/videoIcon.svg';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Tape.module.scss';

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

function Tape() {
	const { t } = useTranslation();

	return (
		<>
			<main className={styles.tape}>
				<article className={styles.stories}>
					<button type='button' className={styles.btnStories}>
						<Plus />
					</button>

					{usersStories.map((user, i) => {
						return <img key={i} src={user} alt='User stories' />;
					})}
				</article>

				<section className={styles.posts}>
					<button className={styles.createPostsBtn}>
						<Plus />
						{t('tape.btnText')}

						<div>
							<img src={imageIcon} alt='imageIcon' />
							<img src={videoIcon} alt='videoIcon' />
						</div>
					</button>
				</section>
			</main>
		</>
	);
}

export default Tape;
