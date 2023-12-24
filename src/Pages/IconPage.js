// src/Pages/IconPage.js

import { useState } from 'react';
import styles from './css/IconPage.module.css';
import RadioBoxBtn from '../Components/Button/RadioBoxBtn';
import BtnBackspace from '../assets/svg/BtnBackSpace';
import Jehovah from '../assets/img/Jehovah';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function IconPage() {
    const emojiList = Array.from(
        { length: 348 },
        (_, index) => `emoji/emoji${index + 1}.png`
    );
    const dispatch = useDispatch();

    const [selectEmoji, setSelectEmoji] = useState(emojiList[0]);
    const [disabled, setDisabled] = useState(false);

    const handleRadioClick = (value, e) => {
        setSelectEmoji(value);
        setDisabled(true);
        console.log(`${value}`);
    };

    const handleSave = () => {
        // 이모지를 Redux 스토어에 저장
        dispatch({ type: 'SET_PAGE2_DATA', payload: { selectEmoji } });
    };
    const page2Data = useSelector((state) => state.page2Data);

    console.log('page2Data:', page2Data);

    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <Link to="/">
                        <BtnBackspace />
                    </Link>
                </div>
                <div className={styles.pageInline}>
                    <div className={styles.pageMidLine}>
                        <Jehovah />
                    </div>
                    <div className={styles.title}>
                        <p className={styles.title_head}>어떤 장식이 좋을까?</p>
                        <p className={styles.title_sub}>장식을 골라주세요.</p>
                    </div>
                </div>
                <div>
                    <div className={styles.selectBox}>
                        {/* <SelectBox /> */}
                        <div className={styles.selectBG}>
                            <div className={styles.selectBox_Btn}>
                                {emojiList.map((emoji, index) => (
                                    <RadioBoxBtn
                                        key={index}
                                        name="emoji"
                                        value={emoji}
                                        emoji={
                                            <img
                                                src={`${process.env.PUBLIC_URL}/${emoji}`}
                                                alt={`emoji${index + 1}`}
                                            />
                                        }
                                        isSelected={selectEmoji === emoji}
                                        onChange={() => handleRadioClick(emoji)}
                                        // 테스트 코드
                                        disabled={disabled}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/3">
                    <button className={styles.nextBtn} onClick={handleSave}>
                        다음으로
                    </button>
                </Link>
            </div>
        </>
    );
}

export default IconPage;
