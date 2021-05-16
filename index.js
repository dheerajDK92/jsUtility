const isNull = (value) => {
  return value === null;
};

const isEmpty = (value) => {
  return value === "";
};

const isNullOrUndefined = (value) => {
  return value === null || value === undefined || value === "";
};

const hasProperty = (value) => {
  return typeof value !== "undefined";
};

const searchArrayStr = (array, filterValue) => {
  const searchedArray = array.filter((v) =>
    v.toLowerCase().startsWith(filterValue.toLowerCase())
  );
  return searchedArray;
};

const getRandomNumber = (appender) => {
  const date = new Date();
  const randomNumberByDate =
    date.getFullYear().toString() +
    date.getMonth().toString() +
    date.getDay().toString() +
    date.getHours().toString() +
    date.getMinutes().toString() +
    date.getSeconds().toString() +
    date.getMilliseconds().toString();
  if (appender === undefined) return randomNumberByDate;
  else return `${appender}${randomNumberByDate}`;
};

module.exports = {
  isNull,
  isEmpty,
  isNullOrUndefined,
  hasProperty,
  searchArrayStr,
  getRandomNumber,
};
