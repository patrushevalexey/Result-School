const nextBirthdayDate = new Date(2024, 1, 7, 0, 0, 0, 0).getTime();

const getDaysBeforeBirthday = (nextBirthdayDate, convert) => {
    const diffInMS = nextBirthdayDate - new Date();
    return convert(diffInMS);
};

const convertMsToDays = date => Math.round(date / 1000 / 60 / 60 / 24);

console.log(`До дня рождения приблизительно ${getDaysBeforeBirthday(nextBirthdayDate, convertMsToDays)} дней`);