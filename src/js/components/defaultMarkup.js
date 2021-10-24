import eventsCards from "../../templates/events.hbs";
import refs from "../refs";
import { checkAuth, event } from "./markupCards";
import Notiflix from "notiflix";
import { observer } from "./infiniteScroll";
// import 'firebase/auth';

export function defaultMarkup() {
 Notiflix.Loading.dots();
        event.defaultEvent().then((event) => {
            refs.eventsList.innerHTML = eventsCards(event);
            observer.disconnect();
            Notiflix.Loading.remove()
            // checkAuth()
        }).catch(err => {console.log("err :" >> err)})
}

defaultMarkup()
