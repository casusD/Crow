import logo from '@/assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import styles from './ForgotPassword.module.scss';

function ForgotPassword() {
	const { t } = useTranslation();

	return (
		<>
			<section className={styles.forgotPassword}>
				<img src={logo} alt='logo' />
				<h1>{t('forgotPassword.title')}</h1>
				<p>{t('forgotPassword.subtitle')}</p>
				<div className={styles.logForm}>
					<form action='#'>
						<input
							type='email'
							name='email'
							placeholder={t('forgotPassword.email')}
						/>

						<Button>{t('forgotPassword.buttonText')}</Button>
					</form>

					<p>{t('forgotPassword.rememberPassword')}</p>

					<Link to={'/login'}>
						<h3 style={{ color: 'var(--text-color)' }}>
							{t('forgotPassword.login')}
						</h3>
					</Link>
				</div>
			</section>
		</>
	);
}

export default ForgotPassword;
