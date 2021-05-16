# what is this ?

Get Javascript Utility Methods To Save Duplication Of Code In Your Project.

# Installation

`npm i js_utility_fns -- save`

### Null Check 

isNull : This method will return true/false after checking the value.

```javascript
import { isNull }  from "js_utility_fns";
if(isNull(value)){ ... };
```

### Empty Check

isEmpty : This method will return boolean value after checking the string.

```javascript
import { isEmpty }  from "js_utility_fns";
if(isEmpty(value)){ ... };
```

### Null or Undefined Check

isNullOrUndefined : This method will return boolean after check the null/undefined

```javascript
import { isNullOrUndefined }  from "js_utility_fns";
if(isNullOrUndefined(value)){ ... };
```
### Object Has Key

hasProperty : This method will return boolean after check the Object param is available or not

```javascript
import { hasProperty }  from "js_utility_fns";
if(hasProperty(obj.paramToCheck)){ ... };
```


### Search Into Array String

searchArrayStr : This method will filter array and return match values.

```javascript
import { searchArrayStr }  from "js_utility_fns";
const result = searchArrayStr(array, filterValue); // return match values in array
```

### Generate Unique Number

getRandomNumber : This method will generate unique number

```javascript
import { getRandomNumber }  from "js_utility_fns";
const uniqueNumber = getRandomNumber(); // return unique number
const uniqueNumberWith = getRandomNumber("ID"); // return unique number after prepend the text which you will pass as argument.
```


##### Thank you. Please don't forget about feedback at `dheerajatoria@gmail.com` if you need any new enhancement into this library.