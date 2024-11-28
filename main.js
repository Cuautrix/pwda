
if('serviceWorker' in navigator){
    console.log('Service work del navegador');

    navigator.serviceWorker.register('./sw.js')
                            .then(res=> console.log('serviceWorker al 100',res))
                            .catch(err => console.log('serviceWorker caido',err));
}else{
    console.log('No puedes usar los serviceWorker del navegador');
}

//scroll suavisado
$(document).ready(function(){
    console.log("Hola mundo")
    $("#menu a").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
})