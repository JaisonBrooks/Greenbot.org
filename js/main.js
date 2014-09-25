/**
 * Created by Jaisonbrooks on 9/24/2014.
 */

$(function() {
    var kitty_div = $("#img-kitty");
/*    var kitty_current_url = "";
    $(kitty_div).click(function() {
        kitty_current_url = $(this).attr("src");
        console.log("Kitty image clicked w/ URL = " + kitty_current_url);
        $(this).attr("src").replace($(this).attr("src"), "http://lorempixel.com/g/580/580/cats/");
    });*/
    $(kitty_div).attr('src', 'http://lorempixel.com/g/580/580/cats/');
});