import get from 'lodash/get';

const myData = {
  name: 'Prasetya'
}

const myFunction = () => {
  const myName = get(myData, 'name', 'Anonymous');
  console.log('Peer Dependencies test', myName);
}

export default {
  myFunction
}
