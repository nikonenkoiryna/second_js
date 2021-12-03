var element = document.getElementById("login-button");
element.onclick = function(event) {
 	var signup_username=document.getElementById("Uname").value;
  	var signup_userpassword=document.getElementById("Pass").value;


	 
	if(signup_username==null || signup_username=="" ){
                  document.getElementById("error-label").innerHTML = "Enter Login";
		  return false;
                
        }

        if(signup_userpassword==null || signup_userpassword==""){
                  document.getElementById("error-label").innerHTML = "Enter Password";
                  return false;
        }


          alert("Register/Signup Successfull");
                         


}