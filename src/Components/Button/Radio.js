import styles from './Radio.module.css';

function RadioBoxBtn({ emoge, id, onChange }) {
    return (
        <div className={styles.checkbox_radio}>
            <input type="radio" id={id} onChange={onChange} />
            <label htmlFor={id}>{emoge}</label>
        </div>
    );
}

export default RadioBoxBtn;
