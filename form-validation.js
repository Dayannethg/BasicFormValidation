function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (userEntered.length >= 6)
  {
      document.getElementById("user").classList.add("has-success");
  }
  else {
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  var passEntered = document.getElementById("pass").value;
  if( passEntered === "password")
  {
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");

}
else {
  document.getElementById("pass").classList.add("has-success");
}

  //Show message that there is an error with the username...



}
