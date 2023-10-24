// Function to initialize an accordion behavior for each item with class "accordion-content"
document.addEventListener("DOMContentLoaded", function () {
  const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item) => {
      const header = item.querySelector("header");

      header.addEventListener("click", () => {
          item.classList.toggle("is-open");
          const description = item.querySelector(".accordion-content-description");
          const icon = item.querySelector("i.fa-solid");

          if (item.classList.contains("is-open")) {
              description.style.height = description.scrollHeight + "px";
              icon.classList.replace("fa-plus", "fa-minus");
          } else {
              description.style.height = "0";
              icon.classList.replace("fa-minus", "fa-plus");
          }
      });
  });
});

  
// Function to handle feedback
function FeedB() {
  // Prompt the user for feedback
  const feedbackText = prompt("If you have already gone on a hike with us, leave feedback on how it went^^");
  
  // Check if the user provided feedback (not canceled)
  if (feedbackText !== null) {
    // Show a thank you message with the user's feedback
    alert("Thank you! Your feedback is very important to us: " + feedbackText);
  }
}


// Function to validate a form
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["phoneNumber"].value;
  let checkbox = document.forms["myForm"]["exampleCheck1"];
  
  if (x == "") {
      alert("Name must be filled out");
      return false;
  } else if (!/^[A-Za-z]+$/.test(x)) {
      alert("Name must contain only letters");
  } else if (y == "") {
      alert("Phone number must be filled out");
      return false;
  } else if (!/^\d{11}$/.test(y)) {
      alert("Phone number must contain 11 digits");
      return false;
  } else if (!checkbox.checked) {
      alert("You must agree to the terms.");
      return false;
  } else {
      return true; // Form is valid
  }
}

// Function to scroll to a specific form element
function scrollToForm() {
    var form = document.getElementById("registration-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the form
    }
  }
