var hamburger = document.getElementById("hamburger");
var menu = document.getElementsByClassName("menu");
var submen = menu[0]
submen.style.display = "none";

$(document).ready(function(){
    $(".single-item").slick({
        dots: true,
        variableWidth: true,
    });


    

    hamburger.onclick = function(){
    

        if (submen.style.display == "none"){
            console.log('button1')
            for (const li of menu){
                li.style.display = "block"
            }
        } else {
            console.log('button')
            for (const li of menu) {
                li.style.display = "none"
            }
        }

    }



});




