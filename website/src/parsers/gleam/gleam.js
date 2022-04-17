import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'astexplorer-gleam/package.json';

const ID = 'gleam';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: `https://gleam.run/`,
  _ignoredProperties: new Set(['_type']),
  locationProps: new Set(['span']),

  loadParser(callback) {
    require(['astexplorer-gleam'], callback);
  },

  parse(parser, code) {
    return parser.parseFile(code);
  },

  getNodeName(node) {
    return node._type;
  },

  nodeToRange(node) {
    if (node.span) {
      return [node.span.start, node.span.end];
    }
  },
};
