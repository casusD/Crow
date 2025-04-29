import logo from '@/assets/logo.svg';
import { IUsers } from '@/types/UserData';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import styles from './SignIn.module.scss';

function SignIn() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [fullName, setFullName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function register() {
		const users: IUsers[] = JSON.parse(localStorage.getItem('users') ?? '[]');

		const newUser: IUsers = {
			fullName: fullName,
			username: username,
			email: email,
			password: password,
		};

		const updateUsers = [...users, newUser];

		localStorage.setItem('users', JSON.stringify(updateUsers));
		localStorage.setItem('currentUser', JSON.stringify(newUser));

		navigate('/home', { replace: true });
	}

	return (
		<>
			<section className={styles.register}>
				<img src={logo} alt='logo' />
				<h1>{t('register.title')}</h1>
				<div className={styles.logForm}>
					<form action='#'>
						<input
							type='text'
							name='fullName'
							placeholder={t('register.fullName')}
							value={fullName}
							onChange={e => setFullName(e.target.value)}
						/>
						<br />
						<input
							type='text'
							name='username'
							placeholder={t('register.username')}
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
						<br />
						<input
							type='email'
							name='email'
							placeholder={t('register.email')}
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<br />
						<input
							type='password'
							name='password'
							placeholder={t('register.password')}
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<Button type='button' onClick={register}>
							{t('register.buttonText')}
						</Button>
					</form>

					<p>{t('register.haveAccount')}</p>

					<Link to={'/login'}>
						<h3 style={{ color: 'var(--text-color)' }}>
							{t('register.login')}
						</h3>
					</Link>
				</div>
			</section>
		</>
	);
}

export default SignIn;
