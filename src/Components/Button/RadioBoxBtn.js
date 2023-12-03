import styles from './RadioBoxBtn.module.css';

function RadioBoxBtn({ emoge, ide, onChange }) {
    return (
        <div className={styles.checkbox_radio}>
            <input type="radio" id={ide} onChange={onChange} />
            <label htmlFor={ide}>{emoge}</label>
        </div>
    );
}

export default RadioBoxBtn;
