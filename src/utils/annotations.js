export default function makeAnnotation(name, value, condition) {
    if (typeof condition === 'undefined') {
        condition = true;
    }
    return condition ? { [name]: value } : null;
}
