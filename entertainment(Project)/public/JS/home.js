
$(document).ready(function () {

    var pURL = "https://api.themoviedb.org/3/person/popular?api_key=854cdb7181f4686d285c7fb0d13802c1";
    var limit = 20;
    var fadeTime = 500;
    var slideTime = 8000;
    var currPointer = 1;
    var nextPointer = 1;

    /* Ajax Call and it's parameter are set here */
    var AjaxCall = {
        url: pURL,
        success: getActors,
        error: errorFunction,
        dataType: "JSONP",
        cache: false
    };
    $.ajax(AjaxCall);

    /* Function to create the DOM object on success */
    function getActors(data) {
        $.each(data.results, function (index, value) {
            var imgSrc = value.profile_path == null ? "./Images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500" + value.profile_path;
            var actorName = value.name == null ? "Name not available" : value.name;
            var userName1 = localStorage.getItem('currentUser');
            if (userName1 != null) {
                if (limit > 0) {
                    $("#topActors").append("<div class='col-md-3'><img src =" + imgSrc + " id=img" + index + "><p><a href='actor.html?id=" + value.id + "' target='_blank' id=" + index + " >" + actorName + "</a><button class='btn btn-xs glyphicon glyphicon-star' id=bookmark" + index + "/></p></div>");
                    limit--;
                }
            } else {
                if (limit > 0) {
                    $("#topActors").append("<div class='col-md-3'><img src =" + imgSrc + " id=img" + index + "><p><a href='actor.html?id=" + value.id + "' target='_blank' id=" + index + " >" + actorName + "</a></p></div>");
                    limit--;
                }
            }
            $("#bookmark" + index).click(function () {
                var userName = localStorage.getItem('currentUser');
                var userId = JSON.parse(userName);
                var actorName = $("#" + index).text();                
                var actorDetail = $("#" + index)[0].href;
                var imageDetail = $("#img" + index)[0].currentSrc;                
                var details = {
                    userId: userId,
                    actorName: actorName,
                    actorDetail: actorDetail,
                    imageDetail: imageDetail
                }                
                    $.ajax({
                        type: 'PUT',
                        data: details,
                        url: '/saveBookmark',
                        success: function(){
                        
                        }
                    })
            });
        })
        SliderFunction();   /* Function to build the carousel data */

    }


    /* Ajax call for the Slider Data */

    function SliderFunction() {
        var MovieURL = "https://api.themoviedb.org/3/movie/popular?api_key=854cdb7181f4686d285c7fb0d13802c1";
        var movieSettings = {
            url: MovieURL,
            success: getMovieInfo,
            error: movieFailure,
            dataType: "JSONP",
            cache: false
        };
        $.ajax(movieSettings);
    }

    /* Function to build the carousel data on success*/
    function getMovieInfo(data) {
        limit = 5;
        $.each(data.results, function (index, value) {
            if (limit > 0) {
                var profileURLCreate = value.poster_path == null ? "./Images/not_available_icon.jpg" : "http://image.tmdb.org/t/p/w500" + value.poster_path;
                var id = value.id;
                var name = value.title == null ? "Name not available" : value.title;
                if (limit == 5) {
                    var sliderImg1 = "<div class='item active'><img src ='" + profileURLCreate + "' class='img-responsive'></a></div>"
                } else {
                    var sliderImg1 = "<div class='item'><img src ='" + profileURLCreate + "' class='img-responsive'></a></div>"
                }
                $(".timepass").append(sliderImg1);
                limit--;
            }
            else {
                return true;
            }
        });
        $('#myCarousel').carousel({
            interval: 2500
        });
    }


    //$(document).ajaxComplete(function () {            
    //    alert("Time Pass");            
    //});

    /* Function call when the Ajax call fails */
    function errorFunction() {
        $('#topActors').empty();
        $('#topActors').html("<b> The asynchronous call to the API failed. Try Reloading the Page. </b>");
    }

    /* Function call when the Ajax call fails */
    function movieFailure(data) {
        $("#movies").append("<p> The asynchronous call to the API failed. Try Reloading the Page.");
    }

    $("#homebtn").click(function () {
        var getVal = localStorage.getItem('currentUser');
        if (getVal != null) {
            $("#loginbtn").hide();
        }
    });
});

