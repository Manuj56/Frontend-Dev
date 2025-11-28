$(function () {
    var registeredEmails = ["test@example.com", "user@domain.com"];

    function isEmailValid(email) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function isEmailUnique(email) {
        return registeredEmails.indexOf(email.toLowerCase()) === -1;
    }

    $("#regForm").on("submit", function (e) {
        e.preventDefault();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var password = $("#password").val();
        var valid = true;

        $("#name, #email, #password").css("border", "");

        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }
        if (!isEmailValid(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        } else if (!isEmailUnique(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
            $("#successMessage").text("Email already registered.");
        }
        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        if (valid) {
            $("#successMessage").text("Registration successful.");
            registeredEmails.push(email.toLowerCase());
        } else if ($("#successMessage").text() === "Registration successful.") {
            $("#successMessage").text("");
        }
    });
});
