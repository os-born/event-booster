import refs from "../refs";
import { event } from "./markupCards";
import eventsCards from "../../templates/events.hbs";
import Notiflix from "notiflix";

export function loadMore(event) {
    refs.eventsList.insertAdjacentHTML("beforeend", eventsCards(event))  
  }
  
const onEntry = entries => {
    Notiflix.Loading.dots();
entries.forEach(entry => {
    if (entry.isIntersecting && event.query !== '') {
        event.fetchEvent().then((event) => { loadMore(event); Notiflix.Loading.remove(); }).catch(err => {console.log("err :">> err)});
    }
});
};

export const observer = new IntersectionObserver(onEntry, { rootMargin: '150px' });
 observer.observe(refs.sentinel);


