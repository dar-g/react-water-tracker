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

    function saveLiquidConsumption (date, water) {
        return {
            date,
            water
        }
    }

    function updateConsumptionArr (item) {
        userSettings.consumption.push(item);

        // WIP
        // const consumptionArr = userSettings.consumption;
        // const today = getCurrentDay();
        //
        // if (consumptionArr.length === 0) {
        //     consumptionArr.push(item);
        // } else {
        //     for (let i = 0; i < consumptionArr.length; i++) {
        //         if (consumptionArr[i].date !== today) {
        //             consumptionArr.push(item);
        //         } else if (consumptionArr[i].date === today) {
        //             consumptionArr[i].water += 200;
        //         }
        //     }
        // }
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
        saveLiquidConsumption,
        updateConsumptionArr,
        calcRequiredWaterQuantity
    };
})();

export default UserService;

