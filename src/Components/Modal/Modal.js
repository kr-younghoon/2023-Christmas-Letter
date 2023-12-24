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
                                <h2>from. {name}</h2>
                                <p>{content}</p>
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
