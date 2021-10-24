import { refs } from "../refs";
import { apiService } from "./Api";
import eventsCards from "../../templates/events.hbs";
import Notiflix from "notiflix";
// import firebase from 'firebase/app';
import { observer } from "./infiniteScroll";
// import 'firebase/auth';
import { flatMapDeep, map, some } from "lodash";

export const event = new apiService();

export const onEvent = (e) => {
  e.preventDefault()
  if (refs.searchForm.elements.searchEvent.value !== "") {
      event.query = refs.searchForm.elements.searchEvent.value.toLowerCase().trim();
      event.country = refs.searchForm.elements.countryName.value;
      event.resetPage();
      event.fetchEvent()
      .then((event) => { 
        Notiflix.Loading.dots(); 
        eventMarkup(event);
        console.log(event);
        // checkAuth(); 
        Notiflix.Loading.remove(); 
        refs.topEvents.classList.add("hide-title"); 
        observer.observe(refs.sentinel);
      })
      .catch(err => {Notiflix.Notify.warning('No such events found');})
    } else {
      Notiflix.Notify.failure("Enter event");
    }
};


const onChangeCountry = () => {
  if(refs.searchForm.elements.countryName.value !== ""){
    event.country = refs.searchForm.elements.countryName.value;
    event.fetchEvent()
    .then((event)=> {
      Notiflix.Loading.dots(); 
      eventMarkup(event); 
      Notiflix.Loading.remove(); 
      refs.topEvents.classList.add("hide-title");
    })
  }
}

refs.searchForm.addEventListener("submit", onEvent);
refs.searchForm.elements.countryName.addEventListener("change", onChangeCountry);

export function eventMarkup(event) {
  refs.eventsList.innerHTML = eventsCards(event);
}

// export function checkAuth() {
//   firebase.auth().onAuthStateChanged(
//     (user) => { 
//       if (user) { 
//         document.querySelectorAll('#favorite').forEach(el => el.style.opacity = 1);
//         } else if (!user) {
//           document.querySelectorAll('#favorite').forEach(el => el.style.opacity = 0);
//         }
//     }   
//   )
// }