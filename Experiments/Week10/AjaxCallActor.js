(function () {


    $(document).ready(function () {
        var limit = 10;
        var MovieURL = "https://api.themoviedb.org/3/person/popular?api_key=854cdb7181f4686d285c7fb0d13802c1";

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

                var imgSrc = value.profile_path == null ? "./images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500/" + value.profile_path;
                var actorName = value.name == null ? "Name not available" : value.name;
                if (limit > 0) {
                    $("#movies").append("<div class='col-md-3'><img src =" + imgSrc + "><p><a href='actor.aspx?id=" + value.id + "' target='_blank'>" + actorName + "</a></p></div>");
                    limit--;
                }});

        }
    })



})();