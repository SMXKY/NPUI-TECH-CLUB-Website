export function loadSearchBar(){
    document.querySelector('.js-search-overlay').classList.add('on-overlay') ;
    document.querySelector('.js-back-search-button').addEventListener('click', () => {
        document.querySelector('.js-search-overlay').classList.remove('on-overlay') ;
    }) ;
}

