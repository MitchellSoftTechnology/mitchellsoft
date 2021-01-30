$(document).ready(function(){

    $("#company-name").animate({left: $("#company-name").parent().width() / 2 - $("#company-name").width() / 2}, 1000, 'linear');
    $("#company-tec").animate({right: $("#company-tec").parent().width() / 2 - $("#company-tec").width() / 2}, 1000, 'linear');

})


function scrolltoview(itemID){
    let item = document.getElementById(itemID);
    console.log(item);
    item.scrollIntoView({behavior: 'smooth'});
}