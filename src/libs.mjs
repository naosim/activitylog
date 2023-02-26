/**
 * 
 * @param {string} text - csv 
 * @returns { {date: Date, title: string}[] }
 */
export function csv2Logs(text) {
  return text.split('\n').map(v => v.split(',')).map(v => ({date: new Date(v[0].trim()), title: v[1].trim()}));
}