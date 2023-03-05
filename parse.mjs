/**
 * 
 * @param {string} xml 
 * @returns { {id: string, title: string, url: string, date: Date}[] }
 */
export function parse(xml) {
  if(xml.indexOf('<item>') !== -1 && xml.indexOf('<entry>') !== -1) {
    throw new Error('itemとentryの両方ある');
  } else if(xml.indexOf('<item>') !== -1) {
    return parseWithItem(xml);
  } else if(xml.indexOf('<entry>') !== -1) {
    return parseWithEntry(xml);
  } else {
    throw new Error('itemもentryもない');
  }
}

/**
 * 
 * @param {string} xml 
 * @returns { {id: string, title: string, url: string, date: Date}[] }
 */
export function parseWithItem(xml) {
  return getTags(xml, 'item').map(item => {
    return {
      id: getTag(item.innerText, 'guid').innerText,
      title: getTag(item.innerText, 'title').innerText,
      url: getTag(item.innerText, 'link').innerText,
      date: new Date(getTag(item.innerText, 'pubDate').innerText)
    }
  })

}

/**
 * 
 * @param {string} xml 
 * @returns { {id: string, title: string, url: string, date: Date}[] }
 */
export function parseWithEntry(xml) {
  return getTags(xml, 'entry').map(entry => {
    return {
      id: getTag(entry.innerText, 'id').innerText,
      title: getTag(entry.innerText, 'title').innerText,
      url: parseAttributesText(getTag(entry.innerText, 'link').attributesText).href,
      date: new Date(getTag(entry.innerText, 'published').innerText)
    }
  })

}

function getTag(xml, tagName) {
  return getTags(xml, tagName)[0]; 
}

function getTags(xml, tagName) {
  return xml.split(`<${tagName}`).slice(1)
    .map(v => v.split(`</${tagName}>`)[0])
    .map(v => {
      const index = v.indexOf('>');
      var attributesText = v.slice(0, index).trim();
      if(attributesText.slice(-1) === '/') {
        attributesText = attributesText.slice(0, -1);
      }
      return {
        attributesText: attributesText.trim(),
        innerText: v.slice(index + 1)
      }
    })
}

function parseAttributesText(attributesText) {
  // console.log(attributesText)
  return attributesText.split(' ').reduce((memo, v) => {
    const key = v.slice(0, v.indexOf('='));
    var value = v.slice(v.indexOf('=') + 2);
    value = value.slice(0, value.lastIndexOf('"'))
    // console.log(value);
    memo[key] = value;
    return memo;
  }, {})
}