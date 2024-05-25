$(document).ready(function () {
   
    $("#drop").click(function () {
        $('#dot').addClass("hidden");
        $('#drop').addClass("mr-10");
        $('#date').removeClass("hidden");
        
        $(this).toggleClass("active");
        var panel = $(this).next();
        if (panel.is(":visible")) {
            panel.slideUp();
            $("#arrowAnnounce").animate({ rotate: "0deg" });
        } else {
            panel.slideDown();
            $("#arrowAnnounce").animate({ rotate: "180deg" });
        }
    }); 
});