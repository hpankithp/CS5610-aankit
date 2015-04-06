(function () {


    $(document).ready(function () {

        var MovieURL = "https://api.themoviedb.org/3/movie/popular?api_key=854cdb7181f4686d285c7fb0d13802c1";

        var movieSettings = {
            url: MovieURL,
            success: displayMovieInfo,
            
            dataType: "JSONP",
            cache: false
        };

        $.ajax(movieSettings);

        /* This is the success function which parses the JSON Data to generate HTML Code for each TV Show to displayed on the screen */
        function displayMovieInfo(data) {

            $.each(data.results, function (index, value) {

                var profile_path = value.poster_path == null ? "./images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500/" + value.poster_path;
                var name = value.title == null ? "No name available" : value.title;
                var id = value.id;   // cannot be null

                $("#movies").append("<div><a href='movieDetails.aspx?id=" + id + "' target='_blank'><img src ='" + profile_path + "'></a></div>");


            });

        }
    })



})();