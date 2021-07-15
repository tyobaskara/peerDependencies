var _ = require('lodash');
var secondLibrary = require('secondLibrary');

const myData = {
  name: 'Prasetya'
};

const callFunction = () => {
  const myName = _.get(myData, 'name', 'Anonymous');
  console.log('first func', myName);
  
  console.log('second func');
  secondLibrary.callFunction();
};

module.exports = {
  callFunction
}
