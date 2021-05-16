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

module.export.jsUtility = { isNull, isEmpty, isNullOrUndefined, hasProperty };
