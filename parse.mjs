export function parse(xml) {
  if(xml.indexOf('<item>') != -1 && xml.indexOf('<entry>') != -1) {
    throw new Error('itemとentryの両方ある');
  } else if(xml.indexOf('<item>') != -1) {
    return parseWithItem(xml);
  } else if(xml.indexOf('<entry>') != -1) {
    return parseWithEntry(xml);
  } else {
    throw new Error('itemもentryもない');
  }
}


export function parseWithItem(xml) {
  return []

}

export function parseWithEntry(xml) {
  return []

}