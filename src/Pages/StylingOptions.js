import { useState } from 'react';
import styles from './css/StylingOptions.module.css';
import RadioBoxBtn from '../Components/Button/RadioBoxBtn';

function StylingOptions() {
    const emojiList = Array.from(
        { length: 348 },
        (_, index) => `emoji/emoji${index + 1}.png`
    );
    const [selectEmoji, setSelectEmoji] = useState(emojiList[0]);

    const handleRadioClick = (value) => {
        setSelectEmoji(value);
    };

    return (
        <>
            <a href="/">뒤로가기</a>
            <button>(svg로 대체할 예정)</button>
            <p>어떤 장식이 좋을까?</p>

            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">😀</label>

            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">🥲</label>

            <br />
            <button>
                <a href="/3">다음으로</a>
            </button>
            <hr />
            <div>
                <p>test</p>
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
                                    onClick={() => handleRadioClick(emoji)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <button>다음으로</button>
            </div>
        </>
    );
}

export default StylingOptions;
