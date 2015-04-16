(function () {
    var personid = project.getURLParameter("id");
    $(document).ready(function () {
        if (personid == "") {
            personid = 17419;
        }
        var actorURL = "https://api.themoviedb.org/3/person/" + personid + "?api_key=854cdb7181f4686d285c7fb0d13802c1&append_to_response=movie_credits,tv_credits";
        var ajaxParamas = {
            url: actorURL,
            success: getInfo,
            error: infoFailure,
            dataType: "JSONP",
            cache: false
        };
        $.ajax(ajaxParamas);
        function getInfo(data) {
            getMovieInfo(data);
            getActorInfo(data);
        }
        function getMovieInfo(data) {
            $.each(data.movie_credits.cast, function (index, value) {
                var releaseDate = value.release_date == null ? "yyyy-mm-dd" : value.release_date;
                var title = value.title == null ? "Title Not available" : value.title;
                $("#movies table").append("<tr><td>" + releaseDate + "</td><td><a href='movieDetails.aspx?id=" + value.id + "'>" + title + "</a>" + "</td></tr>");
            });
        }

        function getActorInfo(data) {
            var profileImage = data.profile_path == null ? "images/not_available_icon.jpg" : data.profile_path;
            var birthPlace = data.place_of_birth == null ? "BirthPlace not availiable" : data.place_of_birth;
            var popularity = data.popularity == null ? "Popularity Index not available" : data.popularity.toFixed(2);
            var homepage = data.homepage == null ? "Popularity Index not available" : data.homepage;
            var bday = data.birthday == null ? "BirthDay not availiable" : data.birthday;            
            if (profileImage.indexOf("not_available_icon.jpg") == -1) {
                $("#profileImage").append("<img src = 'http://image.tmdb.org/t/p/w500" + profileImage + "' class='img-responsive'></img>");
            }
            else {
                $("#profileImage").append("<img src = './images/not_available_icon.jpg' class='img-responsive'></img>");
            }
            $("#name").html(data.name);
            $("#bday").append(bday);
            $("#birthPlace").append(birthPlace);
            $("#popularity").append(popularity);
            $("#homepage").append("<a href='" + homepage + "' target='_blank'>Link</a>");           
            $("#wikiText").append("<p>" + data.biography + "</p>");
        }

        function infoFailure(data) {
            $("#wikiText").append("<p> The asynchronous call to the API failed. Try Reloading the Page.");
        }
    })   
})();