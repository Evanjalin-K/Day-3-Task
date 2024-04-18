const isEqual = (obj1, obj2) => {
    let obj1keys = Object.keys(obj1);
    let obj2keys = Object.keys(obj2);
    if (obj1keys.length !== obj2keys.length) {
        return false;
    }
    for (let objkey of obj1keys) {
        if(obj1[objkey] !== obj2[objkey]) {
            return false;
        }
    }
            return true;
}
    
let obj1 = {name: "Person", age:5};
let obj2 = {age:5, name: "Person"};
console.log(isEqual(obj1, obj2));