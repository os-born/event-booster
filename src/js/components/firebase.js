// import firebase from 'firebase/app';
// import 'firebase/database';
// import  {flatMapDeep,uniqBy} from 'lodash';
// import refs from '../refs';
// import myFavorite from '../../templates/myFavorite.hbs'
// import ex from '../../templates/ex.hbs'


// export const firebaseConfig = {
//   apiKey: "AIzaSyBCYkRyUUmaoRzQ7FY05Vni6EGpKwK3jPM",
//   authDomain: "event-booster-3.firebaseapp.com",
//   databaseURL: "https://event-booster-3-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "event-booster-3",
//   storageBucket: "event-booster-3.appspot.com",
//   messagingSenderId: "10640414227",
//   appId: "1:10640414227:web:d8907bfc8890c4020151e6"
// };
// export const app = firebase.initializeApp(firebaseConfig);
// export let eventArray = [];


// // const db = firebase.database();
// // db.ref('fetchData').remove()




// export const  getData  = () => {
//   const db = firebase.database();
//   const localId = localStorage.getItem('id')
//   if (localId.length === 0) {
//     refs.authModal.innerHTML = ex()
//     return
//   }
 
//   db.ref('fetchData').once('value').then(elem => {
//     const clearArr = flatMapDeep(Object.values(elem.val()))
//     const uniqArr = uniqBy(clearArr, 'id');
//     uniqArr.map(el => {
//       if (localId.split(',').includes(el.id)) {
//         eventArray.push(el)
//         console.log(eventArray);
//       }
//     })
//   }).then(()=>{ refs.authModal.innerHTML = myFavorite(eventArray); console.log("done")}).then(eventArray= [])
//     .catch(e => {console.log(e);
//       refs.authModal.innerHTML = ex()
//     })

// }



     
    










