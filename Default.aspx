<%@ Page Language="C#" %>

<script runat="server">  
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset='utf-8' />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="defaultPage.css" />
    <title>Ankit's Home Page</title>
</head>
<body>
    <div class="pading">
        <form id="form1" runat="server">
            <h1>Ankit Agrawal</h1>
            <div>
                <ul class="main_nav">
                    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
                    <li><a href="statistics/" target="_blank">Statistics</a></li>
                    <li><a href="source/" target="_blank">Source</a></li>
                    <li><a href="search/" target="_blank">Search</a></li>
                    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
                    <li><a href="textview/" target="_blank">TextView</a></li>
                    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
                    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
                    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
                    <li><a href="blog/" target="_blank">Blog</a></li>                   
                </ul>
                <div id="mainContainer" class="cont">
                    <div class="profilePic">
                        <img src="Project/Images/ProfilePic2.JPG" height="300" width="280">                      
                    </div>
                    <div>
                        <p>
                            I am a graduate student doing masters in Computer Science at Northeastern University.
                                This website is being developed for
    CS 5610 Web Development Course under the guidance of                               
                                Jose Annunziato. Grabbing the opportunity offered by the Web Development course I am                            
                                developing this website.
                                Apart from the Web Development course, I have taken the course like Hadoop (Map Reduce) , Information Retrieval, Introduction to Databasese and Program Design Paradigms.
                                In this course I got deep learning about jQuery, CSS and box-model, HTML 5, Angular JS,Node JS and MongoDB.
                            This Page has been made responsive without using BootStrap.
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="subLinks">
        <div class="firstCol">
            <a href="Project/Home.aspx">
                <div class="imgDivLnk">
                    <img class="imgActual" src="Project/Images/Obolon_project.gif">
                    <h3>Project</h3>
                </div>
            </a>
        </div>
        <div class="secondCol">
            <a href="story/index.htm?../Experiments/story.txt">
                <div class="imgDivLnk">
                    <img class="imgActual" src="Project/Images/Experiments.gif">
                    <h3>Experiments</h3>
                </div>
            </a>
        </div>
        <div class="thirdCol">
            <a href="https://github.com/hpankithp/CS5610-aankit">
                <div class="imgDivLnk">
                    <img class="imgActual" src="Project/Images/github.jpg">
                    <h3>Github</h3>
                </div>
            </a>
        </div>
        <div class="fourthCol">
            <a href="https://github.com/hpankithp/CS5610-aankit">
                <div class="imgDivLnk">
                    <img class="imgActual" src="Project/Images/documentation.jpg">
                    <h3>Doucumentation</h3>
                </div>
            </a>
        </div>
    </div>
    <br />
    <hr />
    <div class="contactMe">
        <div class="time-pass">
            <div class="column-arrange-1">
                <a href="https://www.facebook.com/ankit.agrawal.3551380">
                    <img src="Project/Images/facebook.jpg">
                </a>
            </div>
            <div class="column-arrange-2">
                <a href="https://plus.google.com/u/0/">
                    <img src="Project/Images/GooglePlus.jpg"></a>
            </div>
            <div class="column-arrange-3">
                <a href="mailto:agrawal.ank@husky.neu.edu">
                    <img src="Project/Images/mail.png">
                </a>
            </div>
            <div class="column-arrange-4">
                <a href="https://www.linkedin.com/pub/ankit-agrawal/79/910/891">
                    <img src="Project/Images/linkedin.png"></a>
            </div>
        </div>
    </div>
    <div id="footer">
        <div class="copyRight">Copyright © 2015, All Rights Reserved. Designed and Developed by Ankit Agrawal </div>
    </div>
</body>
</html>
