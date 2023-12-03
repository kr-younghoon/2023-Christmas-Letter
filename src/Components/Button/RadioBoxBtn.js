function RadioBoxBtn(props) {
    return (
        <div>
            <input type="radio" />
            <label htmlFor={props.emoge}>{props.emoge}</label>
        </div>
    );
}

export default RadioBoxBtn;
