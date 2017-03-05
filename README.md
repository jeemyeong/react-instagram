# # React Instagram
React + Redux + Saga + Firebase 의 연습을 위한 프로젝트입니다.

`npm install`

`src/database/database.js` 를 아래와 같이 생성 후
```
import firebase from 'firebase';

const config = {
  apiKey: ‘apiKey’,
  authDomain: ‘address.firebaseio.com',
  databaseURL: 'https://address.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
```
의 형태로 코드 생성 하면 실행됩니다.

`npm start`
