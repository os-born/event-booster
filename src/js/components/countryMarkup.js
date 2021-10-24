import countryList from "../../templates/country-list.hbs";
import { refs } from "../refs";
import countryItem from "../../templates/countries.json"

refs.searchCountry.insertAdjacentHTML("beforeend", countryList(countryItem));
