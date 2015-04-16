<%@ Page Title="Search Page" Language="C#" MasterPageFile="~/Project/MasterPage.master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="PageContent" Runat="Server">
    <link href="CSS/searchPage.css" rel="stylesheet" type="text/css" />
    <div id="searchActor" class="row">     
     </div > 

    <div id="resultStats">
         <p id="totResults"><b>Total Results: </b></p>
         <p id="totPages"><b>Total Pages: </b></p>
     </div>
    <div class="btnheight">
     <form ><input type="button" value="Next" id="next" class="btn btn-primary"/></form>
     <form><input type="button" value="Prev" id="previous" class="btn btn-primary"/></form>   
        </div> 
     <script type="text/javascript" src="JS/URLParam.js"></script>
     <script type="text/javascript" src="JS/search.js"></script>
</asp:Content>

