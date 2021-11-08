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

import getCurrentDay from "../helpers/getCurrentDay";

const UserService = (function () {
    const userSettings = {
        name: '',
        age: '',
        weight: '',
        gender: '',
        consumption: [],
    };

    /**
     * @param name {String}
     * @returns void
     */
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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const userFromLS = localStorage.getItem('user');
                    resolve(userFromLS);
                } catch (error) {
                    reject(error);
                }
            }, 300);
        });
    }

    function updateConsumptionArr (date, water, sign) {
        const consumptionArr = userSettings.consumption;
        const dayObj = {date, water};
        const today = getCurrentDay();
        const todayItemIndex = consumptionArr.findIndex((i) => i.date === today);
        const hasTodaysObj = consumptionArr.find(i => i.date === today);

        if (consumptionArr.length === 0 || hasTodaysObj === undefined) {
            consumptionArr.push(dayObj);
        } else if (sign === '+') {
            consumptionArr[todayItemIndex].water += 200;
        } else if (sign === '-') {
            consumptionArr[todayItemIndex].water -= 200;
        }
    }

    function calcRequiredWaterQuantity () {
        if (userSettings.weight !== '' || userSettings.weight !== 0) {
            return (userSettings.weight * 0.03).toFixed(1);
        }
    }

    return {
        setUserName,
        setUserAge,
        setUserWeight,
        setUserGender,
        saveUserSettingsToLS,
        getUserObjFromLS,
        updateConsumptionArr,
        calcRequiredWaterQuantity
    };
})();

export default UserService;

