import logo from '@/assets/logo.svg';
import { Bell, House, MessageCircle, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

function Sidebar() {
	const { t } = useTranslation();

	return (
		<>
			<aside className={styles.sidebar}>
				<img src={logo} alt='Logo' />

				<div className={styles.nav}>
					<Link to={'/home'}>
						<House /> <span>{t('sidebar.main')}</span>
					</Link>
					<Link to={'/home'}>
						<Search /> {t('sidebar.search')}
					</Link>
					<Link to={'/home'}>
						<MessageCircle /> {t('sidebar.message')}
					</Link>
					<Link to={'/home'}>
						{' '}
						<Bell />
						{t('sidebar.notifications')}
					</Link>
				</div>
			</aside>
		</>
	);
}

export default Sidebar;
