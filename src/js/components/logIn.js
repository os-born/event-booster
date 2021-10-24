// import { refs } from '../refs';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import registration from '../../templates/registration.hbs';
// import signUpModal from '../../templates/signUpModal.hbs'
// import { app, getData } from './firebase';
// import { observer } from './infiniteScroll';
// import Notiflix from "notiflix";


//  let idArray = []
// const options = {
//     'keyboard': true, 
//     'static': false,
//     'close': function() {
//         document.body.classList.remove('mui-scroll-lock');
//     }
// };


//  const openAuthModal = (e) => {
//     if (e.target.classList.contains('logsBtn')) {
//         refs.authModal.classList.remove('auth-hidden');
//         refs.authModal.innerHTML = signUpModal();
//         mui.overlay('on', options, refs.authModal);
//         const authForm = document.getElementById('auth-form');
//         authForm.addEventListener('click', handleChange);
//     }

//     if (e.target.classList.contains('log')) {
//     loadFavorite()
//     }
    
// }

//         const loadFavorite = () => {
//             // getData()
//         refs.authModal.classList.remove('auth-hidden');
//         mui.overlay('on', options, refs.authModal);
//                  observer.disconnect();
//             document.body.classList.remove('mui-scroll-lock')
//             idArray = localStorage.getItem('id').split(',')
           
//         }
        
// const closeFavModal = () => {
//     firebase.auth().signOut();
//     localStorage.setItem('isLogin', false)
//     refs.authBtn.textContent = 'Log in';
//     refs.authBtn.classList.remove('log');
//     mui.overlay('off', options, refs.authModal)
//     observer.observe(refs.sentinel);
//     // document.querySelectorAll('#favorite').forEach(el => el.style.opacity = 0)
// }

// const handleChange = (e) => {
//     e.preventDefault();
//     const email = e.currentTarget.elements['email'].value;
//     const password = e.currentTarget.elements['password'].value;
//     if ((email === '') && (password === '')) {
//         return
//     }
//     if (e.target.id === "enter-btn") {
//         firebase
//             .auth().signInWithEmailAndPassword(email, password).then(loadFavorite)
//             .then(() => {
//          document.querySelectorAll('#favorite').forEach(el=>el.style.opacity= 1)
//         })
//             .catch(e =>
//             {
//                 if (e.code === 'auth/user-not-found') {
//                     Notiflix.Notify.failure('Please sign in first')
//                 }
//                 if (e.code === 'auth/wrong-password') {
//                     Notiflix.Notify.failure('wrong-password')
//                 }
//                })
//     }
//     else if (e.target.id === 'register-btn') {
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, password)
//             .then(() =>
//             {
//                 loadFavorite()
//             })
//             .catch(e => {
//                 if (e.code === "auth/email-already-in-use") {
//                     Notiflix.Notify.failure('The email address is already in use by another account')
//                 }
//                 if (e.code === "auth/weak-password") {
//                     Notiflix.Notify.failure('Password should be at least 6 characters')
//                 }
                
//                 console.log(e)
//             })
//     }

      
// }
//     const createAcc = (e) => {
//         e.preventDefault();
//         if (e.target.classList.contains('creating-acc')) {
//             refs.authModal.innerHTML = registration();
//             mui.overlay('on', options, refs.authModal);
//             const authForm = document.getElementById('auth-form');
//             authForm.addEventListener('click', handleChange);
//         }
//         if (e.target.classList.contains('isAdded')) {
//             const id = e.target.offsetParent.dataset.id;
//             const index = idArray.indexOf(id)
//             idArray.splice(index, 1)
//         localStorage.setItem('id', idArray)
//          e.target.classList.remove('isAdded')
//         }
//         if (e.target.classList.contains('login-out')) {
//             closeFavModal()
//         }
        

//     if (e.target.classList.contains('likes')) {
//         const id = e.target.offsetParent.dataset.id;
//             const index = idArray.indexOf(id)
//             idArray.splice(index, 1)
//             localStorage.setItem('id', idArray)
//             e.target.classList.remove('isAdded')
//             e.target.textContent = 'add'
//     }

//     if (e.target.classList.contains('fav-btnClose')) {
//         mui.overlay('off', options, refs.authModal)
//     }
// }


// refs.authBtn.addEventListener('click', openAuthModal)
// refs.authModal.addEventListener('click', createAcc)


// firebase.auth().onAuthStateChanged(
//     (user) => {
//             if (user) { 
//                 refs.authBtn.classList.add('log');
//                 refs.authBtn.classList.remove('logsBtn');
//                  refs.authBtn.textContent = 'My favorite';
//                 document.querySelectorAll('#favorite').forEach(el => el.style.opacity = 1)

//         }
//         else if (!user) {
//                 document.querySelectorAll('#favorite').forEach(el => el.style.opacity = 0)
//                 refs.authBtn.classList.remove('log');
//                 refs.authBtn.classList.add('logsBtn');
//                 refs.authBtn.textContent = 'Log in';
//         }
       
         
//     }
     
    
// )


