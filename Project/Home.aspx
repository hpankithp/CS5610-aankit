<%@ Page Language="C#" MasterPageFile="~/Project/MasterPage.master" Title="Home" %>



<asp:Content ID="Content1" ContentPlaceHolderID="PageContent" Runat="Server">
    <link href="CSS/home.css" rel="stylesheet" type="text/css" />
    
     <div id="content-wrap" >  

    <div id="myCarousel" class="carousel slide">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>                                
            </ol>
            <div class="carousel-inner timepass" role="listbox">                          
            </div>
         
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
         </div>
         
        <h3 class="popActors">Popular Actors</h3>
        <hr id="homeHR"/>         
             <div class="row">
        <div id ="topActors"> </div> 
             </div>         
        <script type="text/javascript" src="JS/home.js"></script>
     </div>
</asp:Content>

