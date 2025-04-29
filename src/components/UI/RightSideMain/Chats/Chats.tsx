import { useTranslation } from 'react-i18next';
import styles from './Chats.module.scss';

import userImg from '@/assets/user.png';

interface IChat {
	username: string;
	lastMessage: string;
	image: string;
	lastMessageTime: string;
}

const friends: IChat[] = [
	{
		username: 'Lorem, ipsum',
		lastMessage: 'dolor sit amet consectetur',
		image: userImg,
		lastMessageTime: '18:55',
	},
	{
		username: 'Lorem, ipsum',
		lastMessage: 'dolor sit amet consectetur',
		image: userImg,
		lastMessageTime: '18:55',
	},
	{
		username: 'Lorem, ipsum',
		lastMessage: 'dolor sit amet consectetur',
		image: userImg,
		lastMessageTime: '18:55',
	},
	{
		username: 'Lorem, ipsum',
		lastMessage: 'dolor sit amet consectetur',
		image: userImg,
		lastMessageTime: '18:55',
	},
	{
		username: 'Lorem, ipsum',
		lastMessage: 'dolor sit amet consectetur',
		image: userImg,
		lastMessageTime: '18:55',
	},
	{
		username: 'Lorem, ipsum',
		lastMessage: 'dolor sit amet consectetur',
		image: userImg,
		lastMessageTime: '18:55',
	},
];

function Chats() {
	const { t } = useTranslation();

	return (
		<div className={styles.chats}>
			<h1>{t('chats')}</h1>

			<div className={styles.chatList}>
				{friends.map((friend, i) => {
					return (
						<div className={styles.chat} key={i}>
							<img src={friend.image} alt='FriendImage' />

							<p>
								{friend.username}
								<span>{friend.lastMessage}</span>
							</p>

							<p className={styles.lastMessageTime}>{friend.lastMessageTime}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Chats;
