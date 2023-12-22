import Jehovah from '../assets/img/Jehovah';
import BtnBackspace from '../assets/svg/BtnBackSpace';
import styles from './css/LetterPage.module.css';

function LetterPage() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <a href="/">
                        <BtnBackspace />
                    </a>
                </div>
                <div className={styles.pageInline}>
                    <div className={styles.pageMidLine}>
                        <Jehovah />
                    </div>
                    <div className={styles.title}>
                        <p className={styles.title_head}>
                            크리스마스 편지를 <br /> 써보아요!
                        </p>
                    </div>
                </div>
                <div>
                    <div className={styles.selectBox}>
                        {/* <SelectBox /> */}
                        <div className={styles.selectBG}>
                            <div className={styles.selectBox_Btn}>
                                <div className={styles.page3_input_comp}>
                                    <p>작성자 이름</p>
                                    <input
                                        type="text"
                                        placeholder="작성자 이름"
                                    ></input>
                                </div>
                                <div className={styles.page3_input_comp}>
                                    <p>내용</p>
                                    <textarea
                                        type="text"
                                        placeholder="편지 내용"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.nextBtn}>
                    <a href="/3">다음으로</a>
                </button>
            </div>
        </>
    );
}

export default LetterPage;
