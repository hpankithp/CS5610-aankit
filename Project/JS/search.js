
(function () {

    /* Getting the Query parameter from the URL */
    var qry = project.getURLParameter("qry");
    var totPages = 1;
    var currPage = 1;
    var totResults = 1;

    $(document).ready(function () {

        if (qry.length > 22) {              /* Check the lenght of string to avoid any invalid long values */

            $("#searchActor").append("<b>A Name of more than 20 characters is not allowed</b>");

            $("#resultStats").css("visibility", "hidden");
            $("#next").css("visibility", "hidden");
            $("#previous").css("visibility", "hidden");
        }

        if (qry.length == 0) {  /* Handling the scenario of no values given in input */
            $("#searchActor").append("<b>A Name of actor should be more than zero characters</b>");
            $("#resultStats").css("visibility", "hidden");
            $("#next").css("visibility", "hidden");
            $("#previous").css("visibility", "hidden");
        }

        else {    
            var personURl = "https://api.themoviedb.org/3/search/person?api_key=854cdb7181f4686d285c7fb0d13802c1&query=" + qry;
            function makeAjax(currPageNo) {
                var ajaxParameters = {
                    url: personURl + "&page=" + currPageNo,
                    success: getActorsData,
                    error: actorFailure,
                    dataType: "JSONP",
                    cache: false
                };

                $.ajax(ajaxParameters);
            };

            /* Function to create the DOM object on success */
            function getActorsData(data) {
                totPages = data.total_pages;
                if (totPages == 1) {
                    $("#next").css("visibility", "hidden");
                }
                totResults = data.total_results;
                if (totResults == 0) {
                    $("#next").css("visibility", "hidden");
                }
                $.each(data.results, function (index, value) {
                    var profileURLGenerate = value.profile_path == null ? "./images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500" + value.profile_path;
                    var name = value.name == null ? "No name available" : value.name;
                    var id = value.id;  
                    $("#searchActor").append("<div class='col-md-3'><img src ='" + profileURLGenerate + "'><p><a href='actor.aspx?id=" + id + "' target='_blank'>" + name + "</a></p></div>");
                });
                $("#totResults").empty(); $("#totResults").append("<p><b>Total Results:</b>" + totResults + "</p>"); 
                $("#totPages").empty(); $("#totPages").append("<p><b>Total Pages:</b>" + totPages + "</p>");
            }


            /* Function call when the Ajax call fails */
            function actorFailure(data) {
                $("#searchActor").append("<p> The asynchronous call to the API failed. Try Reloading the Page.");
            }

            makeAjax(currPage);
            $("#previous").css("visibility", "hidden");

            /*Next Click Event*/

            $("#next").click(function () {
                $("#searchActor").empty();
                currPage += 1;
                makeAjax(currPage);
                if (currPage == totPages) {
                    $("#next").css("visibility", "hidden");
                }
                if (currPage > 1) {
                    $("#previous").css("visibility", "visible");
                }
            });

            /*Previous Click Event*/

            $("#previous").click(function () {
                $("#searchActor").empty();
                currPage -= 1;
                makeAjax(currPage);
                if (currPage == 1) {
                    $("#previous").css("visibility", "hidden");
                }
                if (currPage != totPages) {
                    $("#next").css("visibility", "visible");
                }
            });
        }
    });
})();




