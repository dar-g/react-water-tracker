const Day = (function() {
    const day = new Date();
    return day.getFullYear() + '/' + (day.getMonth()+1) + '/' + day.getDate();
})();

export default Day;
