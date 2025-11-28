$(function () {
    function setGreeting() {
        var h = new Date().getHours();
        var text;
        if (h < 12) {
            text = "Good Morning!";
        } else if (h < 18) {
            text = "Good Afternoon!";
        } else {
            text = "Good Evening!";
        }
        $("#mainGreeting").text(text);
    }

    setGreeting();

    $("#changeGreetingBtn").on("click", function () {
        $("#mainGreeting").text("You are capable of amazing things. Keep going!");
    });

    $("#toggleWelcomeBtn").on("click", function () {
        $("#welcomeMessage").toggle();
    });

    $("#mainGreeting").on("click", function () {
        alert("Greeting clicked");
    });

    $("#extraBtn").on("click", function () {
        $("#subMessage").text("You clicked the extra button.");
    });
});
