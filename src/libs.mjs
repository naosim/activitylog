/**
 *
 * @param {string} text - csv
 * @param {string} label
 * @returns { {date: Date, title: string, label: string}[] }
 */
export function csv2Logs(text, label) {
  text = text.trim();
  return text
    .split("\n")
    .map((v) => v.split(","))
    .map((v) => ({ date: new Date(v[0].trim()), title: v[1].trim(), label: label }));
}
