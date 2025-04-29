import userImg from '@/assets/user.png';
import { IUsers } from '@/types/UserData';
import { useTranslation } from 'react-i18next';
import styles from './Profile.module.scss';
// import { IUsers } from '@/types/UserData';

export function Profile() {
	const { t } = useTranslation();

	const user: IUsers = JSON.parse(localStorage.getItem('currentUser') ?? '');

	return (
		<>
			<section className={styles.profile}>
				<img src={userImg} alt='userImg' />
				<h2>{user.username}</h2>

				<div className={styles.follows}>
					<p>
						{t('profile.publications')} <br /> 123
					</p>
					<p>
						{t('profile.subscribers')} <br /> 123
					</p>
					<p>
						{t('profile.subscriptions')} <br /> 321
					</p>
				</div>
			</section>
		</>
	);
}

export default Profile;
