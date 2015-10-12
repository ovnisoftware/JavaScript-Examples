<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RockPaperScissors.aspx.cs" Inherits="JavaScriptExamples.RockPaperScissors" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="js/RPS.js"></script>
    <style>
        #panel {
            border: 5px solid black;
            height: 200px;
            width: 300px;
            padding: 5px;
            text-align: center;
            background-color: yellow;
            border-radius: 5px; /*rounds corners*/
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div id="panel">
            Select Rock, Paper, or Scissors:<br />
            <select id="Select1">
                <option>Rock</option>
                <option>Paper</option>
                <option>Scissors</option>
            </select>
            <input id="Button1" type="button" value="Play!" onclick="check()" /><br />
            <div id="panel2"></div>
        </div>
    </form>
</body>
</html>
