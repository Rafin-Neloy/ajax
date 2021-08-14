function isValid(){
var FirstName = document.forms["Rform"]["firstname"].value;
var LastName = document.forms["Rform"]["lastname"].value;
var Gender = document.forms["Rform"]["gender"].value;
var Dob = document.forms["Rform"]["dob"].value;
var Tel = document.forms["Rform"]["tel"].value;
var Email = document.forms["Rform"]["email"].value;
var Religion = document.forms["Rform"]["religion"].value;
var Username = document.forms["Rform"]["username"].value;
var Password = document.forms["Rform"]["password"].value;
if(FirstName === ""){
document.getElementById("firstnameerr").innerHTML = "empty";

}

if(LastName === ""){
    document.getElementById("lastnameerr").innerHTML = "empty";    
    }

if(Gender === ""){
     document.getElementById("gendererr").innerHTML = "empty";      
    }

if(Dob === ""){
document.getElementById("doberror").innerHTML = "empty";
}

if(Email === ""){
document.getElementById("emailerr").innerHTML = "empty";
}

if(Tel === ""){
document.getElementById("telerr").innerHTML = "empty";
}


if(Religion === ""){
document.getElementById("religionerr").innerHTML = "empty";
}

if(Username === ""){
document.getElementById("usernameerr").innerHTML = "empty";
}

if(Password === ""){
document.getElementById("passworderr").innerHTML = "empty";
return false;
}
else{
    return true;
}

}