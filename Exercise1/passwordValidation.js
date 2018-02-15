function validatePassword(){
  var usersPassword1 = document.getElementById('pass1').value;
  var usersPassword2 = document.getElementById('pass2').value;
  for(var i = 0; i < usersPassword1.length; i++){
    if(usersPassword1[i] === " "){
      alert('Password cannot contian spaces. Please enter another password.')
    }
  }
  if(usersPassword1.length < 8){
    alert('Password needs to have at least 8 characters. Please enter another password.')
  }
  else if(usersPassword1 !== usersPassword2){
    alert("The password don't match. Please eneter passwords that match.")
  }
  else{
    alert("New password has been created.")
    window.location.reload();
  }
}

function clear() {
    document.getElementById("pass1").reset();
    document.getElementById("pass2").reset();
}
