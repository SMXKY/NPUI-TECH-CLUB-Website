export function sideBarFunctionality(){
    document.querySelector('.js-side-bar-btn').addEventListener('click', () => {
        if(window.innerWidth < 813 && window.innerWidth > 448){
            if(document.querySelector('.js-side-bar-btn').classList.contains('check')){
                document.querySelectorAll('.js-side-bar-text').forEach((text) => {
                    text.classList.remove('show-text') ;
                }) ;

                document.querySelector('.js-side-bar-btn').classList.remove('check') ;
            }else{
                document.querySelectorAll('.js-side-bar-text').forEach((text) => {
                    text.classList.add('show-text') ;
                }) ;
                document.querySelector('.js-side-bar-btn').classList.add('check') ;

                document.addEventListener('click', (e) => {
                    if(!document.querySelector('.js-side-bar').contains(e.target) &&!document.querySelector('.js-side-bar-btn').contains(e.target)){
                        document.querySelectorAll('.js-side-bar-text').forEach((text) => {
                            text.classList.remove('show-text') ;
                        }) ;
                        document.querySelector('.js-side-bar-btn').classList.remove('check') ;
                    }
                }) ;
            }
        }else if(window.innerWidth < 449){
            if(document.querySelector('.js-side-bar-btn').classList.contains('check')){
                document.querySelectorAll('.js-side-bar-text').forEach((text) => {
                    text.classList.remove('show-text') ;
                }) ;

                document.querySelector('.js-side-bar').classList.remove('show-bar') ;

                document.querySelector('.js-side-bar-btn').classList.remove('check') ;
            }else{
                document.querySelectorAll('.js-side-bar-text').forEach((text) => {
                    text.classList.add('show-text') ;
                }) ;
                document.querySelector('.js-side-bar-btn').classList.add('check') ;
                document.querySelector('.js-side-bar').classList.add('show-bar') ;

                document.addEventListener('click', (e) => {
                    if(!document.querySelector('.js-side-bar').contains(e.target) &&!document.querySelector('.js-side-bar-btn').contains(e.target)){
                        document.querySelectorAll('.js-side-bar-text').forEach((text) => {
                            text.classList.remove('show-text') ;
                        }) ;
                        document.querySelector('.js-side-bar-btn').classList.remove('check') ;
                        document.querySelector('.js-side-bar').classList.remove('show-bar') ;
                    }
                }) ;
            }
        }

    }) ;
}

