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
  const randomNumberByDate = Math.floor(new Date().valueOf() * Math.random());
  if (appender === undefined) return `${randomNumberByDate}`;
  else return `${appender}${randomNumberByDate}`;
};

const getBrowserName = () => {
  return window
    ? window.navigator
      ? navigator.userAgent
          .split(")")
          .reverse()[0]
          .match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+/g)[0]
      : "Not Able to Get Browser Name. Sorry!"
    : "Window is not available";
};

const getBrowserNameWithVersion = () => {
  return window
    ? window.navigator
      ? navigator.userAgent
          .split(")")
          .reverse()[0]
          .match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+\/[\d.]+/g)[0]
          .split("/")
      : "Not Able to Get Browser Name. Sorry!"
    : "Window is not available";
};

module.exports = {
  isNull,
  isEmpty,
  isNullOrUndefined,
  hasProperty,
  searchArrayStr,
  getRandomNumber,
  getBrowserName,
  getBrowserNameWithVersion,
};
