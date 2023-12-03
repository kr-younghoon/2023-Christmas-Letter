import RadioBoxBtn from '../Components/Button/RadioBoxBtn';
import SelectBox from '../assets/svg/SelectBox';
import styles from './css/StylingOptions.module.css';

function StylingOptions() {
    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;

        // 선택된 상태에 따라 원하는 동작을 수행할 수 있습니다.
        console.log(`Selected Option: ${selectedValue}`);
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
                    <div className={styles.selectBox_Btn}>
                        <RadioBoxBtn
                            id="option1"
                            emoge="🥲"
                            onChange={handleOptionChange}
                        />
                        <RadioBoxBtn
                            id="option1"
                            emoge="🥲"
                            onChange={handleOptionChange}
                        />
                        <RadioBoxBtn
                            id="option1"
                            emoge="🥲"
                            onChange={handleOptionChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default StylingOptions;
