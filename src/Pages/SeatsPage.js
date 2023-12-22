import styles from './css/SeatsPage.module.css';
import BtnBackspace from '../assets/svg/BtnBackSpace';
import Jehovah from '../assets/img/Jehovah';
import { useState } from 'react';

function SeatsPage() {
    const [seats, setSeats] = useState(Array(140).fill(false));
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seatNumber) => {
        // TO DO : 선택된 자리 업데이트
        setSelectedSeats(seatNumber);

        console.log(seatNumber);
    };

    const handleSubmit = async () => {
        console.log('Selected Seats:', selectedSeats);

        // Firebase 업로드
    };

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
                            장식을 어디에 놓을까?
                        </p>
                        <p className={styles.title_sub}>위치를 선택해주세요.</p>
                    </div>
                </div>
                <div>
                    <div className={styles.selectBox}>
                        {/* <SelectBox /> */}
                        <div className={styles.selectBG}>
                            <div className={styles.selectBox_Btn}>
                                {/* 10 * 14 */}
                                <div className="seat-container">
                                    {seats.map((isOccupied, index) => (
                                        <button
                                            key={index}
                                            className={styles.seatButton}
                                            disabled={isOccupied}
                                            onClick={() =>
                                                handleSeatClick(index + 1)
                                            }
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.nextBtn} onClick={handleSubmit}>
                    <a href="/">완료</a>
                </button>
            </div>
        </>
    );
}

export default SeatsPage;
