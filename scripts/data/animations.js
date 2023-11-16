function revealAnimation(){
    document.querySelectorAll('.pc-templates').forEach((element) => {
        element.classList.add('hiden') ;
    }) ;
    
    document.querySelectorAll('.tc-template').forEach((element) => {
        element.classList.add('hiden') ;
    }) ;
    
    document.querySelectorAll('.page-rc').forEach((element) => {
        element.classList.add('hiden') ;
    }) ;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show') ;
            }else{
                entry.target.classList.remove('show') ; 
            }
        }) ;
    }) ;


    const hiddenElements = document.querySelectorAll('.hiden') ;

    hiddenElements.forEach((e1) => observer.observe(e1)) ;
}

export {revealAnimation}