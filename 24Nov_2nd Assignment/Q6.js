$(function () {
    function showMessage(text) {
        $("#message").text(text);
    }

    $("#topics").on("click", ".subscribeBtn", function () {
        var topic = $(this).closest(".topic");
        topic.addClass("subscribed");
        topic.attr("data-enabled", "true");
        showMessage("Subscribed to " + topic.data("name"));
    });

    $("#topics").on("click", ".unsubscribeBtn", function () {
        var topic = $(this).closest(".topic");
        topic.removeClass("subscribed");
        topic.attr("data-enabled", "false");
        showMessage("Unsubscribed from " + topic.data("name"));
    });

    $("#addTopicBtn").on("click", function () {
        var name = $("#newTopicName").val().trim();
        if (name !== "") {
            var newTopic = $('<div class="topic" data-name="' + name + '"><span>' + name + '</span> <button class="subscribeBtn">Subscribe</button> <button class="unsubscribeBtn">Unsubscribe</button></div>');
            $("#topics").append(newTopic);
            $("#newTopicName").val("");
            showMessage("New topic added: " + name);
        }
    });

    $("#removeEventsBtn").on("click", function () {
        var techTopic = $('.topic[data-name="Tech"]');
        techTopic.off("click");
        showMessage("Events removed from Tech topic");
    });
});
