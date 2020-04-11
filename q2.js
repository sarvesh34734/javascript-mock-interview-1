/* question 1 --> Implement a function propertyExists(obj, path) that takes in an object and a path (string) as arguments and returns ‘False’ if the property doesn’t exist on that object or is null, else returns the value of the property*/

function propertyExists(obj, path) {

    let object = obj;
    //split the path string with "." as separator to form array of path 
    let pathArray = path.split(".");

    // initially take hasProperty boolean as true
    let hasProperty = true;

    // iterate through each and every element of pathArray
    // if property is there in object then change object to object.property
    // else return false;
    // if entire pathArray has been traversed then return object
    for (let property of pathArray) {
        if (!object || !object.hasOwnProperty(property)) {
            return false;
        } else {
            object = object[property];
        }
        if (property == pathArray[pathArray.length - 1] && object) {
            return object;
        }
    }
    return hasProperty;
}


// test case for checking above function
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 100,
        e: {
            f: 45
        }
    },
    j: {
        h: {
            i: {
                m: {
                    q: 29,
                }
            }
        }
    }
};
console.log(propertyExists(obj, "c.d")); // should output 100
console.log(propertyExists(obj, "c.d.g.h")); // should output false
console.log(propertyExists(obj, "a.b")); // should output false 
console.log(propertyExists(obj, "c.e.f")); // should output 45
console.log(propertyExists(obj, "j.h.i.m.q")); // should return 29

