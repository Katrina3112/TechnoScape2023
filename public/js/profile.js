$(document).ready(function () {
    $("#accordion").click(function () {
        $(this).toggleClass("active");
        var panel = $(this).next();
        if (panel.is(":visible")) {
            panel.slideUp();
            $("#arrow").animate({ rotate: "0deg" });
        } else {
            panel.slideDown();
            $("#arrow").animate({ rotate: "180deg" });
        }
    });
});
