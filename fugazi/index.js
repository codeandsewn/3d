window.onload = function() {

    $(".container a").addClass("loaded");

    var el = $("#distort").find("feDisplacementMap");
    el.attr("scale", 300)
    el.animate(
    { scale: 300 },
    {
        duration: 5000,
        step: function(now) { $(this).attr("scale", 300 - now); }
    });

}