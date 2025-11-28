$(function () {
    $(".question").on("click", function () {
        $(this).next(".answer").slideToggle();
        $(this).toggleClass("active");
    });

    $(".question").hover(
        function () {
            $(this).css("color", "#0984e3");
        },
        function () {
            $(this).css("color", "");
        }
    );

    $(".question").on("dblclick", function () {
        $(".answer").slideUp();
        $(".question").removeClass("active");
    });

    $(".answer input").on("focus", function () {
        $(this).closest(".faq-item").find(".question").css("background-color", "#ffeaa7");
    });

    $(".answer input").on("blur", function () {
        $(this).closest(".faq-item").find(".question").css("background-color", "");
    });
});
