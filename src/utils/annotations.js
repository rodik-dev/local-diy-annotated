export default function makeAnnotation(arr) {
    return arr.map((acc, [objectId, fieldPath, location]) => {
        
        if (objectId) {
            acc += ''
        }
        
    }).join(' ');
}
