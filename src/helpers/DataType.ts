export function IsEmpty(value : unknown) : boolean
{
    return (
        value === '' ||
        value === null ||
        value === undefined ||
        (Array.isArray(value) && !value.length) ||
        (value instanceof Object && value.constructor === Object && !Object.keys(value).length)
    );
}