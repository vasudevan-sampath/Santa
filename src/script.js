function listpage()
{
 //    document.getElementById("forms").style.display = "block";
 //    document.getElementById("initialpage").style.display = "none";
	// document.getElementById("gform").src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLjkDY7LKp3OU83JhVoOnTyckLGokYJ1YD1C5EeRfJialETB2rUFPWf8C44PVMB2WcK9OBMksv2qeH/pubhtml?widget=true&amp;headers=false";
	// document.getElementById("k").style.display = "block";
	document.getElementById("variable").innerHTML = 0;
	window.location = "https://docs.google.com/spreadsheets/d/1oIHm7H_I4X6T1Bweq_emkF4oa60GKjgMHGV-mVABTv0/edit?usp=sharing";
}
function formspage()
{
	document.getElementById("forms").style.display = "block";
	document.getElementById("gform").src = "https://docs.google.com/forms/d/e/1FAIpQLSdU34xgdOiZaG1rjOVDvnrQN1pNhiVN2UCbExkxPFw-cRziHA/viewform?embedded=true";
    document.getElementById("initialpage").style.display = "none";
    document.getElementById("k").style.display = "block";
    document.getElementById("variable").innerHTML = 1;
}

// function landhere()
// {
// 	document.getElementById("gform").src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLjkDY7LKp3OU83JhVoOnTyckLGokYJ1YD1C5EeRfJialETB2rUFPWf8C44PVMB2WcK9OBMksv2qeH/pubhtml?widget=true&amp;headers=false";
// }
function gotoHomePage()
{
   document.getElementById("forms").style.display = "none";
   document.getElementById("initialpage").style.display = "block";
   document.getElementById("k").style.display = "none";
   document.getElementById("variable").innerHTML = 0;
}
