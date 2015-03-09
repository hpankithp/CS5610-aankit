

function ballUp() {
    $("#ball").animate({ top: "1px" }, "slow", "swing", ballDown);
}


function ballDown() {
    $("#ball").animate({ top: "150px" }, "slow", "swing", ballUp);
}


$(document).ready(function () {
    ballUp();
});