$(document).ready(function(){
    // These fade in the company logos
    $("#company-name").delay(800).fadeIn(2000);
    $("#company-tec").delay(1000).fadeIn(2000);
})

// This function Scrolls to seleted items down screen in smooth motion.
function scrolltoview(itemID){
    let item = document.getElementById(itemID);
    item.scrollIntoView({behavior: 'smooth'});
}

// This Function looks at the screen size and changes the css on the navigation bars.
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

// This function is a work around to close the navbar in mobile view after a button click.
$('.navbar-nav li a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// This function gives active 
$('.navbar-nav li').click(function() {
    $("#home").removeClass('active');
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
});

// This function gives active to the about section if the boucing icon is clicked
$('.bounce').click(function() {
    $("#home").removeClass('active');
    $('.navbar-nav li').removeClass('active'); 
    $(".about").addClass('active');
});

// This funtion gives the Home icon an active css class if the page has 
// returned to the top.
$(document).scroll(function() { 
    if($(window).scrollTop() === 0) {
    $('.navbar-nav li').removeClass('active');
    $(".about").removeClass('active');
    $("#home").addClass('active');
    }
});