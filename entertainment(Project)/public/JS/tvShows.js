(function () {
    $(document).ready(function () {
        var MovieURL = "https://api.themoviedb.org/3/tv/popular?api_key=854cdb7181f4686d285c7fb0d13802c1";
        var movieSettings = {
            url: MovieURL,
            success: getMovieInfo,
            error: movieFailure,
            dataType: "JSONP",
            cache: false
        };

        $.ajax(movieSettings);
        function getMovieInfo(data) {
            $.each(data.results, function (index, value) {
                var profile_path = value.poster_path == null ? "./Images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500" + value.poster_path;
                var id = value.id; 
                var name = value.title == null ? "Name not available" : value.title;                
                $("#tvshowsData").append("<div><a href='tvShowDetails.html?id=" + id + "' target='_blank'><img src ='" + profile_path + "'></a></div>");
            });
        }

        function movieFailure(data) {
            $("#tvshowsData").append("<p> The asynchronous call to the API failed. Try Reloading the Page.");
        }

        $("#modifyUL li").removeClass("active");
        $("#modifyUL li:nth-child(3)").addClass("active");
    })
})();