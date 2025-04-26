import styles from './Button.module.scss';

interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, onClick, type }: Props) {
	return (
		<button type={type} onClick={onClick} className={styles.btn}>
			{children}
		</button>
	);
}
