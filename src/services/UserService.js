/**
 * User Liquid Consumption Array consists of objects, each for a day
 * that includes date, water, ...other types of liquids, total
 *
 * [{date: 04.09.2021,
 * water: 1600,
 * tea: 400,
 * coffee: 200,
 * total: 2200}]
 * */
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
        const userToString = JSON.stringify(userSettings);
        localStorage.setItem('user', userToString);
    }

    function getUserObjFromLS () {
        const userFromLS = localStorage.getItem('user');
        return JSON.parse(userFromLS);
        // for (let k in parsedObj) {
        //     console.log(parsedObj[k]);
        // }
    }

    return {
        setUserName,
        setUserAge,
        setUserWeight,
        setUserGender,
        saveUserSettingsToLS,
        getUserObjFromLS
    };
})();

export default UserService;

