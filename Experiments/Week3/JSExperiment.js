$(document).ready(function () {

    $("p.hideTest").click(function () {
        $(this).hide();        
    });

    $("#show").click(function () {
        $("p").show();
    });

    $(".fade").hide();

    $("button#fadeIn").click(function(){
        $(".fade").fadeIn();
    });

    $("button#fadeOut").click(function () {
        $(".fade").fadeOut();
    });

    $("#animate").click(function () {
        $(".animateImage").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });

    $(".CSS1").click(function () {
        $(this).css({
            "background-color": "red",
            "font-style": "italic",
            "fontFamily" : "Impact,Charcoal,sans-serif"
        })
    });

    $(".CSS2").click(function () {
        $(this).css({
            "color": "green",
            "font-style": "bold",
            "fontFamily": "Courier New"
        })
    });

    $('#refresh').click(function () {
        location.reload();
    });

    $(".showInfo").click(function () {
        var data = "";
        data += "Width of image: "  + $(".showInfo").width() + "</br>";
        data += "Height of image: " + $(".showInfo").height();
        $(".appendText").html(data);
    });

});
