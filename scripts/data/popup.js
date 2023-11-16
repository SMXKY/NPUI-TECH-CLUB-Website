function renderPopUp(){
    const popUp = document.querySelector('.js-pop-up') ;
    const logBtn = document.querySelectorAll('.js-log-btn') ;
    const joinBtn = document.querySelectorAll('.js-join-btn') ;
    const closeBtn = document.querySelector('.js-close-btn') ;
    const joinForm = document.querySelector('.js-join-form') ;
    const logForm = document.querySelector('.js-login-form') ;
    const switchLogin = document.querySelector('.js-show-sign-in') ;
    const switchSignin = document.querySelector('.js-show-login') ;
    

    joinBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            popUp.classList.add('on-pop-up') ;
            joinForm.classList.add('on-form') ;
            logForm.classList.remove('on-form') ;
        }) ;
    }) ;

    logBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            popUp.classList.add('on-pop-up') ;
            logForm.classList.add('on-form') ;
            joinForm.classList.remove('on-form') ;
        }) ;
    }) ;

    closeBtn.addEventListener('click', () => {
        popUp.classList.remove('on-pop-up') ;
        joinForm.classList.remove('on-form') ;
        logForm.classList.remove('on-form') ;
    }) ; 

    switchLogin.addEventListener('click', () => {
        logForm.classList.add('on-form') ;
        joinForm.classList.remove('on-form') ;
    }) ;

    switchSignin.addEventListener('click', () => {
        logForm.classList.remove('on-form') ;
        joinForm.classList.add('on-form') ;
    }) ;
}

export {renderPopUp}