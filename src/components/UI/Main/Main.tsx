import { useMediaQuery } from 'react-responsive';
import Navbar from '../Mobile/Navbar/Navbar';
import { Posts } from '../Mobile/Posts/Posts';
import Stories from '../Mobile/Stories/Stories';
import RightSideMain from '../RightSideMain/RightSideMain';
import Sidebar from '../Sidebar/Sidebar';
import Tape from '../Tape/Tape';
import styles from './Main.module.scss';

function Main() {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	return (
		<>
			{isMobile ? (
				<div>
					<Stories />
					<Posts />
					<Navbar />
				</div>
			) : (
				<div className={styles.main}>
					<Sidebar />
					<Tape />
					<RightSideMain />
				</div>
			)}
			{/* <div className={styles.main}>
				<Sidebar />
				<Tape />
				<RightSideMain />
			</div> */}
		</>
	);
}

export default Main;
