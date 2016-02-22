$(function() {

    //Animate sidebar dropdowns

    $(".user-img").on("click", function() {
        $(this).closest('section').find('#user-dropdown').css({"left": "-100%"}).appendTo(this.closest(".user"))
            .animate({
                "left": 0
            }, 400);

        var imageSource = $(this).find("img").attr("src");
        $("#user-dropdown").find("#dropdown-img").attr("src", imageSource);
    });

    $("#user-dropdown").find("img").on("click", function() {
        $(this).closest("#user-dropdown").animate({
            "left": "-100%"
        })
    });

    //Animate responsive sidebar

    $("#toggle-sidebar").on("click", function() {
        $(this).closest(".app-wrapper").find(".app-sidebar").toggleClass("sidebar-pushed");
        $(this).closest(".app-wrapper").find(".app-main").toggleClass("pushed-right");
        $(this).toggleClass("btn-reversed");
    })
});
