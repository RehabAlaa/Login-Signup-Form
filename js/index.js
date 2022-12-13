let nameInp = document.getElementById("nameInp");
let emailInp = document.getElementById("emailInp");
let passwordInp = document.getElementById("passwordInp");
let signUp = document.getElementById("signUp");
let validName = document.getElementById("validName");
let validEmail = document.getElementById("validEmail");
let validPassword = document.getElementById("validPassword");
let registrationContainer = [];

function RegistrationForm() {
  if (
    validationNameInp() == true &&
    validationEmailInp() == true &&
    validationPasswordInp() == true
  ) {
    let registration = {
      name: nameInp.value,
      email: emailInp.value,
      password: passwordInp.value,
    };
    //console.log(registration);
    registrationContainer.push(registration);
    // console.log(registrationContainer);

    localStorage.setItem("UserAccounts", JSON.stringify(registrationContainer));
    clearForm();
    window.location = "login.html";
  }
}
signUp.addEventListener("click", RegistrationForm);
function clearForm() {
  nameInp.value = "";
  emailInp.value = "";
  passwordInp.value = "";
}

function validationNameInp() {
  nameInpRegex = /^[a-z]+$/;

  if (nameInp.value == "") {
    document.getElementById("nameAlert").classList.remove("d-none");
    document.getElementById("nameAlert").classList.add("d-flex");
    validName.innerHTML = "<b>Attention!</b> Enter Your Name";
    return false;
  } else {
    if (nameInpRegex.test(nameInp.value) == true) {
      document.getElementById("nameAlert").classList.remove("d-flex");
      document.getElementById("nameAlert").classList.add("d-none");

      validName.innerHTML = "";
      return true;
    } else {
      document.getElementById("nameAlert").classList.remove("d-none");
      document.getElementById("nameAlert").classList.add("d-flex");

      validName.innerHTML = "<b>Attention!</b> invalid Name";
      return false;
    }
  }
}
nameInp.addEventListener("input", validationNameInp);

function validationEmailInp() {
  emailInpRegex = /^[a-z]+\@(gmail|yahoo|hotmail)(\.com)$/;

  if (emailInp.value == "") {
    document.getElementById("emailAlert").classList.remove("d-none");
    document.getElementById("emailAlert").classList.add("d-flex");
    validEmail.innerHTML = "<b>Attention!</b> Enter Your Email";
    return false;
  } else {
    if (localStorage.getItem("UserAccounts") != null) {
      registrationContainer = JSON.parse(localStorage.getItem("UserAccounts"));

      for (let i = 0; i < registrationContainer.length; i++) {
        if (emailInp.value == registrationContainer[i].email) {
          console.log(registrationContainer[i].email);
          document.getElementById("emailAlert").classList.remove("d-none");
          document.getElementById("emailAlert").classList.add("d-flex");

          validEmail.innerHTML = "<b>Attention!</b> This Email Already Exist";
          return false;
        }
      }
    }
    if (emailInpRegex.test(emailInp.value) == true) {
      document.getElementById("emailAlert").classList.remove("d-flex");
      document.getElementById("emailAlert").classList.add("d-none");

      validEmail.innerHTML = "";
      return true;
      // }else{
      //     validEmail.innerHTML = "";
      //     return true;
      // }
    } else {
      document.getElementById("emailAlert").classList.remove("d-none");
      document.getElementById("emailAlert").classList.add("d-flex");

      validEmail.innerHTML = "<b>Attention!</b> invalid Email";
      return false;
    }
  }
  //}
}
emailInp.addEventListener("input", validationEmailInp);
//   function validateEmailExist() {
//     registrationContainer =JSON.parse( localStorage.getItem('UserAccounts'));
//     for (let i = 0; i < registrationContainer.length; i++) {
//         if(emailInp.value == registrationContainer[i].email){
//             validEmail.innerHTML = " This Email Already Exist";
//             return false;
//         }
//     }
//   }
//   signUp.addEventListener("click", validateEmailExist);

function validationPasswordInp() {
  passwordInpRegex = /[a-z]+[0-9]+/;

  if (passwordInp.value == "") {
    document.getElementById("passwordAlert").classList.remove("d-none");
    document.getElementById("passwordAlert").classList.add("d-flex");
    validPassword.innerHTML = "<b>Attention!</b> Enter Your Password";
    return false;
  } else {
    if (passwordInpRegex.test(passwordInp.value) == true) {
      document.getElementById("passwordAlert").classList.remove("d-flex");
      document.getElementById("passwordAlert").classList.add("d-none");
      validPassword.innerHTML = "";
      return true;
    } else {
      document.getElementById("passwordAlert").classList.remove("d-none");
      document.getElementById("passwordAlert").classList.add("d-flex");
      validPassword.innerHTML = "<b>Attention!</b> invalid Password";
      return false;
    }
  }
}
passwordInp.addEventListener("input", validationPasswordInp);
