// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(".profile a").click(function() {
    $(".profilebox").toggleClass("hidden");
});

$(".maincontentbox").click(function() {
    $(".profilebox").addClass("hidden");
});
