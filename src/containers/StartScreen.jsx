function StartScreen() {
    return (
        <div className="start-screen">
            <p>Let's start</p>

            <form action="" className="form-name">
                <label htmlFor="user-name">Enter your name:</label>
                <input type="text" name="user-name" className="input-name" />

                <input type="submit" value="Save" />
            </form>
        </div>
    );
}

export default StartScreen;
