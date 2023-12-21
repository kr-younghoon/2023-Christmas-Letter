import styles from './Jehovah.module.css';
let JehovahPNG = require('./layer-jbody.png');
let RectanglePNG = require('./Rectangle.png');

function Jehovah() {
    return (
        <>
            <div className={styles.jbody}>
                <img src={JehovahPNG} alt="예수님몸통" />
            </div>
            <div className={styles.jarms}>
                <img src={RectanglePNG} alt="예수님왼쪽팔" />

                <img src={RectanglePNG} alt="예수님오른쪽팔" />
            </div>
        </>
    );
}

export default Jehovah;
