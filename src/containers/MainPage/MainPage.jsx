function MainPage() {
    function clearLS() {
        localStorage.clear();
    }

    return (
        <div className="main-page">
            <p>We are here when user logged in</p>
            <input type="button" onClick={clearLS} value="Log out" />
        </div>
    );
}

export default MainPage;
