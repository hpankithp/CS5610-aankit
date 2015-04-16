<%@ Page Language="C#" MasterPageFile="~/Project/MasterPage.master" Title="Contact Us" %>

<asp:Content ID="HomeContent" ContentPlaceHolderID="PageContent" runat="server">
    <div id="contact" class="container">
        <div id="address" class="glyphicon glyphicon-pencil">
            <b>Entertainment Space</b><br />
            <br />
            <address>
                198 HillSide Street,<br />
                Apartment No. 4,<br />
                Boston, MA, 02215<br />
                Contact No : +1 617 615 5363
            </address>          
        </div>
        <hr />
        <div id="mapData">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m7!1m2!1d2948.988854021338!2d-71.10093999990000!3d42.342721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f4f9bfa79d%3A0x7fd48a9eac3e5629!2s198+Hillside+St!5e0!3m2!1sen!2sus!4v1396769485397"
                width="400" height="300" style="border: 0"></iframe>
        </div>
    </div>
    <script type="text/javascript" src="JS/contacts.js"></script>
</asp:Content>
