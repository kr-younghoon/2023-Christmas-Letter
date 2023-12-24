import BtnNextTo from '../assets/svg/btn-next-to';
import styles from './css/Home.module.css';
// import tree from '../../src/assets/img/Frame 273.png';
import ShareButton from '../Components/Button/ShareButton';
import { useEffect, useState } from 'react';
import db from '../firebase';
// import SeatButton from '../Components/Button/SeatButton';
import Modal from '../Components/Modal/Modal';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Home() {
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'seats'));
                const seatData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setSeats(seatData);
                console.log(seatData);
            } catch (error) {
                console.error('Error Fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSeatClick = (seatData) => {
        // 선택된 자리가 매칭된 자리인지 확인
        const matchingSeat = seats.find((seat) => seat.seatNumber === seatData);

        // 매칭된 자리인 경우에만 모달을 열고, 그렇지 않으면 아무 작업도 수행하지 않음
        if (matchingSeat) {
            setSelectedSeat(matchingSeat);
        }
    };

    const handleCloseModal = () => {
        setSelectedSeat(null);
    };

    const seatNumbers = Array.from({ length: 140 }, (_, index) => index + 1);

    return (
        <>
            <div className={styles.bg}>
                <div className={styles.home_flex_line}>
                    <div className={styles.home_title}>
                        <p>Merry Christmas!</p>
                    </div>
                    <div className={styles.tree_img}>
                        <div>{/* <img src={tree} alt="트리" /> */}</div>
                        <div className={styles.seatContainer}>
                            {seatNumbers.map((seatNumber) => {
                                // 해당 좌석에 매칭된 데이터 찾기
                                const matchingSeat = seats.find(
                                    (seat) => seat.seatNumber === seatNumber
                                );

                                return (
                                    <button
                                        key={seatNumber}
                                        className={styles.seatButton}
                                        onClick={() =>
                                            handleSeatClick(seatNumber)
                                        }
                                        disabled={!matchingSeat} // 매칭되지 않은 좌석은 비활성화
                                    >
                                        {matchingSeat ? (
                                            <img
                                                className={styles.setEmoji}
                                                src={matchingSeat.icon}
                                                alt="이모지"
                                            />
                                        ) : null}
                                        {/* {`${seatNumber}`} */}
                                    </button>
                                );
                            })}
                        </div>
                        <Modal
                            seatData={selectedSeat}
                            onClose={handleCloseModal}
                        />
                    </div>
                    <div className={styles.btn_line}>
                        <Link to="/2">
                            <BtnNextTo />
                        </Link>
                        <ShareButton />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
