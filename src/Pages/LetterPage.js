// src/Pages/LetterPage.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Jehovah from '../assets/img/Jehovah';
import BtnBackspace from '../assets/svg/BtnBackSpace';
import styles from './css/LetterPage.module.css';
import { Link } from 'react-router-dom';

function LetterPage() {
    const dispatch = useDispatch();

    // React 상태를 사용하여 입력된 값을 관리합니다.
    const [writerName, setWriterName] = useState('');
    const [letterContent, setLetterContent] = useState('');

    // 저장 버튼이 클릭될 때 실행되는 함수
    const handleSave = () => {
        // Redux 스토어에 페이지 3의 데이터를 저장합니다.
        console.log(
            'writerName : ',
            writerName,
            ' letterContent : ',
            letterContent
        );
        dispatch({
            type: 'SET_PAGE3_DATA',
            payload: { writerName, letterContent },
        });
    };

    const isValid = writerName.trim() !== '' && letterContent.trim() !== '';

    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <Link to="/2">
                        <BtnBackspace />
                    </Link>
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
                                        value={writerName}
                                        onChange={(e) =>
                                            setWriterName(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className={styles.page3_input_comp}>
                                    <p>내용</p>
                                    <textarea
                                        type="text"
                                        placeholder="편지 내용"
                                        value={letterContent}
                                        onChange={(e) =>
                                            setLetterContent(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isValid ? (
                    <Link to="/4">
                        <button className={styles.nextBtn} onClick={handleSave}>
                            다음으로
                        </button>
                    </Link>
                ) : (
                    <div className={styles.inputWarning}>
                        <div>다음으로</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default LetterPage;
