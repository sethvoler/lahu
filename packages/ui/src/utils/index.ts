type shema = {
  tag: string,
  props: {},
  children: shema[]
};

const props2attr = (props: {
  [key: string]: any
}) => {
  let res = '';
  const keys = Object.keys(props);
  keys.map((prop) => {
    res += ` ${prop}=${props[prop]}`;
  });
  return res;
};

export const json2html = (json: shema) => {
  const { tag, props, children } = json;
  const stratTag = tag === 'root' ? 'div id="root"' : tag;
  const endTag = tag === 'root' ? 'div' : tag;
  let str = '';
  str += `<${stratTag}${props2attr(props)}>
  ${children.map(child => json2html(child)).join('')}
</${endTag}>`;
  return str;
};
