
$(document).ready(function () {

    var userNameDet = localStorage.getItem('currentUser');
    var passData = JSON.parse(userNameDet);
    $.ajax({
        type: 'POST',
        data: passData,
        url: '/getData',
        success: populateData,
        error: function (jqXHR, exception) {
            console.log(exception);
        },
    });

    function populateData(data) {
        var fName = data.firstName;
        var lName = data.lastName;
        var uName = data.username;
        var email = data.email;
        
        var fullname = fName + ' ' + lName;
        $("#LName").text(fullname);        
        $("#Email").text(email);
        $("#userName").text(uName);


        var actorArray = data.actor;
        var dataHeader = "<thead> <tr>";
        dataHeader = dataHeader + "<th>" + "Name" + "</th>";
        dataHeader = dataHeader + "<th>" + "Actor Image" + "</th>";
        dataHeader = dataHeader + "<th>" + "Actor Details" + "</th>";
        dataHeader = dataHeader + "<th>" + "Action" + "</th>"+"</th> </tr> </thead>";
        $("#tableData").empty();
        $("#tableData").append(dataHeader);
        $.each(actorArray, function (x, val) {
            var t = val;
            var tr = "<tr id=tr" + x + ">";
            tr = tr + "<td>" + t.name + "</td>";
            tr = tr + "<td> <img class='img-resposive' src=" + t.posterURL + "</img></td>";
            tr = tr + "<td> <a href=" + t.actorLink + ">" + "Click Here for Actor Details" + "</a></td>";
            tr = tr + "<td> <button id=bdn" + x + "></td>";
            tr = tr + "</td> </tr> ";
            $("#tableData").append(tr);
            $("#bdn" + x).addClass("glyphicon glyphicon-remove btn-danger");

            $("#bdn" + x).on("click", function () {
                $("#tr" + x).hide();

                var userNameDet = localStorage.getItem('currentUser');
                userNameDet = JSON.parse(userNameDet);
                var idData = userNameDet._id;
                var linkData = t.name;                
                dataDelete = { userName: userNameDet, actorLinkData: t.actorLink };
                    $.ajax({
                        type: 'DELETE',
                        data: dataDelete,
                        url: "/deleteData/" + idData + "/" + linkData,
                        success : function(){
                        }
                    })
            });
        });
    }
});

$(function () {    

            $("#loginbtn").click(function () {
                var username = $("#inputUsername").val();
                var password = $("#inputPassword").val();
                if (username == '' || password == '') {
                    $("#signupError").html("Please fill all the Details");
                }
                else {

                    var user = {
                        username: username,
                        password: password
                    };
                    $.ajax({
                        type: 'POST',
                        data: user,
                        url: '/login',
                        success: loginUser,
                        error: function (jqXHR, exception) {
                            if (jqXHR.status === 401) {
                                $("#wrongPassword").html("Incorrect username / password");
                            }
                        },
                    });
                }
            });

            function loginUser(user) {
                var url = 'profile.html';
                window.location.href = url;
                //event.stopPropagation();
                $.ajax({
                    type: 'POST',
                    data: user,
                    url: '/profile',
                    success: function (data) {
                        localStorage.setItem('currentUser', JSON.stringify(data));
                        var url = 'profile.html';
                        window.location.href = url;
                    }
                });
            }

            $("#logoutUser").click(function () {
                $.ajax({
                    type: 'POST',
                    url: '/logout',
                    success: logoutUser
                });
            });
            function logoutUser(data) {
                localStorage.clear(data);
                var url = 'index.html'
                window.location.href = url;
            }  

            $("#registerUser").click(function () {
                var firstName = $("#firstName").val();
                var lastName = $("#lastName").val();
                var username = $("#username").val();
                var email = $("#email").val();
                var password = $("#password").val();
                if (firstName == '' || lastName == '' || username == '' || email == '' || password == '') {
                    $("#signupError").html("Please fill all the Details");
                }
                else {
                    var user = {
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                        email: email,
                        password: password
                    };
                    $.ajax({
                        type: 'POST',
                        data: user,
                        url: '/signUp',
                        success: function (response) {
                            localStorage.setItem('currentUser', JSON.stringify(user));
                            var url = 'profile.html';
                            window.location.href = url;
                            //event.stopPropagation();
                        }
                    });
                }
            });

            $("#homebtn").click(function (e) {
                $.ajax({
                    type: 'GET',
                    url: '/loggedin',
                    success: function (data) {
                        // console.log(data);
                        if (data == '0') {
                            var url1 = "index.html";
                            window.location.href = url1;                            
                        }
                        else {
                            var show = "trueVal";
                            var url = "index.html?set=" + show;
                            window.location.href = url;
                            window.location.href = url;                            
                        }
                    }
                })
                e.preventDefault();
                e.stopPropagation();
            });
       
    });