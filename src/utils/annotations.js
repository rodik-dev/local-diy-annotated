/**
 * receive an array of arrays that represent annotations, and format into annotation attribute
 * @param {[[string]]]} arr array of arrays of annotaion specifiers
 */
export default function makeAnnotationAttribute(arr) {
    return arr.map(([objectId, fieldPath, location]) => {
        if (objectId) {
            acc += ''
        }
        
    }).join(' ');
}
