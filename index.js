import fs from 'fs';
import {parse} from './parse.mjs';

const xmls = ['./xml/blog.xml', './xml/youtube.xml', './xml/youtube_pari.xml']
  .map(v => fs.readFileSync(v))
  .map(v => parse(v))
