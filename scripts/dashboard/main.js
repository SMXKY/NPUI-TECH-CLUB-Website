import { loadSearchBar} from "./searchBar.js";
import { navBarButtons } from "./navBar.js";

const searchBar = document.querySelector('.js-search-form') ;

searchBar.addEventListener('submit', (event) => {
    if(window.innerWidth < 448){
        event.preventDefault() ;
        loadSearchBar() ;
    }
}) ;

navBarButtons() ;
