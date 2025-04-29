import logo from '@/assets/logo.svg';
import { IUsers } from '@/types/UserData';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import styles from './Login.module.scss';

interface ILogin {
	isAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ isAuthenticated }: ILogin) {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string | null>('');

	function checkUser() {
		const users: IUsers[] = JSON.parse(localStorage.getItem('users') ?? '[]');

		const user = users.find(u => u.email === email);

		if (!user) {
			setError(t('checkUserError.emailError'));
			return;
		}

		if (user.password !== password) {
			setError(t('checkUserError.passwordError'));
			return;
		}

		localStorage.setItem('currentUser', JSON.stringify(user));

		localStorage.setItem('isAuth', 'true');
		isAuthenticated(true);
		navigate('/home', { replace: true });
	}

	return (
		<>
			<section className={styles.login}>
				<img src={logo} alt='logo' />
				<div className={styles.logForm}>
					{error ? <p className={styles.error}>{error}</p> : null}
					<form action='#'>
						<input
							type='text'
							name='email'
							placeholder={t('login.emailForLogin')}
							value={email}
							onChange={e => {
								setEmail(e.target.value);
								setError(null);
							}}
						/>
						<br />
						<input
							type='password'
							name='password'
							placeholder={t('login.password')}
							value={password}
							onChange={e => {
								setPassword(e.target.value);
								setError(null);
							}}
						/>
						<Button type='button' onClick={checkUser}>
							{t('login.buttonText')}
						</Button>
					</form>

					<Link to={'/forgotPassword'}>
						<h3 className={styles.forgotPassword}>
							{t('login.forgotPassword')}
						</h3>
					</Link>

					<p>{t('login.dontHaveAccount')}</p>

					<Link to={'/register'}>
						<h3 style={{ color: 'var(--main-color)' }}>
							{t('login.register')}
						</h3>
					</Link>
				</div>
			</section>
		</>
	);
}

export default Login;
