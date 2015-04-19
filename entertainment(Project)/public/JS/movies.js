(function () {


    $(document).ready(function () {

        var MovieURL = "https://api.themoviedb.org/3/movie/popular?api_key=854cdb7181f4686d285c7fb0d13802c1";
        var movieSettings = {
            url: MovieURL,
            success: getMovieData,
            error: movieFailure,
            dataType: "JSONP",
            cache: false
        };
        $.ajax(movieSettings);

        /* Success Function to create the DOM Element */
        function getMovieData(data) {
            $.each(data.results, function (index, value) {
                var profile_path = value.poster_path == null ? "./Images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500" + value.poster_path;
                var id = value.id;  
                var name = value.title == null ? "No name available" : value.title;
                $("#moviesData").append("<div><a href='movieDetails.html?id=" + id + "' target='_blank'><img src ='" + profile_path + "'></a></div>");
            });
        }

        function movieFailure(data) {
            $("#moviesData").append("<p> The asynchronous call to the API failed. Try Reloading the Page.");
        }
        $("#modifyUL li").removeClass("active");
        $("#modifyUL li:nth-child(2)").addClass("active");
    })
})();