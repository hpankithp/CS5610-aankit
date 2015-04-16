(function () {
    /* Getting the Query parameter from the URL */
    var tvshowid = project.getURLParameter("id");
    $(document).ready(function () {
        if (tvshowid == "") {
            tvshowid = 1396;
        }

        var TVURl = "https://api.themoviedb.org/3/tv/" + tvshowid + "?api_key=854cdb7181f4686d285c7fb0d13802c1&append_to_response=credits";

        var movieSettings = {
            url: TVURl,
            success: displayTVInfo,
            error: displayTVInfoFailure,
            dataType: "JSONP",
            cache: false
        };

        $.ajax(movieSettings);

        /* This function pareses the Json and create the DOM Element*/
        function displayTVInfo(data) {

            var profileImage = data.poster_path == null ? "images/not_available_icon.jpg" : data.poster_path;
            var reldate = data.first_air_date == null ? "ReleaseDate not availiable" : data.first_air_date;
            var noSeasons = data.no_of_seasons == null ? "Seasons not availiable" : data.no_of_seasons;
            var status = data.status == null ? "Status not available" : data.status;
            var avgCount = data.vote_average == null ? "Average Vote not available" : data.vote_average;

            $("#profileImage").append("<img src = 'http://image.tmdb.org/t/p/w500" + profileImage + "'></img>");
            $("#name").html(data.name);
            $("#reldate").append(reldate);
            $("#noSeasons").append(noSeasons);
            $("#status").append(status);
            $("#avgCount").append(avgCount);            
            $("#overview").append("<p>" + data.overview + "</p>");
            $.each(data.credits.cast, function (index, value) {

                var actor = value.name == null ? "Not available" : value.name;
                var profile = value.profile_path == null ? "images/not_available_icon.jpg" : value.profile_path;
                var character = value.character == null ? "Not available" : value.character;
                var img = "<img src='http://image.tmdb.org/t/p/w500" + profile + "' class='img-responsive'></img>";
                var actorNameCharacter = "<p><a href='actor.aspx?id=" + value.id + "'>" + actor + "</a>&nbsp; as &nbsp;" + character + "</p>";
                $("#cast table").append("<tr><td>" + img + "</td><td>" + actorNameCharacter + "</td></tr>");
            });
        }


        /* Function when the Failure Occurs */
        function displayTVInfoFailure(data) {
            $("#overview").append("<p> The asynchronous call to the API failed. Try Reloading the Page.");

        }
        $("#modifyUL li").removeClass("active");
        $("#modifyUL li:nth-child(3)").addClass("active");
    })
})();