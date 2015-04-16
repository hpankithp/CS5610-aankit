<%@ Page Language="C#" MasterPageFile="~/Project/MasterPage.master" Title="Actor Details" %>

<asp:Content ID="HomeContent" ContentPlaceHolderId="PageContent" runat="server">
    <link href="CSS/actorDetails.css" rel="stylesheet" type="text/css" />
    <div id="mainActor" class="container">
        <div id="buildInformation">             
            <div id="profileImage"></div>
            <div id ="inline">
            <div id="bday"> <b>Birthday : </b></div>
            <div id="birthPlace"><b>Birth Place : </b></div>
            <div id="popularity"><b>Popularaity : </b></div>  
            <div id="homepage"><b>Homepage : </b></div> 
                </div>
      </div>
        <div id="wikiActor">
            <h3 id="name"></h3> 
            <div id="wikiText"></div>
            <h3 class="hrHeading">Movies</h3>
            
       <div id="movies">           
          <table class="table table-bordered">
                <tr>                     
                </tr>
           </table>
       </div>
     </div>
    </div>    
     <script type="text/javascript" src="JS/URLParam.js"></script>
     <script type="text/javascript" src="JS/actorDetails.js"></script>
    </asp:Content>
