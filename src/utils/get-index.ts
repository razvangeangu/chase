// https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference

export default function index(object: Object, is: string | string[]) {
  if (typeof is === 'string') return index(object, is.split('.'));
  else if (is.length === 0) return object;
  else return index(object[is[0]], is.slice(1));
}
