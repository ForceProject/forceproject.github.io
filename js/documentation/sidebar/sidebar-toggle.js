$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").css({
            top: $('header').height(),
    });
    $("#sidebar-wrapper").css({
            "-webkit-transition": "all 0.5s ease",
            "-moz-transition": "all 0.5s ease",
            "-o-transition": "all 0.5s ease",
            "transition": "all 0.5s ease"
    });
    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle").toggleClass("toggled");
});
