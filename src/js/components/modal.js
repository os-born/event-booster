import {refs} from '../refs';
import eventCardModal from '../../templates/eventModal.hbs'
import { event } from "./markupCards";
//import {initMap} from "../../index.html"

//  export const idArray= []
function closeModal(e) {
    
if(e.target.closest('button') || e.target.classList.contains("js-lightbox")){
    refs.lightbox.classList.remove("isOpen");
        refs.lightboxContent.innerHTML = "";
    }

    
    
};


export function openModal(e) {
    const id = e.target.offsetParent.dataset.id;

    // if (e.target.id === 'favorite') {
    //     if (e.target.classList.contains("isAdded")) {
    //         const index = idArray.indexOf(id)
    //         idArray.splice(index, 1)
    //         localStorage.setItem('id', idArray)
    //         e.target.classList.remove('isAdded')
    //         return
    //     }
    //     idArray.push(id);
    //     localStorage.setItem('id', idArray)
    //     e.target.classList.add('isAdded')
    //     return
    // }

    if ( e.target.classList.contains("location")){
        const longitude = parseFloat(e.target.dataset.long);
        const latitude = parseFloat(e.target.dataset.lati)
        local = initMap(latitude, longitude)
         refs.local.classList.add("isOpen")
    }
      
    

    if(e.target.offsetParent.className === "event-card") {
        refs.lightbox.classList.add("isOpen")
        event.getEventById(id).then(data=>{
            markupEventCard(data); 
        })
    }
}

function closeMap(e) {
    if (e.target.classList.contains('map-container') || e.target.classList.contains('map-close')) {
         refs.local.classList.remove("isOpen")
    }

}

function markupEventCard(obj) {
    refs.lightboxContent.innerHTML = eventCardModal(obj);
    const text = document.querySelector('.event-info__text');
    if(text.textContent.length>200) {
        text.textContent = text.textContent.slice(0,200) + "..."
    }
}

refs.lightboxBackdrop.addEventListener('click', closeModal)
refs.eventsList.addEventListener('click', openModal)
// refs.local.addEventListener('click', closeMap)
export let local



