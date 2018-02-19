function manipulation(){
  var r = parseInt(document.getElementById('rvalue').value);
  var g = parseInt(document.getElementById('gvalue').value);
  var b = parseInt(document.getElementById('bvalue').value);
  var w = parseInt(document.getElementById('wvalue').value);
  var br = parseInt(document.getElementById('brvalue').value);
  var bg = parseInt(document.getElementById('bgvalue').value);
  var bb = parseInt(document.getElementById('bbvalue').value);
  if (r === null){
    alert("Please enter the red value for the border")
  }
  else if (g=== null){
    alert("Please enter the green value for the border")
  }
  else if (b === null){
    alert("Please enter the blue value for the border")
  }
  else if (w == null){
    alert("Please enter the value of the width of the border")
  }
  else if (br === null){
    alert("Please enter the red value for the background")
  }
  else if (bg === null){
    alert("Please enter the green value for the background")
  }
  else if (bb === null){
    alert("Please enter the blue value for the background")
  }
  else{
    p1.style.borderColor = "rgb("+r+","+g+","+b+")";
    p1.style.borderWidth = w;
    p1.style.backgroundColor = "rgb("+br+","+bg+","+bb+")";
  }
}
