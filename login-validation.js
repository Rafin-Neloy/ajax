function isValid(){
    var UserName = document.forms["loginform"]["username"].value;
    var Password = document.forms["loginform"]["password"].value;
    if(UserName === ""){
    document.getElementById("usernameerr").innerHTML = "UserName empty";
    
    }
    
    if(Password === ""){
    document.getElementById("passworderr").innerHTML = "Password empty";
    return false;
    }
    else{
        return true;
    }
    
    }