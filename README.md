# what is this ?

Get Javascript Utility Methods To Save Duplication Of Code In Your Project.

# Installation

`npm i js_utility_fns -- save`

### Null Check 

isNullCheck : This method will return true/false after checking the value.

```javascript
import { isNullCheck }  from "js_utility_fns";
isNullCheck(value);
```

### Empty Check

isEmpty : This method will return boolean value after checking the string.

```javascript
import { isEmpty }  from "js_utility_fns";
isEmpty(value);
```

### Null or Undefined Check

isNullOrUndefined : This method will return boolean after check the null/undefined

```javascript
import { isNullOrUndefined }  from "js_utility_fns";
isNullOrUndefined(value);
```
### Object Has Key

hasProperty : This method will return boolean after check the Object param is available or not

```javascript
import { hasProperty }  from "js_utility_fns";
hasProperty(obj.paramToCheck);
```


### Search Into Array String

searchArrayStr : This method will filter array and return match values.

```javascript
import { searchArrayStr }  from "js_utility_fns";
const result = searchArrayStr(array, filterValue); // return match values in array
```


##### Thank you. Please don't forget about feedback at `dheerajatoria@gmail.com` if you need any new enhancement into this library.