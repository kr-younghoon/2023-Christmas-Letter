import styles from './css/SeatsPage.module.css';
import BtnBackspace from '../assets/svg/BtnBackSpace';
import Jehovah from '../assets/img/Jehovah';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore'; // Firestore 모듈 가져오기

import db from '../firebase';
import { Link } from 'react-router-dom';

function SeatsPage() {
    const [seats, setSeats] = useState(Array(140).fill(false));
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [occupiedSeats, setOccupiedSeats] = useState([]); // 이미 선택된 좌석 정보 추가

    const page2Data = useSelector((state) => state.page2Data);
    const page3Data = useSelector((state) => state.page3Data);

    console.log('page2Data:', page2Data);
    console.log('page3Data:', page3Data);

    useEffect(() => {
        const fetchOccupiedSeats = async () => {
            try {
                const q = query(
                    collection(db, 'seats'),
                    where('seatNumber', '!=', null)
                );
                const querySnapshot = await getDocs(q);
                const occupiedSeatsData = [];
                querySnapshot.forEach((doc) => {
                    occupiedSeatsData.push(doc.data().seatNumber);
                });
                setOccupiedSeats(occupiedSeatsData);
                console.log('occupiedSeats : ', occupiedSeats);
            } catch (error) {
                console.error('데이터 불러오기 중 오류:', error.message);
            }
        };
        fetchOccupiedSeats();
        // eslint-disable-next-line
    }, []);

    const handleSeatClick = (seatNumber) => {
        setSelectedSeat(seatNumber);

        setSeats((prevSeats) => {
            const newSeats = Array(140).fill(false);
            newSeats[seatNumber - 1] = true; // seatNumber가 1부터 시작한다고 가정
            return newSeats;
        });

        console.log('Selected seat:', seatNumber);
    };

    const handleSubmit = async () => {
        console.log('try');
        try {
            console.log('start');
            // Firestore 모듈을 사용하여 Firestore 참조 가져오기
            // 페이지 2, 3에서 Redux로 저장한 데이터와 현재 페이지의 데이터를 합치기
            const data = {
                content: page3Data.letterContent, // 작성 내용 (필요에 따라 수정)
                icon: page2Data.selectEmoji, // 페이지 2에서 선택한 아이콘
                name: page3Data.writerName, // 페이지 3에서 입력한 작성자 이름
                seatNumber: selectedSeat, // 선택한 좌석 번호
                // 기타 관련 데이터 포함
            };
            console.log(data);
            // Firestore에 데이터 추가
            const docRef = await addDoc(collection(db, 'seats'), data);
            console.log(
                'Data saved successfully to Firestore with ID: ',
                docRef.id
            );

            // 선택한 자리 초기화
            setSelectedSeat(null);
            // 로컬 상태 초기화
            setSeats(Array(140).fill(false));

            console.log('Firestore에 데이터 성공적으로 저장됨!');
        } catch (error) {
            console.error('데이터 저장 중 오류:', error.message);
        }
    };

    const isValid =
        selectedSeat !== null &&
        page3Data.writerName !== '' &&
        page2Data.selectEmoji !== '' &&
        page3Data.letterContent !== '';

    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <Link to="/3">
                        <BtnBackspace />
                    </Link>
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
                                <div className={styles.seatContainer}>
                                    {seats.map((isOccupied, index) => (
                                        <button
                                            key={index}
                                            className={styles.seatButton}
                                            disabled={
                                                isOccupied ||
                                                occupiedSeats.includes(
                                                    index + 1
                                                )
                                            }
                                            onClick={() =>
                                                handleSeatClick(index + 1)
                                            }
                                        >
                                            {index + 1 === selectedSeat ? (
                                                <img
                                                    className={styles.setEmoji}
                                                    src={page2Data.selectEmoji}
                                                    alt="emoji"
                                                />
                                            ) : null}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isValid ? (
                    <Link to="/">
                        <button
                            className={styles.nextBtn}
                            onClick={handleSubmit}
                        >
                            완료
                        </button>
                    </Link>
                ) : (
                    <div className={styles.inputWarning}>
                        <div>완료</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SeatsPage;
