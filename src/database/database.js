import firebase from 'firebase';

const config = {
  apiKey: 'API',
  authDomain: 'DOMAIN.firebaseio.com',
  databaseURL: 'https://DOMAIN.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
