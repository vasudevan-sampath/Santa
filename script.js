
function listpage()
{
  document.getElementById("variable").innerHTML = 0;
  window.location = "https://docs.google.com/spreadsheets/d/1rBS4BOLNTPoJB82OdLbXE6PXrcsbiGvX5AG9mQBeuTs/edit?usp=sharing";
}
function formspage()
{
    document.getElementById("sand").style = "background-image: url('src/bg7.jpg');background-size : auto";
    document.getElementById("forms").style.display = "block";
    document.getElementById("gform").src = "https://docs.google.com/forms/d/e/1FAIpQLScDeJ1_zY0hjb38itMQz2x3AfxcBAz_byBy8UVkiCr9u54eIg/viewform?embedded=true";
    document.getElementById("initialpage").style.display = "none";
    document.getElementById("k").style.display = "block";
    document.getElementById("variable").innerHTML = 1;
}

function gotoHomePage()
{
   document.getElementById("forms").style.display = "none";
   document.getElementById("initialpage").style.display = "block";
   document.getElementById("k").style.display = "none";
   document.getElementById("variable").innerHTML = 0;
   document.getElementById("sand").style = "background-image: url('src/bg7.jpg');background-size :100vw 100vh";
}

