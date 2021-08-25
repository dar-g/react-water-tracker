const UserService = (function () {
    const userSettings = {
        name: '',
        age: '',
        weight: ''
    };

    function setUserName (name) {
        userSettings.name = name;
    }

    function setUserAge (age) {
        userSettings.age = age;
    }

    function saveUserSettingsToLS () {
        for (let k in userSettings) {
            localStorage.setItem(`user-${k}`, userSettings[k]);
        }
    }

    return {
        setUserName: setUserName,
        setUserAge: setUserAge,
        saveUserSettingsToLS: saveUserSettingsToLS
    };
})();

export default UserService;

