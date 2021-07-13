var lightClasses = ["light-p", "light-bigfonts", "light-top-bg", "light-container", "light-card"];
var darkClasses = ["dark-p", "dark-bigfonts", "dark-top-bg", "dark-container", "dark-card"];

$(".switch").click(function() {
    if ($("input").prop("checked")) {
        for (var i = 0; i < lightClasses.length; i++) {
            $("." + lightClasses[i]).toggleClass(darkClasses[i]);
        }
    }
});