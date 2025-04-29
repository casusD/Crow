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
						<div className={styles.active}>
							<House /> <span>{t('sidebar.main')}</span>
						</div>
					</Link>
					<Link to={'/home'}>
						<div>
							<Search /> {t('sidebar.search')}
						</div>
					</Link>
					<Link to={'/home'}>
						<div>
							<MessageCircle /> {t('sidebar.message')}
						</div>
					</Link>
					<Link to={'/home'}>
						<div>
							<Bell />
						</div>
						{t('sidebar.notifications')}
					</Link>
				</div>
			</aside>
		</>
	);
}

export default Sidebar;
