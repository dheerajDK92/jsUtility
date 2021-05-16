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
    const searchedArray = array.filter((v) => v.toLowerCase().startsWith(filterValue.toLowerCase()));
    return searchedArray;
};

module.export.jsUtility = { isNull, isEmpty, isNullOrUndefined, hasProperty, searchArrayStr };
