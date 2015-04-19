(function () {


    /* Getting the Query parameter from the URL */
    var movieid = project.getURLParameter("id");
    $(document).ready(function () {
        if (movieid == "") {
            movieid = 550;
        }
        var URLMovie = "https://api.themoviedb.org/3/movie/" + movieid + "?api_key=854cdb7181f4686d285c7fb0d13802c1&append_to_response=credits";
        var ajaxMovie = {
            url: URLMovie,
            success: getMovieInfo,
            error: movieFailure,
            dataType: "JSONP",
            cache: false
        };

        $.ajax(ajaxMovie);

        /* Function to create the DOM object on success */
        function getMovieInfo(data) {
            var thumbnail = data.poster_path == null ? "Images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500" + data.poster_path;
            var runtime = data.runtime == null ? "Seasons not availiable" : data.runtime;
            var revenue = data.revenue == null ? "Status not available" : data.revenue;
            var revenue = revenue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            var dollarSign = "$";
            var revenue = dollarSign.concat(revenue);
            var reldate = data.release_date == null ? "ReleaseDate not availiable" : data.release_date;           
            var vote = data.vote_average == null ? "vote Average is not available" : data.vote_average;

            $("#thumbnail").append("<img src ='" + thumbnail + "'></img>");
            $("#reldate").append(reldate);
            $("#runtime").append(runtime);
            $("#revenue").append(revenue);
            $("#vote").append(vote);
            $("#overview").append(data.overview);
            $("#name").append(data.title); 
            $("#tagline").append(data.tagline);

            $.each(data.credits.cast, function (index, value) {
                var actor = value.name == null ? "Not available" : value.name;
                var createProfileImage = value.profile_path == null ? "Images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500" + value.profile_path;
                var character = value.character == null ? "Not available" : value.character;
                var imageTag = "<img src='" + createProfileImage + "' class='img-responsive'></img>";
                var actorNameCharacter = "<p><a href='actor.html?id=" + value.id + "'>" + actor + "</a>&nbsp; as &nbsp;" + character + "</p>";
                $("#cast table").append("<tr><td>" + imageTag + "</td><td>" + actorNameCharacter + "</td></tr>");
            });
        }

        /* Function call when the Ajax call fails */
        function movieFailure(data) {
            $("#overview").append("<p> The asynchronous call to the API failed. Try Reloading the Page.");
        }
        $("#modifyUL li").removeClass("active");
        $("#modifyUL li:nth-child(2)").addClass("active");
    })
})();