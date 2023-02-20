// Define constants for all of the elements we will be working with
const form = document.querySelector('#myForm');
const nameInput = document.getElementById('fullName');
const emailInput = document.querySelector('#email');
const storyInput = document.querySelector('#story');
const nameError = document.getElementById('fullName + .field-error');
const emailError = document.querySelector('#emailAddress + .field-error');
const storyError = document.querySelector("#story + .field-error");



function validateName() {
    if (nameInput.validity.valid) {
          // Value is valid, so remove any previous error message
        nameError.textContent = '';
        } else {
                // Value is not valid, so display an error message
        showNameError();
        }
  //   Code that will run whenever we want to validate the fullName field
}

function showNameError() {
        nameError.textContent = 'Please enter your name';
}

function validateEmail() {
    if (emailInput.validity.valid) {
                    // Value is valid, so remove any previous error message
        emailError.textContent = '';
        } else {
                    // Value is not valid, so display an error message
        showEmailError();
        }

    // Code that will run whenever we want to validate the email field
}


   function showEmailError() {
        if (emailInput.validity.valueMissing) {
                      // The field is empty
        emailError.textContent = 'Please enter your email address';
        } else if (emailInput.validity.typeMismatch) {
                     // The field contains an invalid email address
        emailError.textContent = 'Your email address does not appear to be correct';
        }
    // Code to display an error message for the email field
}

function validateForm(event) {
             // Code that we want to run to validate the entire form (both fields)
               // Keep track of our validation "state"
        let formHasErrors = false;
        if (!nameInput.validity.valid) {
                  // Name input is invalid, show its error and change "state"
formHasErrors = true;
showNameError();
}
if (!emailInput.validity.valid) {
              // Email input is invalid, show its error and change "state"
        formHasErrors = true;
        showEmailError();
}
// Check the "state" to see if the form should be submitted
if (formHasErrors) {
event.preventDefault();
}
}


// Set up an event listener for each of the fields in the form
// The event we are listening for is "input" (occurs when user types or pastes text into a field)
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);

// Set up an event listener for the form
// The event we are listening for is "submit" (occurs when user trys to submit the form)
form.addEventListener('submit', validateForm);


