var _ = require('lodash');
var lodashGet = require('secondLibrary');

const myData = {
  name: 'Prasetya'
};

const lodashGet = () => {
  const myName = _.get(myData, 'name', 'Anonymous');
  console.log('Peer Dependencies test', myName);
};

module.exports = lodashGet
