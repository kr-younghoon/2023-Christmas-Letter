import styles from './Modal.module.css';

function Modal({ seatData, onClose }) {
    if (!seatData) {
        // console.log('seatData is null');
        return null;
    }

    const { name, content } = seatData;

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.selectBox}>
                        {/* <SelectBox /> */}
                        <div className={styles.selectBG}>
                            <div className={styles.selectBox_Btn}>
                                <div className={styles.message_page}>
                                    <h2>from. {name}</h2>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="240"
                                        height="2"
                                        viewBox="0 0 240 2"
                                        fill="none"
                                    >
                                        <path
                                            d="M0 1H240"
                                            stroke="black"
                                            stroke-opacity="0.25"
                                            stroke-width="0.5"
                                        />
                                    </svg>
                                    <p>{content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className={styles.close} onClick={onClose}>
                        <div>닫기</div>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Modal;
