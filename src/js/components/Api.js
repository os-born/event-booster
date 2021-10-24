const API_KEY= "9tvGazI5GRqdFrE6bp2dWyynwysgf3qO";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
// import firebase from 'firebase/app';
// import 'firebase/database';

export class apiService {
    constructor() {
        this.searchQuery = "";
        this.searchCountry = "";
        this.page = 1;
    }
    
    fetchEvent() {
        const url = `${BASE_URL}events.json?countryCode=${this.searchCountry}&keyword=${this.searchQuery}&apikey=${API_KEY}&size=20&page=${this.page}&sort=date,asc`
        return fetch(url).then(this.handleErrors)
            .then(response => response.json()).then(({ _embedded }) => {
                this.incrementPage()
                // const db = firebase.database();  
                // db.ref("fetchData").push(_embedded.events)
                return _embedded.events   
            })
    }

    
    defaultEvent() {
        const url = `${BASE_URL}events.json?countryCode=${this.searchCountry}&keyword=${this.searchQuery}&apikey=${API_KEY}&size=12&sort=random`
        return fetch(url).then(this.handleErrors).then(response => response.json()).then(({ _embedded }) => {
            // const db = firebase.database();  
            // db.ref("fetchData").push(_embedded.events)
            return _embedded.events
        })
    }
    getEventById (id) {
        return fetch(`${BASE_URL}events/${id}.json?apikey=${API_KEY}`)
        .then(response=>response.json())
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    
    incrementPage() {
        this.page += 1;
    }
    
    resetPage() {
        this.page = 1;
    }
    
    get query() {
        return this.searchQuery;
    }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    
    get country() {
        return this.searchCountry;
    }
    
    set country(newCountry) {
        this.searchCountry = newCountry;
    }
  
};

