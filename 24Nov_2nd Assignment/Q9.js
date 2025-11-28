jq1(function () {
    var slides = jq1("#carousel .slide");
    var index = 0;
    setInterval(function () {
        slides.removeClass("active-slide");
        index = (index + 1) % slides.length;
        slides.eq(index).addClass("active-slide");
    }, 3000);

    jq1(".widget").on("click", function () {
        jq1(".widget").removeClass("active-widget");
        jq1(this).addClass("active-widget");
    });
});

jq2(function () {
    jq2("#openModalBtn").on("click", function () {
        jq2("#modalOverlay").fadeIn();
    });

    jq2("#closeModalBtn").on("click", function () {
        jq2("#modalOverlay").fadeOut();
    });

    var tooltip = jq2("#tooltipBox");
    jq2(".tooltip-target").on("mouseenter", function (e) {
        var text = jq2(this).data("tooltip");
        tooltip.text(text);
        tooltip.css({ top: e.pageY + 5, left: e.pageX + 5 });
        tooltip.show();
    }).on("mousemove", function (e) {
        tooltip.css({ top: e.pageY + 5, left: e.pageX + 5 });
    }).on("mouseleave", function () {
        tooltip.hide();
    });
});
