# # React Instagram
React + Redux + Saga + Firebase 의 연습을 위한 프로젝트입니다.

<<<<<<< HEAD
1. `npm install`
2. `src/database/database.js` 생성 후
3. ```
=======
`npm install`

`src/database/database.js` 를 아래와 같이 생성 후
```
>>>>>>> a5ffe88afb4c0c8cb3bd12487511ce3338f0b124
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
의 형태로 코드 생성
4. `npm start`

<<<<<<< HEAD
하면 실행됩니다.
=======

`npm start`

>>>>>>> a5ffe88afb4c0c8cb3bd12487511ce3338f0b124
