import styles from './Radio.module.css';

function RadioBoxBtn({ emoge, value, defaultChecked, disabled, name }) {
    return (
        <div className={styles.checkbox_radio}>
            <label>
                <input
                    type="radio"
                    value={value}
                    name={name}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
                {emoge}
            </label>
        </div>
    );
}

export default RadioBoxBtn;
