export function navBarButtons(){
    const profileButton = document.querySelector('.js-profile-btn') ;
    const notificationButton = document.querySelector('.js-notification-btn') ;

    profileButton.addEventListener('click', () => {
        if(window.innerWidth > 683){
            if( document.querySelector('.js-profile-info').classList.contains('on-profile')){
                document.querySelector('.js-profile-info').classList.remove('on-profile') ;
                //document.querySelector('.tool-tip').classList.add('off-tool-tip') ;
            }else{
                document.querySelector('.js-profile-info').classList.add('on-profile') ;
            }
            //Checking if target element has not been click for the close effect

            document.addEventListener('click', (e) => {
                if(!document.querySelector('.js-profile-info').contains(e.target) && !profileButton.contains(e.target)){
                    document.querySelector('.js-profile-info').classList.remove('on-profile') ;
                }
            }) ;
        }else{
            window.location.href = '/profile' ;
        }
    }) ;

    notificationButton.addEventListener('click', () => {
        if(window.innerWidth > 683){
            if(document.querySelector('.js-notification-info').classList.contains('on-profile')){
                document.querySelector('.js-notification-info').classList.remove('on-profile') ;
                //document.querySelector('.tool-tip').classList.add('off-tool-tip') ;
            }else{
                document.querySelector('.js-notification-info').classList.add('on-profile') ;
            }
            //Checking if target element has not been click for the close effect

            document.addEventListener('click', (e) => {
                if(!document.querySelector('.js-notification-info').contains(e.target) && !notificationButton.contains(e.target)){
                    document.querySelector('.js-notification-info').classList.remove('on-profile') ;
                }
            }) ;
        }else{
            window.location.href = '/notifications' ;
        }
    }) ;
}