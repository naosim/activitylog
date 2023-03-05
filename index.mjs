import fs from 'fs';
import {parse} from './parse.mjs';
import {otherLogs} from './src/otherlog.mjs';

var list = ['./xml/blog.xml', './xml/youtube.xml', './xml/youtube_pari.xml']
  .map(v => fs.readFileSync(v, 'utf8'))
  .map(v => parse(v))
  .reduce((memo, v) => [...memo, ...v], [])
// list.forEach(v => console.log(JSON.stringify(v)))
list = [...list, ...otherLogs];
list = list.sort((a, b) => a.date.getTime() - b.date.getTime())

fs.writeFileSync('./docs/logs.json', JSON.stringify(list, null, '  '));