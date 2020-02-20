export default 'utilities';
/*
BEGIN IMPORTED CODE
Copyright 2018 John Hohm - github.com/azyth/utilities
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
returns a copy of a supplied object. 
this works with primitives, arrays and JSON objects, and any nested collection of them. 
*/
export const recursiveCopyObject =  (obj: any) => {
    if (!obj || typeof obj !== 'object') {
        return obj;
    } else if (Array.isArray(obj)) {
        let tempArray: any[] = [];
        obj.forEach((e) => {
            tempArray.push(recursiveCopyObject(e));
        });
        return tempArray;
    } else {
        let tempObj: any = {};
        Object.keys(obj).forEach((k: any)=>{
            tempObj[k] = recursiveCopyObject(obj[k]);
        });
        return tempObj
    }
}

/*    checkNULL
Checks a object recursivly along the desired path and if encounters an undefined or null (or other falsey value)
    returns the alt_value instead of erroring.
Allows passing in an object with arrays in the path
obj: OBJECT to operate on, exmp: {a: "hi", b: {x: "hello again", y: [{z:4}]}}
obj_path: STRING designating path to nested object destination, exmp: "b.y[0].z"
alt_value: ANY alternative value to be returned if traversing the object results in a falsey value, exmp: 42
NOTE: if your value you are extracting is a boolean and the value is false then it will return the alt value.
in this situation (termination value is a boolean) you should pass false as the alt_value.
*/
export const checkNULL = (obj: any, objPath: string, altValue: any) => {
    if (!obj) {
      return altValue;
    } // if nothing to operate on return the alternate
    if (!objPath) {
      return obj;
    } // if no path return the object.
    const pathArgs = objPath.split('.');
    let opObj = obj;
    pathArgs.forEach(arg => {
      if (!opObj) {
        return;
      }
      const arrayValue = arg.split(/\[|\]/);
      if (arrayValue.length > 1) {
        // iterate into the array
        opObj = opObj[arrayValue[0]]; // set the array as object
        if (!opObj) {
          return;
        }
        arg = arrayValue[1]; // set index value for array
      }
      opObj = opObj[arg];
    });
    if (!opObj) {
      return altValue;
    } // if you have nulled out return alternate
    return opObj;
}

  /*
    obj: OBJECT to operate on, exmp: {a: "hi", b: {x: "hello again", y: [{z:4}]}}
    path: STRING designating path to nested object destination, exmp: "b.y[0].z"
    value: value to set at path destination
   */
// export const setDeep = (obj, path, value) => {
//     return this.setNestedField(obj, this.pathToArray(path), value);
//   }

  /*
    @PATH must be an array
   */
// export const setNestedField = (obj, pathArray, value) => {
//     // need to check if next level exists in obj, if not create it, i.e. Additional fields
//     if (pathArray.length === 1) {
//       obj[pathArray] = value;
//       return;
//     } else if (!obj[pathArray[0]]
//                 && pathArray.length > 1
//                 && !isNaN(Number(pathArray[1]))) {
//       obj[pathArray[0]] = [{}];
//     } else if (!obj[pathArray[0]]) {
//       obj[pathArray[0]] = {};
//     }
//     return setNestedField(obj[pathArray[0]], pathArray.slice(1), value);
//   }

export const pathToArray = (path: string) => {
    const pathArray = path.split('.');
    pathArray.forEach((elem: any, ind: number) => {
      const temp = elem.split('[');
      if (temp.length > 1) {
        pathArray[ind] = temp[0];
        pathArray.splice(ind + 1, 0, temp[1].slice(0, -1));
      }
    });
    console.log(pathArray);
    return pathArray;

}

// export const capitalize = (obj) => {
//     if (typeof obj !== 'object') {
//       return obj;
//     }
//     const newObj: any = {};
//     Object.keys(obj).forEach((name) => {
//       const newname = name.charAt(0).toUpperCase() + name.slice(1);
//       if (Array.isArray(obj[name])) {
//         newObj[newname] = [];
//         const self = this;
//         obj[name].forEach((s) => { newObj[newname].push(self.capitalize(s)); });
//       } else if (typeof obj[name] === 'object') {
//         newObj[newname] = this.capitalize(obj[name]);
//       } else {
//         newObj[newname] = obj[name];
//       }
//     });
//     return newObj;
//   }

  // checks to see if a value is 'real' data.
  // returns true if not NULL or undefined or ''. WILL return true for 0
export const isValue = (data:any) => {
    if (typeof data === 'number') {
        return true;
    } else if (data) {
        return true;
    } else {
        return false;
    }
}