<%@ Page Title="TV Show Details" Language="C#" MasterPageFile="~/Project/MasterPage.master" %>


<asp:Content ID="Content1" ContentPlaceHolderID="PageContent" Runat="Server">
        <link href="CSS/movieDetailsCSS.css" rel="stylesheet" type="text/css" />    
     <div class="container">
    <div id="movieInformation"> 
            <div id="profileImage"></div>
            <div id="reldate"> <b>Release Date : </b></div>
            <div id="noSeasons"><b>No of Seasons :</b> </div>
            <div id="status"><b>Status : </b></div>
            <div id="avgCount"><b>Vote Average : </b></div> 
     </div>
     <div id="detailInfo">
       <h3 id="name"></h3> 
       <div id="overview"></div>
       <h3 class="hrHeading">Cast</h3>
       
       <div id="cast"><table class="table"></table></div>
     </div>
         </div>
     <script type="text/javascript" src="JS/URLParam.js"></script>
     <script type="text/javascript" src="JS/tvshowDetailsJS.js"></script>







</asp:Content>

