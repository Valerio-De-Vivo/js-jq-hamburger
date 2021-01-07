$(document).ready(function () {
    $('.header-right > a').click(function(){
        $('.hamburger-menu').show(500);
    })

    $('.close').click(function(){
        $('.hamburger-menu').hide(500);
    })
});