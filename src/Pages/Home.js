import BtnNextTo from '../assets/svg/btn-next-to';
import styles from './css/Home.module.css';
import tree from '../../src/assets/img/Frame 273.png';
import ShareButton from '../Components/Button/ShareButton';

function Home() {
    return (
        <>
            <div className={styles.bg}>
                <div className={styles.home_flex_line}>
                    <div className={styles.home_title}>
                        <p>Merry Christmas!</p>
                    </div>
                    <div className={styles.tree_img}>
                        <img src={tree} alt="트리" />
                    </div>
                    <div className={styles.btn_line}>
                        <a href="/2">
                            <BtnNextTo />
                        </a>
                        <ShareButton />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
