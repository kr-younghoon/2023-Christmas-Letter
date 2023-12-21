import PNG404 from '../../assets/img/404.png';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <>
            <div className={styles.notfoundstyle}>
                <img src={PNG404} alt="404" />
                <h1>문제가 발생했어요🥲</h1>
                <h1>
                    <a href="/">메인 페이지로 이동하기</a>
                </h1>
            </div>
        </>
    );
}

export default NotFound;
