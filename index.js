var _ = require('lodash');

const myData = {
  name: 'Prasetya'
};

const lodashGet = () => {
  const myName = _.get(myData, 'name', 'Anonymous');
  console.log('Peer Dependencies test', myName);
};

module.exports = lodashGet
