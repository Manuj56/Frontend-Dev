$(function () {
    $(".manager").on("click", function () {
        $("#teams .employee").removeClass("highlight");
        $(this).next("ul").find(".employee").addClass("highlight");
    });

    $(".employee").hover(
        function () {
            $(this).next(".contact").show();
        },
        function () {
            $(this).next(".contact").hide();
        }
    );

    $(".deptTitle").on("click", function () {
        $(".department").removeClass("dept-highlight");
        $(this).parent(".department").addClass("dept-highlight");
        $(this).parent().children("ul").find(".employee").addClass("highlight");
    });

    $("#randomEmployeeBtn").on("click", function () {
        var employees = $(".employee");
        employees.removeClass("highlight");
        if (employees.length > 0) {
            var randomIndex = Math.floor(Math.random() * employees.length);
            var selected = employees.eq(randomIndex);
            selected.addClass("highlight");
            selected.siblings(".employee").addClass("highlight");
        }
    });

    var collapsed = false;
    $("#toggleTeamsBtn").on("click", function () {
        if (!collapsed) {
            $("#teams").children().find("ul").slideUp();
            collapsed = true;
        } else {
            $("#teams").children().find("ul").slideDown();
            collapsed = false;
        }
    });
});
