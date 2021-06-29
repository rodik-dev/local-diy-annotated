export default function makeAnnotation(arr) {
    arr.reduce((acc, [objectId, fieldPath, location]) => {
        return acc += ` ${}`
    }, '')
    return condition ? { [name]: value } : null;
}
