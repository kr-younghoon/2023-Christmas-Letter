function StylingOptions() {
    return (
        <>
            <a href="/">뒤로가기</a>
            <button>(svg로 대체할 예정)</button>
            <p>어떤 장식이 좋을까?</p>

            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">😀</label>

            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">🥲</label>

            <br />
            <button>
                <a href="/3">다음으로</a>
            </button>
        </>
    );
}

export default StylingOptions;
