$(document).ready(function(){

    $("#company-name").delay(800).fadeIn(2000);
    $("#company-tec").delay(1000).fadeIn(2000);
    // $("#company-name").animate({left: $("#company-name").parent().width() / 2 - $("#company-name").width() / 2}, 1000, 'linear');
    // $("#company-tec").animate({right: $("#company-tec").parent().width() / 2 - $("#company-tec").width() / 2}, 1000, 'linear');

})


function scrolltoview(itemID){
    let item = document.getElementById(itemID);
    console.log(item);
    item.scrollIntoView({behavior: 'smooth'});
}

// This Function looks at the screen size and changes the css on the Css on the navigation bars
if ($(window).width() >= 769){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.navbar').css({"background-color":"#1C2331"});
        } 
        else{
            $('.navbar').css({"background-color":"rgba(0,0,0,.2)"});
        }
    });
}