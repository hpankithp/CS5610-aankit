<%@ Page Language="C#" MasterPageFile="~/Project/MasterPage.master" Title="Movie Details" %>

<asp:Content ID="HomeContent" ContentPlaceHolderId="PageContent" runat="server">   
    <link href="CSS/movieDetailsCSS.css" rel="stylesheet" type="text/css" />    
     <div class="container">
     <div id="movieInformation"> 
            <div id="thumbnail"></div>
            <div id="reldate"> <b>Release Date : </b></div>
            <div id="runtime"><b>Runtime :</b> </div>
            <div id="revenue"><b>Revenue : </b></div>
            <div id="vote"><b>Vote Average : </b></div> 
     </div>
     <div id="movieDetails">
       <h3 id="name"></h3> 
       <div id="overview"></div>
       <h3 class="castData">Tagline</h3>
       <div id="tagline"></div>
       <h3 class="castData">Cast</h3>
       
       <div id="cast"><table class="table"> </table></div>
     </div>     
         </div>    
     <script type="text/javascript" src="JS/URLParam.js"></script>
     <script type="text/javascript" src="JS/movieDetailsJS.js"></script>     
 </asp:Content>