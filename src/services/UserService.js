const UserService = (function () {
    const userSettings = {
        name: '',
        age: '',
        weight: '',
        gender: '',
    };

    function setUserName (name) {
        userSettings.name = name;
    }

    function setUserAge (age) {
        userSettings.age = age;
    }

    function setUserWeight (weight) {
        userSettings.weight = weight;
    }

    function setUserGender (gender) {
        userSettings.gender = gender;
    }

    function saveUserSettingsToLS () {
        for (let k in userSettings) {
            localStorage.setItem(`user-${k}`, userSettings[k]);
        }
    }

    return {
        setUserName,
        setUserAge,
        setUserWeight,
        setUserGender,
        saveUserSettingsToLS
    };
})();

export default UserService;

