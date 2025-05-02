import mountainImg from '@/assets/mountains.png';
import userImg from '@/assets/user.png';
import { Bookmark, Ellipsis, Heart, Link, MessageCircle } from 'lucide-react';
import styles from './Posts.module.scss';

export function Posts() {
	return (
		<article className={styles.posts}>
			<div className={styles.more}>
				<Ellipsis size={20} />
			</div>

			<div className={styles.user}>
				<img src={userImg} alt='userImg' />
				<p>
					Username <span>time</span>
				</p>
			</div>

			<img className={styles.postImage} src={mountainImg} alt='mountainImg' />

			<div className={styles.react}>
				<div>
					<Heart /> 123
					<MessageCircle /> 23
				</div>
				<div>
					<Bookmark />
					<Link />
				</div>
			</div>

			<div className={styles.postDescription}>
				<h3>Lorem ipsum dolor sit amet consectetur</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					distinctio suscipit eius obcaecati? Ratione quaerat ut consequuntur
					vitae a numquam corrupti doloremque ipsam ea quos possimus optio
					iusto, veniam maxime.
				</p>
			</div>
		</article>
	);
}
