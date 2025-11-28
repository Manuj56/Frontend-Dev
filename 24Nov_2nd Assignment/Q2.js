$(function () {
    $("[data-discount]").each(function () {
        $(this).addClass("discounted");
    });

    $(".product").on("click", function (e) {
        if (!$(e.target).hasClass("favorite-icon")) {
            $(".product").removeClass("highlighted");
            $(this).addClass("highlighted");
            if ($(this).data("stock") === "out") {
                alert("This product is out of stock");
            }
        }
    });

    $(".product").hover(
        function () {
            $(this).find(".details").show();
        },
        function () {
            $(this).find(".details").hide();
        }
    );

    $(".favorite-icon").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("selected");
    });
});
