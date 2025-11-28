$(function () {
    var postCount = 6;

    $("#addPostBtn").on("click", function () {
        var newPost = $('<article class="post"><h2 class="title">New Post ' + postCount + '</h2><p>New blog content.</p></article>');
        $("#posts").append(newPost);
        postCount++;
    });

    $("#prependPostBtn").on("click", function () {
        var featuredPost = $('<article class="post"><h2 class="title">Featured Post</h2><p>This is a featured blog post.</p></article>');
        $("#posts").prepend(featuredPost);
    });

    $("#removeLastPostBtn").on("click", function () {
        $("#posts .post").last().remove();
    });

    $("#addTagBeforeBtn").on("click", function () {
        var tagText = $("#tagText").val().trim();
        if (tagText !== "") {
            $("#posts .title").each(function () {
                $(this).before('<span class="tag">' + tagText + '</span>');
            });
        }
    });

    $("#addTagAfterBtn").on("click", function () {
        var tagText = $("#tagText").val().trim();
        if (tagText !== "") {
            $("#posts .title").each(function () {
                $(this).after('<span class="tag">' + tagText + '</span>');
            });
        }
    });

    $("#highlightKeywordBtn").on("click", function () {
        var keyword = $("#keywordInput").val().toLowerCase();
        $("#posts .post").removeClass("highlight-post");
        if (keyword !== "") {
            $("#posts .post").each(function () {
                var text = $(this).text().toLowerCase();
                if (text.indexOf(keyword) !== -1) {
                    $(this).addClass("highlight-post");
                }
            });
        }
    });
});
