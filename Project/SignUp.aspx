<%@ Page Language="C#" %>

<!DOCTYPE html>

<script runat="server">

</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Sign Up</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css" />

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="CSS/login.css" />
</head>
<body>
    <div class="container">
        <div id="header">
            <br />
            <h1 id="siteName">Entertainment Space
            </h1>
            <div id="movieImage">
                <img src="Images/Movies.jpg" alt="No image Found" />
            </div>
        </div>
        <form>
            <div class="mainContainer">
                <div class="form-group">
                    <div class="jumbotron">
                        <h2>SignUp Page</h2>
                    </div>
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input type="email" class="form-control" id="exampleInputEmailUser" placeholder="Enter User Name" />

                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Repeat Password</label>
                    <input type="password" class="form-control" id="exampleInputPasswordRepeat" placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-default">Create Profile</button>
            </div>
        </form>
    </div>
    <div id="footer">
        <p>Copyright © 2015, All Rights Reserved. Designed and Developed by Ankit Agrawal </p>
    </div>
</body>
</html>
