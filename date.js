module.exports = getDate;

function getDate(){
let today = new Date();
let options = {
    day: "numeric",
    weekday: "long",
    month: "long",
};
let day = today.toLocaleDateString("en-GB", options);

return day;
};
