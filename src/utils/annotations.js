/**
 * receive an array of arrays that represent annotations, and format into annotation attribute
 * @param {[[string]]]} arr array of arrays of annotaion specifiers
 */
export default function makeAnnotationAttribute(arr) {
    return arr.map(([objectId, fieldPath, location]) => {
        let str = '';
        if (objectId) {
            str += objectId + ':'
        }

        str += fieldPath;
        if (location) {
            str += '#' + location;
        }
        return str;
    }).join(' ');
}
