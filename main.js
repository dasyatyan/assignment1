
function validateForm(){
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["phoneNumber"].value;
  let checkbox = document.forms["myForm"]["exampleCheck1"];
  if (x == ""){
      alert("Name must be filled out");
      return false;
  }
  else if(!/^[A-Za-z]+$/.test(x)){
      alert("Name must contain only letters")
  }
  else if(y == ""){
      alert("Phone number must be filled out");
      return false;
  }
  else if(!/^\d{11}$/.test(y)){
      alert("Phone number must contain 11 digits");
      return false;
  }
  else if (!checkbox.checked) {
      alert("You must agree to the terms.");
      return false;
  }
  else{
      return true;
  }
}

function scrollToForm() {
    var form = document.getElementById("registration-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" }); 
    }
  }

  
