import Sidebar from '../Sidebar/Sidebar';
import Tape from '../Tape/Tape';
import styles from './Main.module.scss';

function Main() {
	return (
		<>
			<div className={styles.main}>
				<Sidebar />
				<Tape />
			</div>
		</>
	);
}

export default Main;
