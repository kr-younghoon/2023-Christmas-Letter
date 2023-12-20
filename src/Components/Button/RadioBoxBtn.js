import React from 'react';
import styles from './RadioBoxBtn.module.css';

function RadioBoxBtn({ emoji, value, isSelected, disabled, name, onChange }) {
    const handleClick = () => {
        if (!isSelected) {
            onChange(value);
        }
    };

    return (
        <div
            className={`${styles.checkbox_radio} ${
                isSelected ? styles.selected : ''
            }`}
            onClick={handleClick}
        >
            <label>
                <input
                    type="radio"
                    value={value}
                    name={name}
                    checked={isSelected}
                    disabled={disabled}
                    onChange={() => {}}
                />
                {typeof emoji === 'string' ? (
                    emoji
                ) : (
                    <span role="img" aria-label={`emoji${value}`}>
                        {emoji}
                    </span>
                )}
            </label>
        </div>
    );
}

export default RadioBoxBtn;
