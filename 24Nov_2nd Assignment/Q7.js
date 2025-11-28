$(function () {
    function filterCourses() {
        var query = $("#searchInput").val().toLowerCase();
        var count = 0;
        $("#courseList li").each(function () {
            var text = $(this).text();
            var lower = text.toLowerCase();
            if (query === "") {
                $(this).show();
                $(this).removeClass("match");
            } else if (lower.indexOf(query) !== -1) {
                $(this).show();
                $(this).addClass("match");
                count++;
            } else {
                $(this).hide();
                $(this).removeClass("match");
            }
        });
        $("#matchCount").text("Matched Courses: " + count);
    }

    $("#searchInput").on("keyup", function () {
        filterCourses();
    });

    $("#clearSearchBtn").on("click", function () {
        $("#searchInput").val("");
        filterCourses();
    });
});
